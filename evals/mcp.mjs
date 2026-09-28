/**
 * A minimal client for the Lumin MCP server. One function: call a tool and
 * return its parsed result. Streamable HTTP, stateless, JSON-RPC 2.0. The
 * server answers with either a JSON body or a short event stream, and both
 * are handled.
 */
const DEFAULT_URL = "https://mcp.lumin.guru/mcp";

export function client({ apiKey, url = process.env.LUMIN_MCP_URL || DEFAULT_URL } = {}) {
  if (!apiKey) throw new Error("LUMIN_API_KEY is required. Create a key at https://app.lumin.guru/api-keys");
  let id = 0;

  async function rpc(method, params) {
    const body = { jsonrpc: "2.0", id: ++id, method, params };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json, text/event-stream",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 401) throw new Error("401 from the server: the key was refused");
    if (res.status === 429) throw new Error("429 from the server: the monthly allowance is spent. See https://lumin.guru/pricing");
    if (!res.ok) throw new Error(`${res.status} from the server`);

    const type = res.headers.get("content-type") || "";
    const text = await res.text();
    let message;
    if (type.includes("text/event-stream")) {
      for (const line of text.split("\n")) {
        if (!line.startsWith("data:")) continue;
        const parsed = JSON.parse(line.slice(5).trim());
        if (parsed.id === body.id) message = parsed;
      }
    } else {
      message = JSON.parse(text);
    }
    if (!message) throw new Error("no JSON-RPC response in the reply");
    if (message.error) throw new Error(`${method}: ${message.error.message}`);
    return message.result;
  }

  return {
    /** Calls a tool and returns its JSON payload. */
    async call(name, args) {
      const result = await rpc("tools/call", { name, arguments: args });
      const text = result?.content?.find((c) => c.type === "text")?.text;
      if (result?.isError) throw new Error(`${name}: ${text || "tool error"}`);
      if (!text) throw new Error(`${name}: empty result`);
      return JSON.parse(text);
    },
    /** Lists the tools, which is the cheapest way to confirm a key works. */
    async list() {
      const result = await rpc("tools/list", {});
      return result.tools.map((t) => t.name);
    },
  };
}
