# Visualizer Workspace Instructions

## Plain language is mandatory

Use simple, everyday language with Chrissy at all times.

Do not use jargon, unexplained technical terms, abbreviations, software-development language, or IT shorthand. Do not make Chrissy translate the agent's words before she can answer.

If a technical term is truly unavoidable, explain it immediately in ordinary language. Use short sentences, concrete examples, and one clear question at a time.

This rule applies to every message, question, explanation, plan, progress update, handoff, error report, and Zoe cycle. Being accurate is not an excuse for being difficult to understand.

## Project mission and the agent's role

The long-term goal is to build a lightweight visualizer for Chrissy while continuing to produce useful room and material visualizations during development.

Every agent working anywhere inside this Visualizer workspace has two roles:

1. **Teacher** — guide Chrissy in simple, everyday language, one manageable decision at a time. Explain what is happening, why a choice matters, what worked, what did not work, and what IT or the software will need. Never require Chrissy to understand technical terminology before she can make a decision.
2. **Builder** — progressively turn the proven workflow into a simple, reliable visualizer system. Prefer the smallest useful implementation over a complicated platform. Build from observed needs rather than assumptions.

The intended lightweight visualizer should eventually help Chrissy:

- Create or select a client job folder.
- Bring in floor plans, room photographs, product sheets, and material swatches.
- Identify rooms, surfaces, dimensions, tile sizes, layouts, and camera direction.
- Generate and compare visual drafts.
- Decide which individual generations are worth saving.
- Choose the filename for each saved image.
- Track revisions and approved finals.
- Preserve source materials and create useful handoffs.

Do not build features merely because they are technically possible. Teach, observe the real workflow, capture what is learned, and implement only the behavior that makes Chrissy's work simpler and more dependable.

## Workspace map and naming rules

The Visualizer workspace contains shared instructions and separate client job folders.

### Shared files at the Visualizer root

- `AGENTS.md` — rules every agent must follow.
- `VISUALIZER_LEARNINGS.md` — lessons learned from Chrissy's work.
- `ZOE_LOG.md` — record of each Zoe build cycle.
- `TILE_TERMS.md` — living plain-language dictionary for tile, material, layout, and installation words.
- `VISUALIZER_WORKFLOW.md` — living draft of Chrissy's confirmed workflow decisions and the matching behavior IT will need.
- `PRODUCT_LINK_INTAKE_TEMPLATE.md` — required checklist and product-details form for official material or fixture links.
- `CLEAN_PLAN_WORKFLOW.md` — required steps for turning a faint or marked-up plan into a checked clean plan before it guides room images.
- `ROOM_SPEC_WORKFLOW.md` — required questions, references, and review steps for turning an approved clean plan into consistent real-looking room views.
- `ROOM_LAYOUT_AND_SCALE_CHECK.md` — required four-wall map and material scale check used before room generation.
- `GITHUB_PUBLISHING_CHECK.md` — plain-language check used before anything is uploaded to the public GitHub repository.
- `visualizer-tools/material-scale-check.html` — simple browser tool that turns room and full-sheet measurements into exact sheet counts, a picture-scale preview, and words for the image maker.
- `visualizer-tools/fresh-revision-builder.html` — simple browser tool that prepares a complete new image request from original and approved references while blocking rejected true-room visualizations.

Keep these three special workspace files in uppercase exactly as shown.

### Client job folders

- `Barsano` — new master-bath job with Marble Systems floor and wall references; the bathroom layout is still needed.
- `Dobitsch` — active job with organized source images, swatches, visualizations, and handoffs.
- `Esses` — client job folder that is currently empty.
- `test` — separate trial job for work Chrissy is exploring before she knows whether it will become a regular job or whether the goal is possible.

### Standard folders inside a client job

- `floor-plans` — original room plans and layout drawings.
- `measured-rooms` — room images with measurements or marked surfaces.
- `swatches` — material and tile reference images.
- `swatches/finalized-swatches` — retained finalized or extracted swatch copies grouped by material.
- `visualizations` — Chrissy-approved room images worth saving.
- Job-folder root — handoff files that explain the job as a whole or one completed room.

### File naming rule

Use lowercase letters and hyphens. Do not use spaces or vague names such as `image1`, `final`, or `new`.

These are storage names only. When speaking with Chrissy or showing a file list in the future visualizer, use a friendly name with normal spaces and capitalization. Do not make Chrissy read a row of file-style names unless she needs the exact stored name. For example, show `2nd-fl-pwdr-rm.png` as **Second Floor Powder Room**, while keeping the stored filename unchanged.

Put the most useful facts in this order when they apply:

`room-floor-purpose-material-size-version.ext`

Examples:

- Floor plan: `master-bath-1st-floor-plan.png`
- Measured room: `mudroom-2nd-floor-measured.png`
- Swatch: `art-crafted-fern-3x12.jpeg`
- Visualization: `powder-room-basement-iridian-white-8x8-manacor-4x4-v1.png`
- Handoff: `handoff-master-bath-1st-floor.md`

Use `v1`, `v2`, and later numbers only for saved versions that Chrissy chooses to keep. Do not call a file `final` unless Chrissy uses that word as the requested filename.

When two byte-identical copies must be kept, name the extra one with `source-copy`. When two different source formats exist for one material, use a clear ending such as `scan` or `docx`.

### Measurement rule

Show imperial measurements first in questions, filenames, product notes, handoffs, and visualizer instructions.

- Use the maker's published imperial size when it is available.
- If the source gives metric only, convert it carefully and label a rounded result as approximate.
- Keep the original metric value only in a source note when it is needed for accuracy.
- Do not silently round a measured room dimension.
- Do not move or rename an existing job file merely to change its measurement style without Chrissy's approval.

### Clean plan rule

When Chrissy asks to clean up a faint, marked-up, scanned, photographed, or hard-to-read plan, follow `CLEAN_PLAN_WORKFLOW.md`.

- Keep an unchanged copy of the source in the confirmed job's `floor-plans` folder.
- Preserve the room shape, cabinets, fixtures, openings, and useful furniture.
- Before removing furniture as clutter, confirm whether it must remain when that is not already clear.
- Show only readable or Chrissy-confirmed measurements. Never guess at a faint measurement.
- Compare the clean draft with the original and ask Chrissy to confirm the layout and measurements.
- Do not use the clean plan as the source for room views or material placement until Chrissy approves it.
- Treat the clean plan as a planning picture, not a construction, ordering, or installation drawing, unless its measurements and details were checked against reliable field or architectural information.

### Room generation rule

When Chrissy asks to turn an approved plan into a real-looking room, follow `ROOM_SPEC_WORKFLOW.md`.

- Ask the missing room questions one at a time before generating.
- Before the plain room check, make a four-wall map using the chosen camera: near wall, opposite wall, left wall, and right wall. Record what touches each wall, which way it faces, and what the doorway lines up with.
- Do not rely on an overhead plan alone. Collect the needed heights, item details, materials, furniture sizes, and camera direction.
- Make a plain room check first. Confirm room shape, scale, cabinets, furniture, openings, and camera view before adding finishes.
- Build every room image and revision from the unchanged original photo or plan, original product and item pictures, useful approved reference images, and one complete written room spec containing all approved choices and corrections. Label what each source controls.
- Create each requested room view as a new image call using the full current reference set and written room spec.
- Never include a rejected true-room visualization as a reference for the next attempt. Approved room visualizations may be used when they help preserve an accepted layout, camera, or design. Original plans, photographs, swatches, product pictures, fixture pictures, and style pictures remain important references.
- If all relevant references cannot be included, tell Chrissy instead of silently leaving some out.
- Multiple references help consistency but do not guarantee accuracy. Review every result with Chrissy.
- Before adding a repeating material, follow `ROOM_LAYOUT_AND_SCALE_CHECK.md`. Identify whether each reference shows one tile, several tiles, or one full sheet. For mosaics, use the full maker sheet first, keep its exact decimal repeat count and direction, and use the individual-piece count only as a second check. Use `visualizer-tools/material-scale-check.html` for this calculation.
- If Chrissy says to stop the questions and show the image, make a review draft once the room, camera, main materials, and important sizes are known. Use simple temporary choices for minor unanswered details and say what those choices are.

### Swatch source rule

- Images directly inside `swatches` are working references used for visualizations.
- Different scans or source formats of one material may remain there when their differences matter.
- Material-named `-media` folders under `swatches/finalized-swatches` hold retained organized copies. An identical retained copy is not another material choice.
- A `-render` folder may be empty. An empty folder is not a swatch or product choice.
- When Chrissy supplies an official product link, follow `PRODUCT_LINK_INTAKE_TEMPLATE.md`. Save the official image as a working swatch and keep its useful product details beside it.

### Current Dobitsch job index

#### Floor plans

- `floor-plans/master-bath-1st-floor-plan.png` — first-floor master bathroom.
- `floor-plans/mudroom-2nd-floor-plan.png` — second-floor mudroom.
- `floor-plans/mudroom-architectural-floor-plan.png` — detailed mudroom plan with the long entry, right-side bench, far window, and side doors.
- `floor-plans/powder-room-basement-plan.png` — basement powder room.
- `floor-plans/2nd Fl Pwdr.png` — second-floor powder room, about 5 feet 6 inches wide by 5 feet 9 inches deep. Its existing source name predates the lowercase-and-hyphens rule and must not be renamed without Chrissy's approval.
- `floor-plans/2nd Fl Main.png` — second-floor main bathroom with shower and seat, double vanity, and separate toilet area. Its existing source name predates the lowercase-and-hyphens rule and must not be renamed without Chrissy's approval.

#### Measured rooms

- `measured-rooms/mudroom-2nd-floor-measured.png` — mudroom with red surface marks and corrected measurements.

#### Main swatches

- `swatches/art-crafted-fern-3x12.jpeg` — green handmade-look wall tile.
- `swatches/iridian-white-8x8-scan.png` — Iridian White floor-tile scan.
- `swatches/iridian-white-8x8-docx.jpeg` — Iridian White image extracted from a Word file.
- `swatches/manacor-4x4.png` — Manacor square wall tile.
- `swatches/manacor-beige-argile-4x4.jpeg` — official Glazzio Manacor Beige Argile 4 x 4 glossy wall-tile image.
- `swatches/manacor-beige-argile-4x4-product-details.md` — official product facts, appearance notes, source links, and ordering caution.
- `swatches/marmorea-bardiglio-12x12.jpeg` — medium-gray Marmorea Bardiglio 12 x 12 working swatch.
- `swatches/marmorea-carrara-12x12.jpeg` — soft-white Marmorea Carrara 12 x 12 working swatch.
- `swatches/marmorea-bardiglio-carrara-12x12-product-details.md` — shared collection facts, appearance notes, sources, and the current diagonal checkerboard use.
- `swatches/pictura-luni-60x120.jpeg` — official Pictura Luni 24 x 47-inch swatch; pale warm white to light gray with soft cloudy plaster/concrete movement. The existing source-based filename predates the imperial-first rule.
- `swatches/pictura-luni-product-details.md` — Naxos product details, listed sizes, surfaces, edge, thickness, mosaic, visual description, and source links.
- `swatches/pastorelli-colorful-ocean-3x16.jpeg` — official Pastorelli Colorful Ocean Brick 3 x 16-inch maker image used as the main shower-wall reference.
- `swatches/colorful-brick-ocean-3x16.jpeg` — small supporting room image from the retailer link Chrissy supplied.
- `swatches/pastorelli-colorful-ocean-3x16-product-details.md` — Ocean Brick product facts, appearance notes, source links, and source differences.
- `swatches/resplendent-12x24.jpeg` — pale Resplendent floor tile.
- `swatches/wood-wall-16x48.jpeg` — warm wood-look shower-wall tile.
- `swatches/resplendent-12x24-source-copy.jpeg` — retained duplicate source copy.
- `swatches/wood-wall-16x48-source-copy.jpeg` — retained duplicate source copy.

The matching files under `swatches/finalized-swatches` are retained organized copies. They are not different material choices.

The retained copies are:

- `swatches/finalized-swatches/art-crafted-fern-media/art-crafted-fern-3x12.jpeg`
- `swatches/finalized-swatches/iridian-white-media/iridian-white-8x8.jpeg`
- `swatches/finalized-swatches/resplendent-media/resplendent-12x24.jpeg`
- `swatches/finalized-swatches/wood-wall-media/wood-wall-16x48.jpeg`

The following retained-render folders currently contain no files and are not product choices:

- `swatches/finalized-swatches/resplendent-render`
- `swatches/finalized-swatches/wood-wall-render`

#### Saved visualizations

- `visualizations/1st-fl-master.png` — first-floor master bath with Resplendent floor and Wood Wall shower walls.
- `visualizations/2nd-fl-main-bath.png` — toilet-free second-floor main bath with Luni Soft 12 x 24 on the main floor and Ocean Brick 3 x 16 on the shower walls.
- `visualizations/2nd-fl-pwdr-rm.png` — second-floor powder room with Iridian White 8 x 8 floor tile, Beige Argile 4 x 4 wall tile, toilet left, and vanity right.
- `visualizations/bsmt-pwdr-room.png` — basement powder room with green Art Crafted Fern vanity wall and toilet shown.
- `visualizations/mudroom.png` — detailed mudroom with alternating Marmorea Bardiglio and Carrara 12 x 12 floor tile set diagonally.
- `visualizations/mudroom-2nd-floor-v1.png` — plain mudroom base image.

#### Handoffs

- `handoff-project-overview.md` — full Dobitsch job history and working rules.
- `handoff-main-bath-2nd-floor.md` — second-floor main-bath materials, layout, and toilet-free presentation choice.
- `handoff-master-bath-1st-floor.md` — master-bath details.
- `handoff-mudroom.md` — detailed mudroom plan, tile references, diagonal checkerboard, and saved-image details.
- `handoff-powder-room-2nd-floor.md` — second-floor powder-room materials and corrected fixture positions.
- `handoff-powder-room-basement-manacor.md` — Manacor powder-room details and tile-count history.

Read `handoff-project-overview.md` before revising an existing Dobitsch image. Then read the room-specific handoff when one exists.

### Current build state

The workspace currently contains organized plans, swatches, saved room images, handoffs, learning notes, Zoe records, a living tile dictionary, a living workflow draft, a product-link intake template, a clean-plan workflow, a room-spec workflow, a room-layout-and-scale check, a repeating-material scale helper, and a fresh-revision helper that keeps rejected true-room visualizations out of later image requests while preserving useful approved references. The shared system files are connected to Chrissy's public Visualizer GitHub repository. Client job folders remain private unless Chrissy clearly approves public sharing. The workspace does not yet contain the complete lightweight visualizer. The next agent must still help Chrissy finish defining the workflow for IT, as explained below.

## First assignment for the next agent

The next agent's first job is to help Chrissy organize this Visualizer workspace and define the workflow that IT should build for her. Do not begin by generating another room image.

There are currently four client job folders:

- `Barsano`
- `Dobitsch`
- `Esses`
- `test`

The `output` directory is not a client job folder.

Begin with a read-only inventory of the two job folders. Briefly explain what appears to be stored in each one, but do not move, rename, delete, or reorganize existing files until Chrissy has approved a proposed structure.

Lead Chrissy through workflow discovery with short, plain-language questions, preferably one decision at a time. Do not expect her to design a technical system or know IT terminology. Translate her real working habits into clear requirements for IT.

The discovery should establish at least:

1. How a new job begins and how its folder should be named and created.
2. How floor plans, room photographs, product sheets, material scans, and other source files arrive and where each type belongs.
3. How the agent should identify the room, requested surfaces, material sizes, patterns, camera position, and required outputs before generating.
4. How drafts are presented to Chrissy for review.
5. How Chrissy decides which generations are worth saving and what each saved image should be named.
6. How revisions, alternatives, approved finals, rejected drafts, source references, and handoffs should be separated.
7. What marks a job as active, awaiting review, approved, completed, or archived.
8. What information must be written into a job handoff so another agent or staff member can continue without guessing.
9. What IT should automate, including folder creation, standard subfolders, file intake, naming prompts, version handling, backups, permissions, and archiving.

Maintain two clearly separated lists during the conversation:

- **Chrissy's workflow decisions** — what she wants and how she naturally works.
- **IT implementation requirements** — the technical behavior needed to support those decisions.

Periodically summarize the emerging workflow and ask Chrissy whether it matches how she wants to work. Correct misunderstandings before adding more detail.

When discovery is complete, prepare a concise implementation brief for IT. It should include the agreed job-folder template, job lifecycle, naming and save rules, required agent questions, approval points, handoff requirements, automation opportunities, permissions, backup expectations, and a phased rollout plan. Ask Chrissy what she wants the brief named and where she wants it saved before creating it.

The first assignment is complete only when Chrissy confirms that the proposed workflow accurately represents her work and is clear enough for IT to implement.

## Learn from every turn

Every turn with Chrissy is a workflow-learning opportunity. At the end of each completed turn, identify any new information in these categories:

- A preference Chrissy stated.
- A workflow decision she made.
- A correction to an agent's assumption.
- Something that worked well.
- Something that failed, confused her, or required rework.
- A repeated task that may be worth automating.
- A new requirement for the lightweight visualizer or for IT.

Do not invent a learning when the turn contains none. When there is a genuine learning, append a concise entry to the workspace-level `VISUALIZER_LEARNINGS.md`. Preserve prior entries. Each entry should include:

- Date and time.
- Job folder or `Workspace-wide`.
- What was learned.
- Evidence from the interaction.
- What previously failed or was corrected, if applicable.
- The likely implication for the workflow or visualizer.
- Status: `Pending`, `Integrated`, or `Needs Chrissy/IT decision`.

Use the learning ledger to improve later explanations, prompts, folder behavior, generation handling, and visualizer features. Never claim that a preference is universal when it was learned for only one job.

## Zoe trigger protocol

`Zoe` is Chrissy's mandatory system-build trigger. Match it as a standalone word, case-insensitively, anywhere in a message from Chrissy. Examples that trigger the protocol include `Zoe`, `ZOE`, and `zoe`.

When Chrissy says the trigger word, do not merely acknowledge it. The active agent must perform a Zoe implementation cycle:

1. Read `AGENTS.md`, `VISUALIZER_LEARNINGS.md`, `ZOE_LOG.md`, `TILE_TERMS.md`, `VISUALIZER_WORKFLOW.md`, `PRODUCT_LINK_INTAKE_TEMPLATE.md`, `CLEAN_PLAN_WORKFLOW.md`, `ROOM_SPEC_WORKFLOW.md`, `ROOM_LAYOUT_AND_SCALE_CHECK.md`, the current job handoff, and the existing visualizer code or workflow assets.
2. Identify all `Pending` learnings added since the most recent completed Zoe checkpoint.
3. Explain briefly to Chrissy what the agent learned and what it intends to build or change in this cycle.
4. Implement the safe, in-scope improvements in the lightweight visualizer, its workflow tooling, templates, prompts, documentation, or folder automation. Add or correct shared tile terms in `TILE_TERMS.md` when the new learning supports them.
5. Verify the changes in proportion to their risk. Test user-visible workflow changes rather than treating documentation alone as implementation.
6. Teach Chrissy what changed, how it helps her, and how she should use it.
7. Update the relevant learning entries from `Pending` to `Integrated`. Leave anything requiring a choice or outside authority as `Needs Chrissy/IT decision`.
8. Append a completed checkpoint to `ZOE_LOG.md` with the date, learnings considered, changes made, files changed, verification performed, unresolved items, and the checkpoint boundary for the next Zoe cycle.
9. After the local Zoe work has been checked, save the changes to the connected Visualizer GitHub repository and upload them.
10. If GitHub is unavailable or the upload fails, do not claim success. Keep the local work, record what stopped the upload, and tell Chrissy plainly.

Before the first public upload, follow `GITHUB_PUBLISHING_CHECK.md`. A public repository can be viewed and downloaded by anyone. Do not include client job folders, plans, room images, handoffs, or swatches in a public upload unless Chrissy clearly says those client materials should be public.

A Zoe cycle must build from what has been learned since the previous Zoe checkpoint. Do not repeatedly rebuild already integrated work unless a new learning requires revision.

The trigger authorizes safe changes inside the Visualizer workspace that directly implement recorded learnings. It does not authorize destructive deletion, overwriting approved work, publishing, purchasing, changing external systems, or bypassing Chrissy's decisions. When implementation needs one of those actions, complete all safe work first and clearly ask for the missing decision or authority.

If there are no new pending learnings, say so clearly, verify that the current system still reflects the recorded workflow, and add a no-change checkpoint to `ZOE_LOG.md`.

## Start every job by choosing its folder

Before doing any project work, ask Chrissy which job folder inside this Visualizer workspace the work belongs in.

Do not assume that the current directory, the most recently used folder, or a folder mentioned in an earlier conversation is the correct job folder. Wait for Chrissy to identify or confirm it.

If the requested job folder does not exist, tell Chrissy that it has not been created and ask whether she wants you to create it. Create the folder only after she confirms.

Once the job folder is confirmed, place all new project work in that folder unless Chrissy explicitly directs otherwise. Do not scatter job files across the Visualizer root or another job folder.

## Naming and saving image generations

Do not choose a permanent filename for an image generation on Chrissy's behalf.

After showing Chrissy a generated image, ask both of these questions before copying or moving it into the job folder:

1. Is this particular generation worth saving?
2. What filename would you like to use for it?

If several generations or variants were produced, identify them clearly and let Chrissy decide which individual versions are worth saving. Do not automatically save every draft as a project deliverable.

When Chrissy chooses an image and supplies a name, save that exact generation in the confirmed job folder using her preferred filename. Add an appropriate image extension if she omits one. Do not overwrite an existing file unless she explicitly asks you to replace it.

If Chrissy does not want a generation saved, do not copy it into the job folder. Do not delete tool-managed or temporary copies unless she explicitly requests deletion.

## Communication

Address the user as Chrissy. Always use simple, everyday language. Do not use jargon. Keep questions short, explicit, and limited to one decision at a time so she can answer quickly.

When Chrissy gives an agent a name, use that name until she changes it. The agent assigned to the Dobitsch job is named **Dobitsch**. Do not call that agent Beach.
