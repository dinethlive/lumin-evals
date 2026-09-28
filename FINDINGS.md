# Findings

Every finding the audit has raised against the engine, by status. A finding is a place where the engine and the printed KP books disagreed, or where a rule shipped with no source behind it. "Through" names the research questions the finding raised or was closed by.

## Open (11)

| Id | Raised | Kind | Finding | Through |
| --- | --- | --- | --- | --- |
| F006 | 2026-08-13 | provenance | The engine cites two source trees and neither exists | Q015, Q018, Q019 |
| F012 | 2026-08-13 | gap | The timing cascade advertises a Lagna tier it does not implement | Q002 |
| F017 | 2026-08-13 | defect | "'Legal Disputes / Court' is an occurrence gate that reads like an outcome gate, and puts the opponent's house on the required side" | Q004, Q028 |
| F031 | 2026-08-18 | unsourced | Thirteen definitions of STRONG, five scales, one vocabulary, and KP has no number at all | Q012, Q014, Q017, Q023, Q030, Q031, Q041 |
| F056 | 2026-08-22 | unsourced | The weather verdict's rain and drought house sets match no stated convention, and put the 6th on the dry side | Q018 |
| F078 | 2026-09-13 | accuracy | The engine's Lahiri sits 14 to 15 arcseconds from Swiss Ephemeris's Lahiri, and had no external oracle until Spica arrived |  |
| F081 | 2026-09-13 | wrong-attribution | The combustion grades use a per-planet table where Reader 1 prints one flat three-band rule, and the two disagree on 2.58% of planet rows |  |
| F082 | 2026-09-13 | wrong-attribution | get_mantra_recommendation names three loci and none carries a mantra rule, while the page that does discuss propitiation refuses it |  |
| F083 | 2026-09-13 | provenance | BPHS 27.34-36's Chesta minimum, as transmitted, sits above Chesta bala's own maximum, so no chart can pass that gate |  |
| F084 | 2026-09-14 | provenance | KP's aspect orb table and its moiety rule are the Tajik deeptamsa doctrine, and one of its seven values is probably a damaged digit |  |
| F166 | 2026-09-28 | provenance | The fruitful filter reads the Ruling Planets with no node rule, where the page that defines fruitful selection includes the nodes, and KSK's own Reader 6 rule (add the node) ships under the name "web-always-add" |  |

## Partly fixed (6)

| Id | Raised | Kind | Finding | Through |
| --- | --- | --- | --- | --- |
| F015 | 2026-08-13 | defect | The test suite mostly asserts that code ran, not that it is right | Q025 |
| F051 | 2026-08-22 | unsourced | Two of fifteen saham formulas are attested, one of those disagrees with the engine, and Yasas admits its own substitution | Q022, Q031, Q034 |
| F077 | 2026-09-13 | provenance | Module headers mix printed and canon page numbers with no label, and one page number is wrong under both | Q040 |
| F106 | 2026-09-27 | defect | get_subsub_boundary's twin-divergence index says HIGH for 82% of random charts and LOW for none, and carries no scoreProvenance |  |
| F144 | 2026-09-27 | provenance | Seven of the sixteen yogas run on Q031's paraphrase where the Tajikanilakanthi states different conditions, and the two called undefined are defined there |  |
| F146 | 2026-09-27 | unsourced | The year-lord aspect gate tests each candidate against the ascendant with its own full deeptamsa, a reading no source states, and a sign-only gate picks a different year lord on 44% of charts |  |

## Fixed (143)

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
| F014 | 2026-08-13 | defect | The KP ayanamsa was 85 arcminutes wrong, so 78% of all sub lords were one position off | Q003, Q005, Q010, Q011, Q019, Q024 |
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
| F035 | 2026-08-19 | defect | The cuspal sub lord verdict was gated on dignity, retrogression and combustion, which KP discards by name | Q003, Q009, Q019, Q020, Q029 |
| F036 | 2026-08-21 | provenance | get_aspects_and_strength ships Parashari graha drishti and a Parashari strength score, tagged kp, in the foundation group | Q019 |
| F037 | 2026-08-21 | provenance | The Four Step Theory was credited to Hariharan on four surfaces; it is Sunil Gondhalekar's | Q019, Q030 |
| F038 | 2026-08-21 | defect | The MCP compactor deleted 92% of the promise response, including every reason for the verdict | Q019 |
| F039 | 2026-08-22 | defect | The promise verdict denied on ONE denial house, on a rule no corpus page states | Q014, Q015, Q020, Q028 |
| F040 | 2026-08-22 | defect | Chronic Illness carried the body house in its denial group and an electional cure set as its negation | Q014, Q021 |
| F041 | 2026-08-22 | defect | The event resolver matched inside a word, so "employment" resolved to Unemployment |  |
| F042 | 2026-08-22 | defect | career_possible was decided by the obstruction houses and never read the career houses it computed | Q015, Q020 |
| F043 | 2026-08-22 | defect | Horary retrograde rules were gating natal career promises in two tools | Q015 |
| F044 | 2026-08-22 | defect | Job Loss / Termination carried the general loss triad, not the end-of-service group | Q015, Q017, Q018, Q021, Q022, Q028 |
| F045 | 2026-08-22 | defect | normalize360 was not the identity for in-range values, and KP decides on boundaries | Q016 |
| F046 | 2026-08-22 | defect | Ashtakavarga is computed in houses and read as signs, so 93.6% of its sign scores are wrong | Q017 |
| F047 | 2026-08-22 | unsourced | Shadbala ships the six classical names over six invented 0-100 scores, and one of them is inverted | Q033, Q034 |
| F048 | 2026-08-22 | defect | Vimsopaka drops two of the sixteen vargas and scores the rest on an invented dignity ladder |  |
| F049 | 2026-08-22 | defect | Kemadruma is structurally unreportable, its cancellation fires on 100% of charts that reach it | Q017 |
| F050 | 2026-08-22 | defect | Chara dasha runs zodiacally for every chart, and the karaka scheme calls a live dispute "the authentic method" | Q026, Q032 |
| F052 | 2026-08-22 | defect | Parivartana is classified by the houses the planets occupy, where Phaladeepika classifies by the houses they own |  |
| F053 | 2026-08-22 | defect | Graha yuddha names the winner by dignity and lower longitude, where Brihat Samhita names it by latitude |  |
| F054 | 2026-08-22 | provenance | Kalsarpa ships as a Severe dosha with named remedies, and no classical text contains it | Q017 |
| F055 | 2026-08-22 | provenance | The weather family blends three traditions under one absent citation and ships all four tools tagged kp | Q018 |
| F057 | 2026-08-28 | defect | The coverage ladder issued DENIED on an invented threshold, for a cuspal sub lord that does reach the required group | Q021 |
| F058 | 2026-08-28 | defect | Business Start read two cusps and took the weaker, where KSK names the 7th cusp sub lord and the houses 2, 7 and 10 | Q021 |
| F059 | 2026-08-29 | defect | The star-lord denial route is the cuspal sub lord's own significations counted twice, and where it is not, it reaches two stellar hops above the cusp | Q020 |
| F060 | 2026-08-29 | defect | The oncology promise is gated on an invented star-lord "cure bias", and the comment says so | Q020 |
| F061 | 2026-08-29 | provenance | KP states a grammar for building a denial group, and 71 of the 78 event rows do not follow it | Q021, Q028 |
| F062 | 2026-08-29 | defect | The nakshatra was recomputed from the longitude instead of read off the row, and contradicted its own star lord on 9 of the 249 horary numbers |  |
| F063 | 2026-08-29 | defect | "\"Stationary\" was an invented state with three incompatible definitions, and the question KP actually asks, when does the planet turn direct, had no answer at all" |  |
| F064 | 2026-08-29 | defect | Every audit script subtracted the UTC offset twice, so the 48-chart spread was never the spread it named |  |
| F065 | 2026-09-10 | defect | Two of the fifteen sahams were byte-identical to two others, so the tool returned thirteen points under fifteen names | Q022 |
| F066 | 2026-09-10 | gap | KP does not discard dignity and combustion, it moves them to the constellation lord, and the engine implements neither the discard nor the replacement | Q023 |
| F067 | 2026-09-10 | defect | The Moon and every house cusp sat on the mean equinox while the Sun and planets sat on the true one, up to 18.8 arcseconds apart in the same chart | Q025, Q027, Q029 |
| F068 | 2026-09-10 | provenance | KSK's own printed ayanamsa table is two straight segments about 2 arcminutes apart, and the base Q005 pinned came from software rather than the page | Q024 |
| F069 | 2026-09-10 | defect | The fruitful-significator compactor deleted the Ruling Planet roles and the C4 tiebreak rank on the way to every MCP caller | Q014 |
| F070 | 2026-09-11 | defect | Five more compactors were deleting KP claims on the wire, all caught the day the golden-payload test existed |  |
| F071 | 2026-09-11 | defect | The planets sat up to ten arcminutes off the JPL lineage, from truncated tables, no light-time, and the Sun's aberration applied to planets | Q027, Q029 |
| F072 | 2026-09-11 | defect | The "true" lunar node was Meeus's five-term approximation, up to twelve arcminutes from the osculating node, under a comment claiming one arcsecond | Q029 |
| F073 | 2026-09-11 | provenance | The 78 event rows gain their pages; 16 shipped a group no page states and are corrected from the corpus, moving 12.0% of verdicts | Q028 |
| F074 | 2026-09-12 | provenance | The engine offers six ayanamsas and computes five, because true_chitra is routed to the Lahiri function |  |
| F075 | 2026-09-12 | wrong-attribution | The paradigm panel read KP's definitions of house lord AND house placement and labelled them Parashari | Q030 |
| F076 | 2026-09-12 | wrong-attribution | Ten non-KP modules judge houses by the Placidus bhava, and a kendra flips 27% of the time | Q037 |
| F079 | 2026-09-13 | accuracy | The eclipse screen misses every penumbral lunar eclipse (7 of 26 in 2000 to 2010) and passes one non-eclipse in 25 solar syzygies |  |
| F080 | 2026-09-13 | correctness | Ashtottari and Yogini start the wrong lord, carry no balance at birth, and hand the wall clock in as UTC |  |
| F085 | 2026-09-14 | provenance | The varshaphala year lord is the annual lagna lord taken unconditionally, and only the file header claims otherwise | Q034 |
| F086 | 2026-09-14 | provenance | Patyayini was never blocked on panchavargeeya bala, and four documents said it was | Q035, Q036 |
| F087 | 2026-09-14 | correctness | get_multi_system_verdict's documented house_group path never worked, and omitting the optional event returned a 500 |  |
| F088 | 2026-09-27 | defect | run_triple_dasha_consensus rewrites the event name before resolving it, and reports one overlap as both a triple and a double |  |
| F089 | 2026-09-27 | provenance | run_triple_dasha_consensus calls three systems independent and returns STRONG for most charts, because two of its three inputs ignore the event |  |
| F090 | 2026-09-27 | provenance | get_reading_protocol tells agents that concordance between systems is a stronger prediction, and contradicts itself on Ashtakoota and the D charts |  |
| F091 | 2026-09-27 | gap | get_paradigm_panel declares TIMING_DIVERGENCE but no reader returns a window, so timing is never compared, and its Jaimini column still predates Q032 |  |
| F092 | 2026-09-27 | defect | The first mahadasha divides its balance among all nine bhuktis, which KSK forbids in so many words |  |
| F093 | 2026-09-27 | defect | In the six subs split at a sign boundary, the sub-sub lords tile each fragment instead of the whole sub, so 2.2% of the zodiac carries a wrong sub-sub lord |  |
| F094 | 2026-09-27 | defect | The Ruling Planets day lord changes at civil midnight, where KSK says the day runs sunrise to sunrise, and five callers hand it a true instant besides |  |
| F095 | 2026-09-27 | defect | get_sublord_changes reports a sign seam as a sub-lord change, returns -1 for Saturn one time in five, and describes a response shape it does not return |  |
| F096 | 2026-09-27 | provenance | get_chidra_dasha is tagged kp and cites "KP Reader 3 ch.51", which is the gem chapter; the corpus has no chidra dasha and the 7/8 cut matches no antardasha boundary |  |
| F098 | 2026-09-27 | defect | get_stellar_dasha_bifurcation labels the dasha lord's STAR lord as the Four Step end indicator; the engine's own Four Step module uses the star lord of the SUB lord |  |
| F099 | 2026-09-27 | provenance | F037's Four Step attribution came back on seven surfaces, and one of them says F037 corrected it the other way |  |
| F100 | 2026-09-27 | defect | get_rp_interval cannot receive a place or a UTC offset, so every MCP call computes the Ascendant lords for Chennai and reads the times as UTC |  |
| F101 | 2026-09-27 | defect | get_ruling_planets promises six named fields, three of which the default response never contains, and a gating claim KP does not make |  |
| F102 | 2026-09-27 | defect | Fruitful significators are filtered through the Ruling Planets of the BIRTH moment, where KSK takes the Ruling Planets of the moment of judgement |  |
| F103 | 2026-09-27 | defect | F028 did not reach get_horary_advanced or get_horary_serial; both still cast the Ascendant from the clock and ignore the querent's number |  |
| F104 | 2026-09-27 | unsourced | The khullar frame is Lahiri minus 3′ with no source, and sits 2.4′ to 2.8′ below the formula research attributes to Khullar, enough to flip a quarter of sub-sub lords |  |
| F105 | 2026-09-27 | defect | get_boundary_warnings finds the boundary by stepping 18″ at a time, so its distance and boundary longitude are up to 18″ off, and its "1 Kala = 6′" is not the corpus's kala | Q026 |
| F110 | 2026-09-27 | defect | Three Bhinnashtakavarga contributor rows are wrong, the per-planet totals still come out right, so the 337 check that "verified" the table cannot see it | Q040 |
| F111 | 2026-09-27 | defect | D-60 starts even signs from the 7th, a rule neither A14 reading states, and its comment claims equivalence with a formula it does not compute; D-60 is Vimsopaka's heaviest varga |  |
| F112 | 2026-09-27 | defect | D-6 and D-8 are sold as "per BPHS ch.6", are not among BPHS's sixteen, and map 93% of placements differently from the scheme the tradition that uses them states | Q040 |
| F113 | 2026-09-27 | defect | computeD9Longitude rounds to 0.01° before callers read the sign from it, so a body within about 2 arcseconds of a navamsa boundary lands in the next navamsa sign |  |
| F114 | 2026-09-27 | defect | Ashta Koota scores the sworn-enemy yonis as friends, collapses Graha Maitri to three rungs, drops the 5/9 Bhakoot dosha and calls Janma tara bad; 70% of match totals are wrong |  |
| F115 | 2026-09-27 | defect | detect_yogas computes a different rule from the one it names for Raja, Dhana, Gajakesari and Lakshmi yoga | Q040 |
| F116 | 2026-09-27 | defect | Budh-Aditya can only fire between 14° and 15° of Sun-Mercury separation, and Pancha Mahapurusha returns the first yoga it finds and hides the rest |  |
| F117 | 2026-09-27 | defect | Sunafa, Anafa, Durdhura, Vesi, Vasi and Ubhayachari count Placidus houses from the Moon or the Sun, so a chart can report Kemadruma and Sunafa at once |  |
| F118 | 2026-09-27 | defect | Parivartana is classed by every house either planet owns, not by the two houses exchanged, so the 28/8/30 partition of 66 cannot close and 75% of exchanges come out Dainya |  |
| F119 | 2026-09-27 | defect | Ekadhipatya shodhana applies one of its rules, ignoring bindu counts, and never reduces a pair where both signs are empty; 44% of reduced Sarvashtakavarga signs differ | Q040 |
| F120 | 2026-09-27 | defect | Ashtottari spreads Saturn's dasha over three nakshatras where the module's own rule says a malefic's spans four, so the balance at birth is wrong by up to 1.7 years for 1 birth in 9 | Q040 |
| F121 | 2026-09-27 | provenance | Dwisaptati-sama applies when the lagna lord is "in the 1st or the 7th"; the received reading is the lagna lord in the 7th or the 7th lord in the lagna, and no verse is quoted for either | Q040 |
| F122 | 2026-09-27 | unsourced | get_vargottama_planets ships a strength multiplier of 2.0 that A15 says no source assigns, and Vimsopaka's five bands carry no scoreProvenance |  |
| F123 | 2026-09-27 | defect | get_aspects_and_strength promises Western aspect names and an `aspects` array, and returns graha drishti ordinals in three other arrays; it also calls Bhava bala "6-fold" |  |
| F124 | 2026-09-27 | gap | Classical Drik bala sums the general sputa scale only and drops the full special aspects of Mars, Jupiter and Saturn that A36 says override it | Q040 |
| F125 | 2026-09-28 | defect | The derived special-aspect promotion in sputa-drishti.ts returns a full 60 virupas across the whole 180-300° segment for Mars, Jupiter and Saturn, where BPHS 26.9-12 gives graduated values down to 0 |  |
| F130 | 2026-09-27 | defect | The chara karaka tie rule fires on a shared WHOLE degree, so the "seven-karaka scheme" ships eight karakas for 55% of charts and makes Rahu the Atmakaraka in 7% |  |
| F131 | 2026-09-27 | provenance | get_chara_karakas names the two karaka schools backwards on the wire, and the Jaimini sutra numbers in the engine and the sheet name no numbering tradition (A32's names the argala block) |  |
| F132 | 2026-09-27 | defect | get_chara_dasha's primary reading counts every sign's years in the dasha's direction, a rule no named lineage states, so it matches none of K. N. Rao, SJC or Raghava Bhatta and differs from each on the current period in 78% to 85% of charts |  |
| F133 | 2026-09-27 | gap | get_chara_dasha returns no antardashas, though every lineage the sources name divides each sign period into twelve, and the lineages disagree on where the twelve start |  |
| F134 | 2026-09-27 | defect | get_chara_karakas and run_karakamsa_spiritual_lens still report the Placidus bhava as the house, which is not the Jaimini house for half the karakas (F076 missed them) |  |
| F135 | 2026-09-27 | defect | get_ishta_devata skips A22's second step (the aspecting planet) and, among several occupants, takes whichever comes first in the planet record, while its header says "strongest" |  |
| F136 | 2026-09-27 | gap | The arudha padas never consult the Scorpio/Aquarius node co-lord, report no exception variant and no Upapada variant, and A20 calls the construction undisputed; the co-lord alone moves a pada in 95% of charts |  |
| F137 | 2026-09-27 | provenance | The claim that Jaimini has no promise gate ships from six places, and F091's fix names one of them |  |
| F140 | 2026-09-27 | defect | The solar return is searched from 1 January UTC, so near the year boundary a target year gets the wrong return, one year is skipped and another is cast twice |  |
| F141 | 2026-09-27 | defect | The mudda dasha opens one Vimshottari lord behind the published mapping on every chart and every year, runs with no balance, and its annual-Moon variant is a formula no source states |  |
| F142 | 2026-09-27 | defect | The poorna (perfected) flag is true on every ithasala and false on exactly the ones that are perfected | Q031 |
| F143 | 2026-09-27 | defect | Nakta and yamaya carry each other's Arabic gloss on the wire, and nakta never tests that the middle planet separates from one and applies to the other | Q031 |
| F145 | 2026-09-27 | provenance | The tri-rashi-pati uses the Graeco-Arabic triplicity table and never names the Tajik sign-by-sign table, which differs on 8 of 12 signs and moves the year lord on about one chart in ten |  |
| F147 | 2026-09-27 | defect | Five Tajik method notes and one tool description still say panchavargeeya is unbuilt, the year-lord tie-break cannot run, harsha reaches 10 and patyayini is not built |  |
| F150 | 2026-09-27 | defect | run_marriage_complete_reading and run_kundli_match_complete look the Mars dosha up by a name doshas.ts stopped using, so both report no Manglik on every chart, and the marriage synthesis calls MIXED_ACTIVE promised |  |
| F151 | 2026-09-27 | defect | run_kundli_match_complete reads fields get_compatibility_advanced does not return, so the KP column is always UNKNOWN and always voted favourable in an unlabelled three-system concordance |  |
| F152 | 2026-09-27 | defect | Every two-chart tool builds the second person's chart in Lahiri when its ayanamsa is omitted, while the first defaults to KP, so a default call compares charts in two frames |  |
| F153 | 2026-09-27 | defect | run_pre_verdict_audit lowers a KP verdict's confidence for combustion ("significations blocked"), planetary war and missing vargottama, which the corpus and the protocol it claims to implement both refuse, and two composites inherit the band |  |
| F154 | 2026-09-27 | defect | The raman frame sits 0.4 arcminutes from Lahiri instead of about 1.45 degrees below it, so every frame-spread figure the cross-system tools quote rests on a sixth frame that is not Raman's |  |
| F155 | 2026-09-27 | defect | get_paradigm_panel with frames casts the Tajik annual chart once, in the base frame, and hands it to every frame, so Tajik is reported frame-stable without being tested |  |
| F156 | 2026-09-27 | gap | get_paradigm_panel declares CONCORDANT_ON_DIFFERENT_GROUNDS, its independence test, but every verdict-bearing reader cites the same event row, so the value is never produced and agreement is always reported as shared-ground CONCORDANT |  |
| F157 | 2026-09-27 | defect | run_year_outlook_complete reads the target year for the Tajik and annual blocks but today's date for Sade Sati, Yogini, Ashtottari and the eclipse scan, then votes all of it into one yearTone |  |
| F158 | 2026-09-27 | defect | The Vimshottari tree is anchored on the local wall clock stamped as UTC while every other dasha is anchored on the true instant, so the triple-dasha composite compares windows on two clocks |  |
| F159 | 2026-09-27 | provenance | Four composites tagged kp run Jaimini, Parashari and Tajik steps unattributed, the Jaimini composite runs non-Jaimini steps, and the protocol restates the star-lord denial F059 removed |  |
| F160 | 2026-09-28 | defect | The chart marks Rahu and Ketu retrograde in every chart, where KSK says to treat them as never retrograde, so every KP rule reading the flag fires on the nodes |  |
| F161 | 2026-09-28 | defect | The retrograde release dates on the promise and timing tools were solved from the local wall clock stamped as UTC, not the birth instant |  |
| F162 | 2026-09-28 | defect | Seventeen modules print dasha boundaries with String(date), so the wire date is the server's timezone and not ISO, and the same request differs by host |  |
| F163 | 2026-09-28 | defect | find_event_timing_v2's compactor deleted the transit hierarchy and five candidate fields undeclared, hidden because its golden capture had no candidate periods |  |
| F165 | 2026-09-28 | provenance | "Double retrograde ships as STATE_B_DENIAL on a kp tool, keyed on the cusp's star lord where both corpus positions key it on the sub lord's own, with the nodes counted retrograde and the counter-position absent" |  |
| F175 | 2026-09-28 | unsourced | Whether Rahu and Ketu cast graha drishti is stated four different ways across the repo, and none of the four has a locus | Q043 |
| F176 | 2026-09-28 | unsourced | The Sudarshana dasha counts each year's month bhava from the 1st bhava, and no verse on disk says whether the months start there or at the year-lagna | Q042 |
| F185 | 2026-09-28 | defect | A horary chart's Ruling Planets take the Ascendant lords from the number's cusp, which is Prabhakar's definition, where KSK takes the Ascendant rising at the moment of judgement |  |
| F186 | 2026-09-28 | unsourced | "The number must agree with the Ruling Planets" has no source, and T19's 0.67 line has none either |  |
| F190 | 2026-09-28 | provenance | "The Sudarshana chakra's wire citation, and the paradigm panel's copy of it, still say Sharma's ch. 76 was not read, after Q042 read it" |  |
| F200 | 2026-09-28 | defect | normalize360 could return 360 for a negative a hair below zero, so horary number 125 put cusp 7 in a thirteenth sign and every horary tool threw |  |
| F220 | 2026-09-28 | defect | run_triple_dasha_consensus reads Yogini and Chara at query_date but ranks its Vimshottari windows from the wall clock, so a query date away from today compares two dates' worth of periods |  |

## Research questions (43)

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
| Q022 | answered | What are the Tajika saham formulas as *Tajika Neelakanthi* states them, and which of the engine's fifteen match? |
| Q023 | answered | KSK relocates dignity and combustion to the constellation lord. Does the successor literature build on it, and does dignity keep a role in medical judgement? |
| Q024 | answered | The KP ayanamsa is verified 1900 to 2000 and extrapolated linearly outside it. What is published for 1850 and 2100, and is a linear model right? |
| Q025 | answered | The astronomy is written from scratch and checked against six sky events and one nutation epoch. What published reference values would bound its error across the range it actually serves? |
| Q026 | answered | The 2,241 sub-sub spans are pinned to a reconstructed arc. Is there a cleanly printed sub-sub table anywhere to quote instead? |
| Q027 | answered | Reference apparent longitudes from the JPL lineage, at stated instants, as test oracles for the from-scratch astronomy |
| Q028 | answered | The 23 event rows whose denial group shares no house with KP's own derivation: which page, if any, does each rest on? |
| Q029 | answered | The lunar nodes, mean and true, and one Placidus cusp set from Swiss Ephemeris, at stated instants, as the two oracles Q027 could not produce |
| Q030 | answered | Q017 sourced the non-KP tools. Where is chapter and verse for the DOCTRINE underneath them? |
| Q031 | answered | What does Tajika Neelakanthi actually state for the sixteen yogas, panchavargeeya bala, and the annual dashas? |
| Q032 | answered | Does Jaimini state a judgement procedure, and what exactly is argala? |
| Q033 | answered | What are the actual arithmetic procedures for the six Shadbala sub-balas? |
| Q034 | answered | What are the POINT LADDERS inside panchavargeeya bala, the hadda table, and the two lists harsha bala needs? |
| Q035 | answered | How is a krishamsa derived, given that it is NOT the panchavargeeya total over four? |
| Q036 | answered | What do BPHS ch. 46 v. 70 and the Rohini second-pada sequence actually say? |
| Q037 | answered | What does BPHS state for the bhava-madhya construction the Sripati house system rests on? |
| Q038 | answered | The eleven Kalachakra pada sequences Q036 did not return |
| Q039 | open | The Raghavacharya Kalachakra reading: its primary text, and the pada-boundary progression |
| Q040 | answered | What do the BPHS verses actually say behind the fixes F110, F112, F115, F119, F120, F121 and F124 (and BP024's varga constructions), in a named edition? |
| Q041 | answered | Does KP state a test that the horary number must agree with the ruling planets of the moment, and in what form? |
| Q042 | answered | In BPHS, how is Bhava Dig bala computed and what is the twilight of the +15, what do Sudarshana vv. 15-16 and 27-28 say, and do the Sudarshana months of each year start from the 1st bhava or from that year's bhava? |
| Q043 | answered | Where do the Parashari texts state the MD-AD relationship rule, the dasha lord's valence, the node's dasha reading and the varga-lagna rule; do Rahu and Ketu cast graha drishti; and what are the Saptavarga and Dasavarga Vimsopaka weights? |
