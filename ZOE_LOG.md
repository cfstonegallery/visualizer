# Zoe Implementation Log

This file records every Zoe-triggered implementation cycle for the Visualizer workspace. A new cycle integrates pending learnings added after the previous completed checkpoint.

## Checkpoint format

### YYYY-MM-DD HH:MM — Zoe cycle

- **Checkpoint begins after:** Initial state, or the previous checkpoint date and time.
- **Learnings considered:**
- **Changes implemented:**
- **Files changed:**
- **Verification performed:**
- **Unresolved items:** None, or a concise list.
- **Next checkpoint begins after:** This checkpoint date and time.

## Checkpoints

### 2026-09-16 17:21 -04:00 — Zoe cycle

- **Checkpoint begins after:** Initial state.
- **Learnings considered:** Confirm the client job before project work; ask before saving any generated image and let Chrissy choose its name; guide Chrissy through the unfinished IT workflow; collect size, direction, pattern, grout, room proportions, and camera direction before generating; understand trade language and maintain a shared tile dictionary.
- **Changes implemented:** Created a 108-term plain-language tile dictionary; made future Zoe cycles read and update it; created a living workflow draft with a job gate, image-request questions, draft review, and save questions; connected both shared files to the workspace instructions.
- **Files changed:** `AGENTS.md`, `TILE_TERMS.md`, `VISUALIZER_WORKFLOW.md`, `VISUALIZER_LEARNINGS.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed all new files exist; confirmed the dictionary contains the requested terms; counted 108 defined term rows; confirmed `AGENTS.md` points future Zoe cycles to the dictionary; confirmed the workflow includes the save questions and the staggered-offset question.
- **Unresolved items:** Chrissy's larger workflow and IT plan still need her decisions about file intake, job stages, rejected drafts, approvals, handoffs, backups, access, and archiving.
- **Next checkpoint begins after:** 2026-09-16 17:21 -04:00.

### 2026-09-16 17:36 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-16 17:21 -04:00.
- **Learnings considered:** Separate working swatches from retained identical copies and empty render folders; use official product links to bring in an official working swatch and useful product details; show measurements in feet and inches first.
- **Changes implemented:** Added a reusable official-product-link intake template; added shared rules for imperial-first measurements and swatch roles; updated the living workflow; changed the Luni product notes to show the maker's inch sizes first while keeping original metric values in source notes; listed the empty render folders clearly in the Dobitsch index and handoff.
- **Files changed:** `AGENTS.md`, `PRODUCT_LINK_INTAKE_TEMPLATE.md`, `VISUALIZER_WORKFLOW.md`, `Dobitsch/swatches/pictura-luni-product-details.md`, `Dobitsch/handoff-project-overview.md`, `VISUALIZER_LEARNINGS.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed the new template and all linked files exist; confirmed the template requires job confirmation, an official image, imperial-first sizes, and a product-details file; confirmed the Luni notes list 24 × 47, 24 × 24, and 12 × 24 inches first; confirmed the official Luni swatch remains 1,024 × 512 pixels and opens as the correct pale Luni surface; confirmed no existing job file was moved or renamed.
- **Unresolved items:** Chrissy's larger workflow and IT plan still need her decisions. The existing Luni filename keeps the maker's metric label because renaming an existing job file requires Chrissy's approval. No new tile term was learned in this cycle, so the dictionary did not need a change.
- **Next checkpoint begins after:** 2026-09-16 17:36 -04:00.

### 2026-09-17 13:29 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-16 17:36 -04:00.
- **Learnings considered:** Chrissy dislikes looking at hyphenated file names even though the stored names need hyphens; Chrissy renamed the Dobitsch job agent from Beach to Dobitsch.
- **Changes implemented:** Kept the lowercase-and-hyphens storage rule; added a friendly-name rule so Chrissy sees ordinary names such as **Second Floor Powder Room**; added the same behavior to the living workflow; changed active tile-dictionary wording from Beach to the agent; recorded that the Dobitsch job agent is named Dobitsch.
- **Files changed:** `AGENTS.md`, `VISUALIZER_WORKFLOW.md`, `TILE_TERMS.md`, `VISUALIZER_LEARNINGS.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed all five stored visualization filenames remained unchanged; tested five friendly display names; confirmed the active tile dictionary no longer calls the agent Beach; confirmed no learning remains marked `Pending`.
- **Unresolved items:** Chrissy's larger workflow and IT plan still need her decisions. The Dobitsch overview still contains one outdated powder-room sentence; it was not changed because Chrissy has not yet answered the correction question.
- **Next checkpoint begins after:** 2026-09-17 13:29 -04:00.

### 2026-09-18 12:35 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-17 13:29 -04:00.
- **Learnings considered:** The Test job can turn a faint plan into a useful clean overhead image; the unchanged source must remain; readable measurements and soft-gray cabinets make the plan easier to understand; useful furniture such as the Fisher sitting area must not be removed; Chrissy must confirm the cleaned layout and measurements; a clean plan is a planning picture rather than an automatic construction, ordering, or installation drawing.
- **Changes implemented:** Added a permanent clean-plan workflow; added the clean-plan rule to every agent's instructions; added the clean-plan steps and review checks to the living workflow; created a completed Fisher check record that links the source, approved image, correction, measurements, allowed uses, and safety limit; connected the new workflow to future Zoe cycles.
- **Files changed:** `CLEAN_PLAN_WORKFLOW.md`, `AGENTS.md`, `VISUALIZER_WORKFLOW.md`, `VISUALIZER_LEARNINGS.md`, `test/fisher-clean-plan-check.md`, `test/handoff-test.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed the new workflow and Fisher check record exist; confirmed both the unchanged Fisher source and approved Fisher image still exist; confirmed the agent rules and living workflow require Chrissy's approval before a cleaned plan guides later work; confirmed all three places contain the planning-picture warning; confirmed the Fisher check keeps the sitting-area correction and the four readable measurements; confirmed no actual learning entry remains marked `Pending`.
- **Unresolved items:** Chrissy's larger workflow and IT plan still need her decisions about file intake, job stages, rejected drafts, approvals, completed jobs, handoffs, backups, access, and archiving. No new tile term was learned, so `TILE_TERMS.md` did not need a change.
- **Next checkpoint begins after:** 2026-09-18 12:35 -04:00.

### 2026-09-18 12:46 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-18 12:35 -04:00.
- **Learnings considered:** An approved clean plan must lead into a question-led room-spec step before real-looking room generation; a plain room check should be approved before finishes are added; for rooms with several views, every relevant approved room view should be included and clearly labeled as a reference for each separately generated view; rejected views must not guide later views; input limits must be explained rather than hidden.
- **Changes implemented:** Added a permanent room-spec workflow with required questions, reference roles, a plain-room check, finish application, multiple-view handling, and save rules; added the room-generation rule to every agent's instructions and the living workflow; created a Fisher room-spec record ready for the question process; connected it to the Test handoff; marked the pending room-spec learning integrated; recorded the complete-reference requirement.
- **Files changed:** `ROOM_SPEC_WORKFLOW.md`, `AGENTS.md`, `VISUALIZER_WORKFLOW.md`, `test/fisher-room-spec.md`, `test/handoff-test.md`, `VISUALIZER_LEARNINGS.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed the new room-spec workflow and Fisher room-spec record exist; confirmed the Fisher original and approved clean plan still exist; confirmed the agent rules, living workflow, shared room-spec workflow, and Fisher record require a plain room check; confirmed each requires separately generated views to reuse every relevant approved reference; confirmed rejected views are excluded; confirmed no actual learning entry remains marked `Pending`.
- **Unresolved items:** Fisher still needs Chrissy's answers about camera position, ceiling height, openings, cabinet types and heights, appliances, island and furniture sizes, finishes, lighting, changes, and number of views. No new tile term was learned, so `TILE_TERMS.md` did not need a change.
- **Next checkpoint begins after:** 2026-09-18 12:46 -04:00.

### 2026-09-23 15:09 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-18 12:46 -04:00.
- **Learnings considered:** Fisher showed that units must be confirmed, real-looking rooms may be more useful than overhead material overlays, approved views must carry corrected material scale, and Chrissy needs a “show me now” path when enough important details are known. The LSI bath showed that rotated plans need a fixed four-wall map; exact products need item numbers; a product picture may show one tile, several tiles, or one full sheet; multi-tile and mosaic repeats must be copied exactly; and material scale must be checked against known room, wall, and sheet measurements.
- **Changes implemented:** Added a required four-wall map and material-scale check; added a show-me-now rule; expanded room generation to record wall, facing, sightline, piece size, sheet size, pattern repeat, and expected counts; expanded official product intake to distinguish similar products and save installed-pattern references; added plain-language dictionary entries for mosaic piece size, sheet size, sheet repeat, inserts, and multi-tile reference images; created a completed LSI wall-map-and-scale record; updated the Test handoff; marked the considered learnings integrated.
- **Files changed:** `AGENTS.md`, `ROOM_LAYOUT_AND_SCALE_CHECK.md`, `ROOM_SPEC_WORKFLOW.md`, `PRODUCT_LINK_INTAKE_TEMPLATE.md`, `VISUALIZER_WORKFLOW.md`, `TILE_TERMS.md`, `VISUALIZER_LEARNINGS.md`, `test/lsi-bath-layout-and-scale-check.md`, `test/handoff-test.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed every new shared link and file exists; confirmed the room workflow contains the four-wall map; confirmed product intake records full sheet size; confirmed the dictionary contains the new sheet terms; confirmed no actual learning remains marked Pending; confirmed all three approved LSI images still exist; checked the LSI math: seven 12-inch sheets across the 84-inch room, eight deep, four across the 48-inch shower, three deep, eight 6-inch subway lengths across the shower wall, 36 rows over the 9-foot height, and 10.5 Paloma tile widths across the room.
- **Unresolved items:** The newest basketweave image is still awaiting Chrissy's review and has not been saved. The lightweight visualizer program does not yet exist. Chrissy and IT still need to finish the larger decisions about job intake, job stages, rejected drafts, completed jobs, backups, access, and archiving.
- **Next checkpoint begins after:** 2026-09-23 15:09 -04:00.

### 2026-09-24 14:11 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-23 15:09 -04:00.
- **Learnings considered:** The saved LSI finish choices, exact Frost grout, Soft Light Grey 12 x 24 floor with a 30 percent stagger running from the doorway toward the shower, the show-me-now path, and repeated mosaic-scale corrections. The strongest new lesson is that an exact full maker sheet, its direction, and its decimal repeat count must control mosaic scale; an assumed individual-piece size can be wrong even after a draft appears improved.
- **Changes implemented:** Built the first lightweight browser helper for repeating-material scale. It calculates exact sheet repeats, keeps partial sheets, shows a simple top view, gives a second-check piece count, lets the user turn a rectangular sheet, and creates plain-language directions for the image maker. Updated the shared room, product, and scale workflows to require full-sheet-first checking. Added plain-language terms for sheet direction, full-sheet-first checking, and visible piece count. Updated the LSI scale record with the exact 11 x 12 1/2-inch Murbo sheet math. Marked all new safe learnings integrated and corrected older entries whose approval was later withdrawn.
- **Files changed:** `visualizer-tools/material-scale-check.html`, `visualizer-tools/material-scale-check.js`, `AGENTS.md`, `ROOM_LAYOUT_AND_SCALE_CHECK.md`, `ROOM_SPEC_WORKFLOW.md`, `PRODUCT_LINK_INTAKE_TEMPLATE.md`, `TILE_TERMS.md`, `VISUALIZER_WORKFLOW.md`, `test/lsi-bath-layout-and-scale-check.md`, `VISUALIZER_LEARNINGS.md`, and `ZOE_LOG.md`.
- **Verification performed:** Ran the scale checker with the LSI shower values: 48 x 36-inch surface, 11 x 12 1/2-inch sheet, and 12 by 12 visible pieces. It returned 4.36 sheet widths across, 2.88 sheet depths, about 52 pieces across, and about 35 rows deep. Confirmed the calculation test passed and confirmed no real learning entry remains marked Pending.
- **Unresolved items:** The newest Murbo shower-floor image using the full-sheet scale is still awaiting Chrissy's approval and has not replaced the saved image. The complete lightweight visualizer and the larger IT workflow decisions are still unfinished.
- **Next checkpoint begins after:** 2026-09-24 14:11 -04:00.

### 2026-10-02 14:32 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-09-24 14:11 -04:00.
- **Learnings considered:** The corrected Murbo sheet direction and scale, Chrissy's approval of the corrected Murbo image, and Chrissy's new rule that every completed Zoe cycle should be saved and uploaded to GitHub.
- **Changes implemented:** Confirmed the corrected 12 1/2-inch-across by 11-inch-deep Murbo sheet check; added the GitHub upload step to the Zoe rules and living workflow; created a public-upload safety check; added a safe list that keeps all client job folders out of the public repository unless Chrissy clearly approves them; prepared the shared Visualizer files for the first GitHub upload.
- **Files changed:** `.gitignore`, `AGENTS.md`, `GITHUB_PUBLISHING_CHECK.md`, `VISUALIZER_LEARNINGS.md`, `VISUALIZER_WORKFLOW.md`, and `ZOE_LOG.md`.
- **Verification performed:** Confirmed the GitHub repository exists and is public; confirmed the safe GitHub sign-in helper is installed; tested the scale helper with the corrected 48 x 36-inch shower and 12 1/2 x 11-inch sheet direction; it returned 3.84 sheets across, 3.27 sheets deep, about 46 pieces across, and about 39 rows deep; uploaded the first shared-system change and confirmed the `main` copy exists on GitHub.
- **Unresolved items:** Client job folders remain private. Chrissy must clearly approve them before they are ever uploaded to the public repository.
- **Next checkpoint begins after:** 2026-10-02 14:32 -04:00.

### 2026-10-07 14:20 -04:00 — Zoe cycle

- **Checkpoint begins after:** 2026-10-02 14:32 -04:00.
- **Learnings considered:** The Barsano room work, the new exterior-mockup use, and Chrissy's correction that every visualization revision must be a new image call while rejected true-room visualizations must never be reused as references. Original and approved reference images still need to be used. No real learning entry remained marked `Pending`; this correction needed a working safeguard.
- **Changes implemented:** Strengthened the existing rule that rejected room views must not guide later attempts while preserving useful original and approved references; updated every agent's instructions and room workflow; created a Fresh Revision Builder that requires an original source, the complete current room description, the newest correction, and confirmation that no rejected true-room visualization is included; linked it to the material-scale helper; and added the corrected rule to the active Test handoff.
- **Files changed:** `AGENTS.md`, `ROOM_SPEC_WORKFLOW.md`, `VISUALIZER_WORKFLOW.md`, `VISUALIZER_LEARNINGS.md`, `ZOE_LOG.md`, `visualizer-tools/fresh-revision-builder.html`, `visualizer-tools/fresh-revision-builder.js`, `visualizer-tools/material-scale-check.html`, and the private local file `test/handoff-test.md`.
- **Verification performed:** Tested the new request builder with Node; confirmed it refuses to make a request when the no-rejected-room box is not checked; confirmed it accepts original sources and useful approved references; confirmed it produces a complete request when the source, room description, and correction are present; opened and tested the browser page; confirmed there were no browser errors; reran the existing Murbo material-scale calculation and confirmed it still returns 3.84 sheets across and about 3.27 sheets deep.
- **Unresolved items:** Fresh generations may still vary slightly because image generation is not exact editing. Exact one-area changes may eventually need a true photo-editing or measured room tool. Chrissy's larger IT workflow decisions are still unfinished. Client job folders remain private and excluded from the public GitHub repository.
- **Next checkpoint begins after:** 2026-10-07 14:20 -04:00.
