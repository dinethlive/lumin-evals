# Findings

Every finding the audit has raised against the engine, by status. A finding is a place where the engine and the printed KP books disagreed, or where a rule shipped with no source behind it. "Through" names the research questions the finding raised or was closed by.

## Open (8)

| Id | Raised | Kind | Finding | Through |
| --- | --- | --- | --- | --- |
| F006 | 2026-08-13 | provenance | The engine cites two source trees and neither exists | Q015, Q018, Q019 |
| F012 | 2026-08-13 | gap | The timing cascade advertises a Lagna tier it does not implement | Q002 |
| F015 | 2026-08-13 | defect | The test suite mostly asserts that code ran, not that it is right |  |
| F017 | 2026-08-13 | defect | "'Legal Disputes / Court' is an occurrence gate that reads like an outcome gate, and puts the opponent's house on the required side" | Q004 |
| F031 | 2026-08-18 | unsourced | Thirteen definitions of STRONG, five scales, one vocabulary, and KP has no number at all | Q012, Q014, Q017 |
| F051 | 2026-08-22 | unsourced | Two of fifteen saham formulas are attested, one of those disagrees with the engine, and Yasas admits its own substitution | Q022 |
| F056 | 2026-08-22 | unsourced | The weather verdict's rain and drought house sets match no stated convention, and put the 6th on the dry side | Q018 |
| F060 | 2026-08-29 | defect | The oncology promise is gated on an invented star-lord "cure bias", and the comment says so | Q020 |

## Partly fixed (1)

| Id | Raised | Kind | Finding | Through |
| --- | --- | --- | --- | --- |
| F061 | 2026-08-29 | provenance | KP states a grammar for building a denial group, and 71 of the 78 event rows do not follow it | Q021 |

## Fixed (55)

| Id | Raised | Kind | Finding | Through |
| --- | --- | --- | --- | --- |
| F001 | 2026-08-13 | defect | Sade Sati phase walker collapses on Saturn's retrograde re-entry |  |
| F002 | 2026-08-13 | provenance | Sade Sati verdict hardcodes the reading its cited source refutes | Q004 |
| F003 | 2026-08-13 | provenance | Vedha rules transcribed correctly, then tagged as KP by the book that rejects them | Q013, Q017 |
| F004 | 2026-08-13 | defect | Transit star lord and sub lord have swapped roles in get_transit_analysis | Q001, Q007, Q017 |
| F005 | 2026-08-13 | unsourced | Sade Sati intensity multipliers are unsourced and keyed to planet identity | Q012 |
| F007 | 2026-08-13 | defect | Transit timing opens a window on star OR sub, where the corpus requires both | Q002, Q007, Q011 |
| F008 | 2026-08-13 | gap | Lagna minute-prediction gates on the sub lord alone and never reads the star lord | Q003, Q011 |
| F009 | 2026-08-13 | defect | The weather compactor claimed any response with a top-level windows array, and reduced get_sade_sati_intensity to 19 characters |  |
| F010 | 2026-08-13 | provenance | An electional event was named from a misread heading, so partnership meetings elected on scholarship-letter houses | Q006, Q022 |
| F011 | 2026-08-13 | defect | A natal retrograde star lord was treated as denial, where KP treats it as delay | Q001, Q019 |
| F013 | 2026-08-13 | gap | Triple confirmation checks star and sub but never the sign | Q002, Q003, Q011, Q019, Q020 |
| F014 | 2026-08-13 | defect | The KP ayanamsa was 85 arcminutes wrong, so 78% of all sub lords were one position off | Q003, Q005, Q010, Q011, Q019 |
| F016 | 2026-08-13 | defect | The litigation verdict computed the sixth house, printed it, and then left it out of the comparison | Q004, Q010, Q021 |
| F018 | 2026-08-13 | defect | Ashtama Sani came back as a bare date range, which is the exact output four Reader 5 chapters exist to reject | Q004 |
| F019 | 2026-08-13 | defect | The progeny denial group was missing the 10th, and the adoption rule was filed under miscarriage | Q007, Q010, Q021 |
| F020 | 2026-08-13 | gap | Punarphoo has a Reader 4 chapter to itself as a marriage rule, and the engine computed it only inside the electional scan | Q008 |
| F021 | 2026-08-13 | defect | The Porutham rejection was right and almost every fact in it was wrong, and the six points KSK substitutes were missing |  |
| F022 | 2026-08-13 | defect | Mars Dosha used one reference point of three and counted houses where the corpus says signs | Q009, Q017 |
| F023 | 2026-08-13 | gap | KSK's replacement for Mars Dosha is implemented, and its raw form fires on 100% of charts | Q009 |
| F024 | 2026-08-13 | gap | The engine could say whether marriage is promised and when, and nothing about why it is late | Q008 |
| F025 | 2026-08-13 | defect | The spouse description was read from a planet the corpus never names, on the authority of a file that does not exist |  |
| F026 | 2026-08-13 | contradiction | The four-level order is corpus-confirmed, its conditional on L2 and L4 is now settled and implemented, and the two uncited weight tables are unified | Q010 |
| F027 | 2026-08-14 | defect | bunfig.toml set a 30s test timeout, bun test ignored it silently, and CI has been running at 5s |  |
| F028 | 2026-08-14 | defect | The querent's horary number is computed, reported, and then discarded. It never reaches the chart. | Q016 |
| F029 | 2026-08-17 | unsourced | The level weight table is declared 23 times, and the file that says it is the only one is wrong | Q012, Q013, Q015 |
| F030 | 2026-08-18 | unsourced | The ruling-planet role ladder invents weights and silently picks one of three corpus orders | Q012, Q018 |
| F032 | 2026-08-18 | defect | The hospitalization house group carried the cure house and dropped the body | Q013, Q014, Q021 |
| F033 | 2026-08-18 | provenance | A sign-occupancy panel and an uncodified transplant method were both tagged kp | Q013, Q015, Q017, Q018 |
| F034 | 2026-08-18 | gap | The cure window timed a cure without ever asking whether there is one | Q013 |
| F035 | 2026-08-19 | defect | The cuspal sub lord verdict was gated on dignity, retrogression and combustion, which KP discards by name | Q003, Q009, Q019, Q020 |
| F036 | 2026-08-21 | provenance | get_aspects_and_strength ships Parashari graha drishti and a Parashari strength score, tagged kp, in the foundation group | Q019 |
| F037 | 2026-08-21 | provenance | The Four Step Theory was credited to Hariharan on four surfaces; it is Sunil Gondhalekar's | Q019 |
| F038 | 2026-08-21 | defect | The MCP compactor deleted 92% of the promise response, including every reason for the verdict | Q019 |
| F039 | 2026-08-22 | defect | The promise verdict denied on ONE denial house, on a rule no corpus page states | Q014, Q015, Q020 |
| F040 | 2026-08-22 | defect | Chronic Illness carried the body house in its denial group and an electional cure set as its negation | Q014, Q021 |
| F041 | 2026-08-22 | defect | The event resolver matched inside a word, so "employment" resolved to Unemployment |  |
| F042 | 2026-08-22 | defect | career_possible was decided by the obstruction houses and never read the career houses it computed | Q015, Q020 |
| F043 | 2026-08-22 | defect | Horary retrograde rules were gating natal career promises in two tools | Q015 |
| F044 | 2026-08-22 | defect | Job Loss / Termination carried the general loss triad, not the end-of-service group | Q015, Q017, Q018, Q021, Q022 |
| F045 | 2026-08-22 | defect | normalize360 was not the identity for in-range values, and KP decides on boundaries | Q016 |
| F046 | 2026-08-22 | defect | Ashtakavarga is computed in houses and read as signs, so 93.6% of its sign scores are wrong | Q017 |
| F047 | 2026-08-22 | unsourced | Shadbala ships the six classical names over six invented 0-100 scores, and one of them is inverted |  |
| F048 | 2026-08-22 | defect | Vimsopaka drops two of the sixteen vargas and scores the rest on an invented dignity ladder |  |
| F049 | 2026-08-22 | defect | Kemadruma is structurally unreportable, its cancellation fires on 100% of charts that reach it | Q017 |
| F050 | 2026-08-22 | defect | Chara dasha runs zodiacally for every chart, and the karaka scheme calls a live dispute "the authentic method" |  |
| F052 | 2026-08-22 | defect | Parivartana is classified by the houses the planets occupy, where Phaladeepika classifies by the houses they own |  |
| F053 | 2026-08-22 | defect | Graha yuddha names the winner by dignity and lower longitude, where Brihat Samhita names it by latitude |  |
| F054 | 2026-08-22 | provenance | Kalsarpa ships as a Severe dosha with named remedies, and no classical text contains it | Q017 |
| F055 | 2026-08-22 | provenance | The weather family blends three traditions under one absent citation and ships all four tools tagged kp | Q018 |
| F057 | 2026-08-28 | defect | The coverage ladder issued DENIED on an invented threshold, for a cuspal sub lord that does reach the required group | Q021 |
| F058 | 2026-08-28 | defect | Business Start read two cusps and took the weaker, where KSK names the 7th cusp sub lord and the houses 2, 7 and 10 | Q021 |
| F059 | 2026-08-29 | defect | The star-lord denial route is the cuspal sub lord's own significations counted twice, and where it is not, it reaches two stellar hops above the cusp | Q020 |
| F062 | 2026-08-29 | defect | The nakshatra was recomputed from the longitude instead of read off the row, and contradicted its own star lord on 9 of the 249 horary numbers |  |
| F063 | 2026-08-29 | defect | "\"Stationary\" was an invented state with three incompatible definitions, and the question KP actually asks, when does the planet turn direct, had no answer at all" |  |
| F064 | 2026-08-29 | defect | Every audit script subtracted the UTC offset twice, so the 48-chart spread was never the spread it named |  |

## Research questions (22)

| Id | Status | Question |
| --- | --- | --- |
| Q001 | answered | Is a natal retrograde star lord a DENIAL, or only a delay? |
| Q002 | answered | Where does the Saturn / Jupiter / Sun / Moon tier structure come from? |
| Q003 | answered | Lagna transit: "Constellation or sub", or star and sub and sub-sub? |
| Q004 | answered | Is the Sade Sati benefic house set wider than 10 and 11? |
| Q005 | answered | What are KSK's own published ayanamsa values, year by year? |
| Q006 | answered | For each electional house group, what event does KP literature attach it to? |
| Q007 | answered | Horary "when will they arrive", and the progeny reading. Does the engine cover either properly? |
| Q008 | answered | Punarphoo: which houses must Saturn occupy? The corpus sentence has its numbers missing. |
| Q009 | answered | KSK replaces Mars Dosha with a sub-lord test. Which houses does it name? |
| Q010 | answered | Do occupants and owners stop signifying a house when their own star is tenanted? |
| Q011 | answered | Must a ripe transit occupy the significator's SIGN as well as its star and sub? |
| Q012 | answered | Does KP assign a number to anything, or is every score in this engine an invention? |
| Q013 | answered | Is there a medical KP, and is this engine's health surface actually it? |
| Q014 | answered | Does ONE denial house deny a matter, or does the whole denial group have to be signified? |
| Q015 | answered | What is the KP method for profession, and how much of this engine's career surface is it? |
| Q016 | answered | Exactly how does a KP horary number become a chart, and what does the number fix? |
| Q017 | answered | Where is chapter and verse for the 53 tools whose tradition is not in the corpus? |
| Q018 | answered | Is there a KP weather method, and whose is the one this engine ships? |
| Q019 | answered | What does KP FORBID, and what does it discard from Parashari? |
| Q020 | answered | When the cuspal sub lord's STAR LORD signifies a denial house, is that a different verdict from the sub lord doing it? |
| Q021 | answered | For the events KSK does not state a house group for, what do the KP successors state, and which variant is most attested? |
| Q022 | open | What are the Tajika saham formulas as *Tajika Neelakanthi* states them, and which of the engine's fifteen match? |
