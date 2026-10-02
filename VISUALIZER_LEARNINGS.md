# Visualizer Learning Ledger

This workspace-level ledger records what Chrissy's real work teaches the agents and the lightweight visualizer. Add only genuine learnings supported by an interaction. Preserve the history so later agents can understand why the workflow and system changed.

## Entry format

### YYYY-MM-DD HH:MM — Job folder or Workspace-wide

- **Learned:**
- **Evidence:**
- **Failure or correction:** None, or a concise description.
- **System implication:**
- **Status:** Pending | Integrated | Needs Chrissy/IT decision

## Initial established learnings

### 2026-09-16 — Workspace-wide

- **Learned:** Every job must begin by confirming which client job folder to use. If the folder does not exist, the agent must ask Chrissy whether to create it.
- **Evidence:** Chrissy explicitly required this behavior for every agent.
- **Failure or correction:** Agents previously carried a folder assumption forward from earlier conversation context.
- **System implication:** Job selection and optional folder creation must be the first workflow gate.
- **Status:** Integrated

### 2026-09-16 — Workspace-wide

- **Learned:** Chrissy decides which image generations are worth saving and chooses their permanent filenames.
- **Evidence:** Chrissy explicitly required agents to ask whether a generation should be saved and what it should be named.
- **Failure or correction:** Agents previously assigned filenames and saved generations automatically.
- **System implication:** Preview, keep/discard, and filename confirmation must occur before a generated image becomes a job deliverable.
- **Status:** Integrated

### 2026-09-16 — Workspace-wide

- **Learned:** The next agent must first organize the workspace with Chrissy and translate her natural workflow into an actionable plan for IT.
- **Evidence:** Chrissy identified organization and IT workflow development as the next agent's first assignment.
- **Failure or correction:** The work had been handled as separate image-generation tasks without a unified operational workflow.
- **System implication:** Run guided discovery before adding more visualizer features.
- **Status:** Needs Chrissy/IT decision

### 2026-09-16 — Workspace-wide

- **Learned:** Agents must act as teachers as well as builders, learn from each turn, and use the word `Zoe` as a case-insensitive trigger to implement new learnings since the previous checkpoint.
- **Evidence:** Chrissy explicitly defined the teaching role, continuous-learning requirement, and Zoe trigger.
- **Failure or correction:** Prior handoffs captured results but did not create a recurring learn-then-build cycle.
- **System implication:** Maintain this ledger, implement incremental visualizer improvements during Zoe cycles, and track each checkpoint in `ZOE_LOG.md`.
- **Status:** Integrated

### 2026-09-16 17:12 -04:00 — Workspace-wide

- **Learned:** Chrissy wants this agent to be called Beach.
- **Evidence:** Chrissy said, “Your name is Beach.”
- **Failure or correction:** None.
- **System implication:** Introduce and refer to this agent as Beach when speaking with Chrissy.
- **Status:** Integrated

### 2026-09-16 — Workspace-wide

- **Learned:** Every agent must use simple, everyday language with Chrissy at all times and avoid jargon.
- **Evidence:** Chrissy identified this as a final directive and asked that it be stressed in `AGENTS.md`.
- **Failure or correction:** Technical or process language can make the workflow harder for Chrissy to follow and approve.
- **System implication:** All questions, explanations, plans, progress updates, handoffs, error messages, and Zoe cycles must use short, plain language. Any unavoidable technical term must be explained immediately.
- **Status:** Integrated

### 2026-09-16 — Workspace-wide

- **Learned:** The workspace is organized first by client job, then by file purpose. `Dobitsch` contains `floor-plans`, `measured-rooms`, `swatches`, and `visualizations`; handoffs remain in the job-folder root. `Esses` currently exists as an empty job folder. Files use lowercase words joined by hyphens and include the room, floor, materials, sizes, and saved version when those facts apply.
- **Evidence:** Chrissy asked for the filenames to be fixed and for the complete organization to be indexed in `AGENTS.md`.
- **Failure or correction:** Older handoffs described a loose top-level layout, used vague source names, and mislabeled the powder room's floor. The names and handoffs were corrected without deleting any files.
- **System implication:** Use the Dobitsch layout and naming pattern as the current working example while Chrissy and IT decide whether it should become the standard template for all jobs.
- **Status:** Integrated

### 2026-09-16 17:15 -04:00 — Workspace-wide

- **Learned:** Chrissy wants tile and material visualizations to show the requested size, direction, and room proportions as accurately as possible, especially when the starting reference is a floor plan.
- **Evidence:** Chrissy said she is striving for correct proportion and asked about changing tile or material size and direction when visualizing a floor plan.
- **Failure or correction:** None yet; this is a quality requirement for future images.
- **System implication:** Before generating, collect the room measurements, tile or material size, layout direction, pattern, grout width, wall heights, and camera view. Treat the result as a visual guide and clearly identify anything that cannot be measured from the supplied references.
- **Status:** Integrated

### 2026-09-16 17:19 -04:00 — Workspace-wide

- **Learned:** Chrissy wants Beach and the visualizer to understand tile-industry layout words and keep a shared plain-language dictionary that grows during future Zoe cycles.
- **Evidence:** Chrissy asked Beach to define terms such as staggered, tile setting, soldier course, stack setting, and vertical setting, then create a dictionary that evolves when she says Zoe.
- **Failure or correction:** None; this adds a shared language guide so Chrissy does not have to redefine trade terms for each job.
- **System implication:** Create a workspace-level tile-term dictionary, link it from the shared instructions, and require each future Zoe cycle to add or correct terms learned from Chrissy.
- **Status:** Integrated

### 2026-09-16 17:24 -04:00 — Dobitsch

- **Learned:** The main `swatches` folder holds the working reference images, while `swatches/finalized-swatches` holds material-named subfolders with exact retained copies. It also contains two empty folders named `resplendent-render` and `wood-wall-render`.
- **Evidence:** Chrissy asked Beach to explain the difference and then inspect every folder and image. Image checks confirmed that the four files in the `-media` folders exactly match their main swatches. The two `-render` folders contain no files.
- **Failure or correction:** Beach's first quick answer correctly described the retained media copies but did not mention the two empty render folders until completing the full folder review.
- **System implication:** Future inventories must separate working swatches, retained identical media copies, different source versions, and empty render folders. Retained copies must not be presented as different material choices.
- **Status:** Integrated

### 2026-09-16 17:30 -04:00 — Dobitsch

- **Learned:** When Chrissy supplies an official product link, she wants the official material image brought into the job as a working swatch with its dimensions, appearance, and useful product details kept beside it.
- **Evidence:** Chrissy supplied the Naxos Pictura Luni link and asked Beach to pull in Luni with the correct dimensions, description, and other useful information.
- **Failure or correction:** None. The official 60 × 120 cm Luni image was used rather than a screenshot or a guessed color crop.
- **System implication:** A future link-intake step should save the official image, maker, collection, color, listed sizes, surfaces, edge, thickness, matching pieces, source links, and visualizer-use notes in the confirmed job folder.
- **Status:** Integrated

### 2026-09-16 17:33 -04:00 — Workspace-wide

- **Learned:** Chrissy wants measurements presented in the imperial system moving forward.
- **Evidence:** Chrissy said, “moving fwd, convert all metric system measurements to imperial.”
- **Failure or correction:** Earlier product notes led with metric measurements and placed imperial measurements second.
- **System implication:** Show feet and inches first in questions, product notes, handoffs, and visualizer instructions. When the source is metric, convert it carefully and retain the original metric value only in source notes when needed for accuracy.
- **Status:** Integrated

### 2026-09-17 11:06 — Dobitsch

- **Learned:** The second-floor powder room is a separate room from the basement powder room. For this room, Chrissy selected Iridian White 8 x 8 for the floor and Glazzio Manacor Beige Argile 4 x 4 glossy tile for the shared vanity-and-toilet wall.
- **Evidence:** Chrissy corrected the basement-room assumption, identified the room as the second-floor powder room, and supplied the official Manacor Collection link.
- **Failure or correction:** The earlier question incorrectly offered the existing basement powder-room plan. The correct second-floor plan was then found in `Dobitsch/floor-plans/2nd Fl Pwdr.png`.
- **System implication:** The visualizer must keep rooms on different floors separate, even when they use similar tile names. A supplied official product link should be used to confirm the exact collection, color, size, finish, and image before generating.
- **Status:** Integrated

### 2026-09-17 11:09 — Dobitsch

- **Learned:** In the second-floor powder room view from the doorway, the toilet belongs on the left and the vanity belongs on the right.
- **Evidence:** Chrissy corrected the first draft by saying, “vanity needs to be on the right & toilet on the left.”
- **Failure or correction:** The first draft reversed the fixtures because the plan was read incorrectly.
- **System implication:** Before generating from a floor plan, state the left-and-right fixture positions from the chosen camera view so Chrissy can catch a flipped reading early.
- **Status:** Integrated

### 2026-09-17 11:54 — Dobitsch

- **Learned:** For the second-floor main bath, Chrissy selected Pictura Luni Soft 12 x 24 for the main floor and Pastorelli Colorful Ocean Brick 3 x 16 for the shower walls.
- **Evidence:** Chrissy supplied the room plan and product link, then confirmed that the linked Ocean tile's 3 x 16-inch size is correct.
- **Failure or correction:** The first request called the wall tile 3 x 12, while the supplied product page listed 3 x 16. The size was confirmed before generating.
- **System implication:** When a written size and a supplied product page disagree, stop and ask Chrissy which size controls. Use the maker's image when it is clearer than the retailer's image.
- **Status:** Integrated

### 2026-09-17 12:45 — Dobitsch

- **Learned:** In the second-floor main bath, the toilet is inside the separate room beyond the pocket door. It sits along that room's left wall and faces across the room, so it should be seen from the side rather than centered and facing the main-bath camera.
- **Evidence:** Chrissy said the toilet was not in the correct location and asked for another review of the architectural plan.
- **Failure or correction:** The first draft placed the toilet in the center of the doorway and facing the camera.
- **System implication:** Read the toilet symbol's tank wall and facing direction from the plan before generating. A doorway alone does not mean the toilet should be centered in that opening.
- **Status:** Integrated

### 2026-09-17 12:48 — Dobitsch

- **Learned:** Chrissy does not want the toilet shown in the second-floor main-bath visualization, even though the separate toilet room remains part of the architectural layout.
- **Evidence:** After reviewing the corrected location, Chrissy said, “remove toilet.”
- **Failure or correction:** Correct placement alone did not produce the preferred presentation. The fixture needed to be removed from view.
- **System implication:** A floor plan controls room structure, but Chrissy may choose to hide a fixture so the selected tile is easier to judge. Record that as a presentation choice rather than changing the plan itself.
- **Status:** Integrated

### 2026-09-17 12:49 — Dobitsch

- **Learned:** Chrissy chose the toilet-free second-floor main-bath image as worth saving and named it “2nd fl main bath.”
- **Evidence:** Chrissy said, “save 2nd fl main bath.”
- **Failure or correction:** None.
- **System implication:** Save the exact chosen image only after Chrissy approves it. Use the requested words while applying the job's lowercase-and-hyphens filename rule, resulting in `2nd-fl-main-bath.png`.
- **Status:** Integrated

### 2026-09-17 12:57 — Workspace-wide

- **Learned:** Chrissy dislikes hyphens in visible names but accepts them in stored filenames because Ryan says they are important.
- **Evidence:** Chrissy asked to restore the hyphens in the visualization filenames while saying she hates them.
- **Failure or correction:** Chrissy had removed hyphens from two visualization names, which made the folder inconsistent.
- **System implication:** Keep hyphens in stored filenames for dependable organization, but the future visualizer should show friendly names with normal spaces so Chrissy does not have to look at file-style names.
- **Status:** Integrated

### 2026-09-17 13:27 -04:00 — Dobitsch

- **Learned:** Chrissy renamed this job's agent from Beach to Dobitsch.
- **Evidence:** Chrissy said, “your name is Dobitsch.”
- **Failure or correction:** The earlier shared note called the agent Beach.
- **System implication:** Refer to this agent as Dobitsch while working on the Dobitsch client job. A job-based agent name may help Chrissy immediately recognize which client folder the agent handles.
- **Status:** Integrated

### 2026-09-17 14:32 -04:00 — Dobitsch

- **Learned:** For the detailed Dobitsch mudroom plan, Chrissy selected Marmorea Bardiglio and Carrara in 12 x 12-inch squares set diagonally on the floor.
- **Evidence:** Chrissy supplied the mudroom plan, named both colors, supplied the Bardiglio product link, and asked for a diagonal setting.
- **Failure or correction:** The request did not state how the two colors should alternate. The first draft used a one-for-one checkerboard, and Chrissy approved that image for saving.
- **System implication:** When two tile colors are named for one floor, the visualizer should show or confirm the planned mix. For this room, diagonal means a 45-degree turn of the alternating square grid.
- **Status:** Integrated

### 2026-09-17 14:39 -04:00 — Dobitsch

- **Learned:** Chrissy chose the Marmorea diagonal-checkerboard mudroom image as worth saving and named it “mudroom.”
- **Evidence:** Chrissy said, “yes save it as mudroom.”
- **Failure or correction:** None.
- **System implication:** Save the exact approved image as `mudroom.png` without replacing the older plain mudroom base image.
- **Status:** Integrated

### 2026-09-17 14:45 -04:00 — Dobitsch

- **Learned:** From the main-entry view of the detailed mudroom, the right-side return wall hides most of the bench, so only a small part of the bench should be visible. The 12-inch tile edge remains the controlling tile measurement after the grid is turned diagonally.
- **Evidence:** Chrissy said the bench should be shown only partially and asked for the tile scale to be reconfirmed.
- **Failure or correction:** The first saved draft showed the full bench. The first correction then treated the tile's roughly 17-inch corner-to-corner distance as the spacing between neighboring diamonds, which made the tile much too large.
- **System implication:** Use nearby plan walls to decide what the camera can actually see. For diagonal square tile, keep the named 12-inch edge as the controlling size; turning the grid 45 degrees changes its direction, not the tile's side length.
- **Status:** Integrated

### 2026-09-17 14:47 -04:00 — Dobitsch

- **Learned:** The agent first read the entry width as 40 inches, but Chrissy later corrected it to 4 feet 10 inches. The useful part of this check is that the 12-inch tile edge—not the 17-inch corner-to-corner distance—must control the scale.
- **Evidence:** Chrissy rejected the first scale correction by saying, “tile scale way off. 12x12 diagonal.”
- **Failure or correction:** The first correction created giant diamonds by using the wrong tile measurement. The next check also used the wrong room width from the plan.
- **System implication:** When checking diagonal tile scale, confirm which plan measurement spans the visible floor before calculating. Then compare the true tile edge to that width and rotate the grid without enlarging the tiles.
- **Status:** Integrated

### 2026-09-17 14:52 -04:00 — Dobitsch

- **Learned:** The mudroom entry width controlling the floor scale is 4 feet 10 inches, or 58 inches.
- **Evidence:** Chrissy clarified, “the width of the inital is 4/10” and then confirmed “4'10\".”
- **Failure or correction:** The agent had used a 40-inch width, making the tiles about 45 percent too large.
- **System implication:** A 58-inch width equals four full 12-inch tile edges plus 10 inches. The visualizer must confirm the exact dimension line that matches the visible floor before creating a scale-based room image.
- **Status:** Integrated

### 2026-09-17 15:45 -04:00 — Workspace-wide

- **Learned:** Chrissy wants a separate trial job where uncertain ideas can be explored without affecting an established client job.
- **Evidence:** Chrissy asked to work outside Dobitsch, create a job called Test, and use it for work that may not become a job or may not be possible.
- **Failure or correction:** None.
- **System implication:** The visualizer should allow a clearly separate trial job for early experiments, while still using the normal folders so useful work can be kept if the idea succeeds.
- **Status:** Integrated

### 2026-09-17 15:46 -04:00 — Test

- **Learned:** After Chrissy chooses a working job, the agent should remain in that job until she clearly asks to switch.
- **Evidence:** Chrissy said she will tell the agent when she is done in Test and wants to work in Dobitsch again.
- **Failure or correction:** None.
- **System implication:** The visualizer should keep the chosen job active between requests and make the current job easy to see. It should not silently switch because another job was used earlier.
- **Status:** Integrated

### 2026-09-17 15:49 -04:00 — Test

- **Learned:** Chrissy wants to test whether a faint kitchen schematic can be turned into a clean overhead image that clearly shows room measurements and uses soft gray to identify the cabinets.
- **Evidence:** Chrissy supplied the Fisher kitchen schematic and asked for that exact conversion.
- **Failure or correction:** The source scan is extremely faint, so some printed cabinet details cannot be read with confidence.
- **System implication:** A future plan-cleaning feature should preserve the original source, use only measurements that can be read, visually separate cabinets with a chosen color, and require Chrissy to check the cleaned plan before it is treated as accurate.
- **Status:** Integrated

### 2026-09-17 15:52 -04:00 — Test

- **Learned:** When cleaning a room plan, furniture that helps explain how the room is used may need to remain. For this kitchen plan, the sitting area with the round table and chairs must be shown.
- **Evidence:** Chrissy asked for the sitting area from the source plan to be added to the clean layout.
- **Failure or correction:** The first cleaned draft removed the dining table and chairs as clutter, which also removed an important part of the requested layout.
- **System implication:** Before removing furniture from a cleaned plan, the visualizer should ask whether it is part of the room layout that Chrissy wants to keep.
- **Status:** Integrated

### 2026-09-17 15:55 -04:00 — Test

- **Learned:** The clean Fisher kitchen plan works for Chrissy when it keeps the cabinet layout, uses soft-gray cabinets, clearly shows the readable measurements, and includes the sitting area.
- **Evidence:** Chrissy said the revised image “looks great” and asked to save it as Fisher.
- **Failure or correction:** The sitting area had to be restored after the first draft removed it.
- **System implication:** This clean-plan style is a useful starting point for future faint schematics, but the agent must confirm which furniture should remain before presenting the first draft.
- **Status:** Integrated

### 2026-09-18 12:35 -04:00 — Workspace-wide

- **Learned:** Chrissy wants the successful Fisher plan-cleaning method to become a permanent part of the workflow.
- **Evidence:** After reviewing how clean plans can help later work, Chrissy said “Zoe” and asked to make sure that explanation is built into the workflow moving forward.
- **Failure or correction:** The Fisher trial showed that cleaning a plan can accidentally remove useful furniture and that a faint source can make details uncertain.
- **System implication:** Keep the original, preserve useful layout items, show only readable or confirmed measurements, require Chrissy's approval before reuse, and clearly separate a planning picture from a construction or installation drawing.
- **Status:** Integrated

### 2026-09-18 12:39 -04:00 — Workspace-wide

- **Learned:** Chrissy wants an approved clean room plan to lead into an accurate real-looking room, with the agent asking her the needed room-design questions before starting image generation.
- **Evidence:** Chrissy asked how Fisher can become an actual room and said she expects the agent to ask what she wants in the room after the new room specifications are prepared.
- **Failure or correction:** A top-down plan alone does not provide cabinet heights, ceiling height, camera direction, finishes, furniture sizes, or enough detail to create a dependable real-looking room.
- **System implication:** Add a room-specification package and a required question step between clean-plan approval and room generation. Verify a plain room shell and cabinet/furniture placement before applying finishes and materials.
- **Status:** Integrated

### 2026-09-18 12:46 -04:00 — Workspace-wide

- **Learned:** For a room with several views, Chrissy expects every relevant approved room view to be sent to the image maker as a reference for each new view.
- **Evidence:** Chrissy directly asked whether all room views would be sent as reference images and asked for a truthful answer rather than agreement for its own sake.
- **Failure or correction:** Earlier room work often used one main image plus a plan and material images rather than a complete set of all approved room views.
- **System implication:** Build a labeled reference set for each room, create each view separately using the same relevant approved references, add newly approved views to later requests, never use rejected views, and tell Chrissy if an input limit prevents all references from being included.
- **Status:** Integrated

### 2026-09-18 12:59 -04:00 — Test

- **Learned:** For the current Fisher plan revision, Chrissy wants both lower and upper cabinets shown in soft gray and the sitting-area table shown with a wood base.
- **Evidence:** Chrissy directly requested those changes to the most recent Fisher plan.
- **Failure or correction:** The approved Fisher plan used very light cabinet shading and did not clearly show the table base as wood.
- **System implication:** A clean plan may need simple color or shading to distinguish cabinet layers and furniture construction without changing the layout. Keep these appearance choices room-specific until Chrissy approves them.
- **Status:** Integrated

### 2026-09-18 13:54 -04:00 — Test

- **Learned:** Chrissy wants Lea Grey tile shown on the Fisher plan floor using the supplied finished-room photo as the material reference. The size was later confirmed as 30 x 60 inches, not centimeters.
- **Evidence:** Chrissy supplied `Lea Grey 2.jpg` after asking to install the tile in the Fisher room.
- **Failure or correction:** The agent assumed the stated 30 x 60 size was metric and converted it to about 12 x 24 inches. Chrissy later confirmed the size was already in inches.
- **System implication:** When a product size is written without a unit, confirm whether it is inches or centimeters before calculating tile scale. When a tile reference is a room photo instead of one isolated tile, use only its surface appearance.
- **Status:** Integrated

### 2026-09-18 13:55 -04:00 — Test

- **Learned:** For the Fisher trial, Chrissy wants the chosen floor tile shown in a real-looking room rather than placed only on the overhead plan.
- **Evidence:** After reviewing the corrected Lea Grey plan overlay, Chrissy said, “dont save. i want it shown in real space.”
- **Failure or correction:** The agent treated “install in room” as an overhead plan material overlay. That did not answer Chrissy's goal.
- **System implication:** When Chrissy asks to install a material after a clean plan exists, confirm whether she wants a plan overlay or a real-looking room. For Fisher, proceed through the room-view questions and do not save or reuse the rejected overhead draft.
- **Status:** Integrated

### 2026-09-18 13:58 -04:00 — Test

- **Learned:** The first Fisher room view should start at the large left opening and look toward the island and long cabinet wall.
- **Evidence:** Chrissy chose “looking from the left toward the island and long cabinet wall.”
- **Failure or correction:** None.
- **System implication:** Use this confirmed camera direction for the first Fisher real-room check instead of choosing a view for Chrissy.
- **Status:** Integrated

### 2026-09-18 13:59 -04:00 — Test

- **Learned:** The Fisher kitchen ceiling is 9 feet high.
- **Evidence:** Chrissy corrected her shorthand and confirmed “9'.”
- **Failure or correction:** The first answer was written as 9 inches, so the agent confirmed the intended unit before recording it.
- **System implication:** When a room measurement is unusually small or the foot and inch mark may be mistyped, confirm the unit before using it in an image.
- **Status:** Integrated

### 2026-09-18 14:00 -04:00 — Test

- **Learned:** The Fisher kitchen should use Shaker-style cabinet doors.
- **Evidence:** Chrissy answered “shaker” when asked for the cabinet-door style.
- **Failure or correction:** None.
- **System implication:** Use Shaker doors in the Fisher real-room views and keep this choice in the room record so later views stay consistent.
- **Status:** Integrated

### 2026-09-18 14:05 -04:00 — Test

- **Learned:** The Fisher kitchen countertops should be natural quartzite using Chrissy's supplied slab photograph.
- **Evidence:** Chrissy answered “natural quartite” and attached the slab image.
- **Failure or correction:** None.
- **System implication:** Send the slab photograph with every Fisher room view that shows the countertops, and use its broad natural movement without making it look like a small repeating pattern.
- **Status:** Integrated

### 2026-09-18 14:06 -04:00 — Test

- **Learned:** In the Fisher kitchen, the natural quartzite should continue up the wall as the backsplash.
- **Evidence:** Chrissy answered “up the wall” when asked whether the quartzite or a different material should be used for the backsplash.
- **Failure or correction:** None.
- **System implication:** Use one continuous countertop-and-backsplash stone choice in Fisher views, while keeping the pattern large and natural rather than tiled or repetitive.
- **Status:** Integrated

### 2026-09-18 14:07 -04:00 — Test

- **Learned:** The Fisher kitchen island should have a wood base rather than matching the soft-gray wall cabinets.
- **Evidence:** Chrissy answered “wood base” when asked whether the island should be soft gray or a different color.
- **Failure or correction:** None.
- **System implication:** Keep the wood island as a separate cabinet finish in every Fisher room view so it does not silently change to gray.
- **Status:** Integrated

### 2026-09-23 13:49 -04:00 — Test

- **Learned:** The LSI shower-wall tile should use a 30 percent stagger.
- **Evidence:** Chrissy answered “yes” when the agent asked whether to use the maker's 30 percent stagger.
- **Failure or correction:** The earlier note recorded only a general stagger and left the amount open.
- **System implication:** Record exact layout amounts before making the finished room so “staggered” is not left open to interpretation.
- **Status:** Integrated

### 2026-09-23 13:50 -04:00 — Test

- **Learned:** In the LSI bath, both the toilet and shower sit along the rear 84-inch wall and face out toward the doorway. The toilet is on the rear left and the shower is on the rear right.
- **Evidence:** Chrissy said the floor plan was shown incorrectly and explained that both fixtures are placed along the rear 84-inch wall, facing out.
- **Failure or correction:** The first plain room check incorrectly placed and turned the toilet along the left side wall.
- **System implication:** Before generating a room from a rotated hand plan, state which wall each fixture touches and which way it faces. Check both position and facing direction in the plain room review.
- **Status:** Integrated

### 2026-09-23 13:52 -04:00 — Test

- **Learned:** In the LSI bath, the door and vanity share the near 84-inch wall. The doorway is directly across from the shower. The vanity is beside the door, not along a long side wall.
- **Evidence:** Chrissy corrected the layout and said the door is directly across from the shower and the vanity is against the same wall as the door.
- **Failure or correction:** The first two room checks treated the vanity as if it ran down a long side wall.
- **System implication:** For every room plan, record each fixture by its exact wall and facing direction before generating. A doorway camera may show only a small part of an item that shares the doorway wall.
- **Status:** Integrated

### 2026-09-23 13:54 -04:00 — Test

- **Learned:** Chrissy approved the third LSI bath plain room check. The correct wall map is: near 84-inch wall has the door and vanity; opposite 84-inch wall has the toilet and shower; the doorway looks directly at the shower; the long side walls are clear.
- **Evidence:** Chrissy said, “this version is correct.”
- **Failure or correction:** It took three attempts because the agent relied on changing left-right descriptions from the camera instead of first writing a fixed four-wall map from the plan. The image maker then received incorrect placement instructions.
- **System implication:** Before generating from any rotated or hand-drawn plan, write and check a four-wall map: what touches each wall, which way each item faces, and what the doorway lines up with. Do this before sending any room instructions to the image maker.
- **Status:** Integrated

### 2026-09-23 13:55 -04:00 — Test

- **Learned:** Chrissy chose to save the approved LSI bath plain room check with the name “lsi bath.”
- **Evidence:** Chrissy said, “yes save as lsi bath.”
- **Failure or correction:** None.
- **System implication:** Keep the approved plain room check as the layout reference for the later finished tile view.
- **Status:** Integrated

### 2026-09-23 13:57 -04:00 — Test

- **Learned:** The LSI shower needs two 9-inch corner shelves and a white threshold between the main bathroom floor and shower floor.
- **Evidence:** Chrissy asked for both items to be installed when the tile is placed.
- **Failure or correction:** None.
- **System implication:** Include shower accessories and the threshold in the room details before the finished tile image is made, rather than adding them as an afterthought.
- **Status:** Integrated

### 2026-09-23 14:01 -04:00 — Test

- **Learned:** After approving the plain room and adding shower details, Chrissy expected the tiled image to be made without another delay.
- **Evidence:** Chrissy asked, “where is the image with the tile installed.”
- **Failure or correction:** The agent stopped to ask about shower-wall tile direction instead of continuing with a reasonable horizontal 30 percent stagger and showing a draft.
- **System implication:** Once the room and main finish choices are approved, use a safe ordinary choice for a smaller unanswered appearance detail when it can be reviewed easily in the draft. Do not let a minor choice hold up the requested image unless it changes the room or creates a serious risk.
- **Status:** Integrated

### 2026-09-23 14:10 -04:00 — Test

- **Learned:** The official Paloma close-up is a picture of four separate 8-by-8-inch tiles, not one 8-inch tile. Those four tiles create larger round and flower shapes when installed.
- **Evidence:** Chrissy said the first floor pattern was wrong and supplied the official MSI Paloma page again. The maker's detail and installed-floor images show the correct repeat.
- **Failure or correction:** The first finished LSI bath draft placed a complete large motif inside every single floor tile, making the pattern and scale wrong.
- **System implication:** When a swatch shows several grout lines, count the separate tiles before using it. Save both a close-up and an installed-floor reference when a multi-tile repeat controls the final appearance.
- **Status:** Integrated

### 2026-09-23 14:13 -04:00 — Test

- **Learned:** The LSI bath vanity should be white with a Carrara marble top.
- **Evidence:** Chrissy asked to install a white vanity with a Carrara marble top.
- **Failure or correction:** The earlier draft used a gray vanity with a plain white top.
- **System implication:** Carry the white vanity and Carrara top into all later LSI bath views.
- **Status:** Integrated

### 2026-09-23 14:15 -04:00 — Test

- **Learned:** Chrissy approved the revised LSI bath with the corrected Paloma repeat, Libretto shower finishes, white vanity, and Carrara marble top. She named it “LSI Paloma & Libretto.”
- **Evidence:** Chrissy said, “save this image as LSI Paloma & Libretto.”
- **Failure or correction:** None in this save step.
- **System implication:** Use this saved image as the approved finished LSI bath reference for later views or revisions.
- **Status:** Integrated

### 2026-09-23 14:39 -04:00 — Test

- **Learned:** Chrissy wants a second LSI bath finish option with pale Soho Soft Sage 2-inch hex mosaic on both the main and shower floors, glossy white 3-by-6 subway tile on the shower walls, and a white vanity.
- **Evidence:** Chrissy supplied the official Anatolia Soho page and requested those materials in the same floor plan.
- **Failure or correction:** None.
- **System implication:** Keep one approved room shape and create separate finish options from it. Save the exact official product images and item numbers so later versions do not confuse the many shapes and colors in the Soho collection.
- **Status:** Integrated

### 2026-09-23 14:41 -04:00 — Test

- **Learned:** Chrissy's Soho floor choice is the 1-inch Canvas White hex mosaic with spaced Soft Sage hexagon inserts, item 4501-0453-0. It is not the solid Soft Sage 2-inch hex mosaic.
- **Evidence:** Chrissy corrected the first alternate and said she meant “the one with the sage center and white main hex.”
- **Failure or correction:** The agent chose the solid Soft Sage 2-inch hex because “Soft Sage hex” was treated as a single product name, even though the collection includes more than one sage hex design.
- **System implication:** When a collection has several items sharing the same color and shape words, match the full pattern description and item number before generating. A color name alone is not enough.
- **Status:** Integrated

### 2026-09-23 14:44 -04:00 — Test

- **Learned:** Matching the correct mosaic product is not enough; the image must also show its true small 1-inch scale and exact regular insert spacing.
- **Evidence:** Chrissy supplied the exact white-and-sage mosaic image after rejecting a draft that used overly large hexagons and an imprecise repeat.
- **Failure or correction:** The second alternate used the correct white field and sage inserts, but the image maker enlarged the mosaic and loosened its spacing.
- **System implication:** For small mosaics, include the exact flat reference and a room-width tile count in the image instructions. Review size and repeat separately from color and shape.
- **Status:** Integrated

### 2026-09-23 14:46 -04:00 — Test

- **Learned:** The LSI alternate shower walls must visibly read as true 3-by-6-inch subway tile, not a larger rectangle with the same shape.
- **Evidence:** Chrissy corrected the draft and said the shower wall size should be 3 x 6 subway.
- **Failure or correction:** The prior alternate showed glossy white subway tile, but its scale was too large.
- **System implication:** Check wall-tile scale using the known wall width and ceiling height. For this shower, a 48-inch wall should show about eight 6-inch tile lengths across, and a 9-foot height should show about 36 rows of 3-inch tile.
- **Status:** Integrated

### 2026-09-23 14:47 -04:00 — Test

- **Learned:** Chrissy approved the LSI alternate with the fine white-and-sage hex mosaic on both floors and true 3-by-6-inch glossy white subway tile on the shower walls. She named it “LSI Hex fl w/subway walls.”
- **Evidence:** Chrissy asked to save the exact image with that name.
- **Failure or correction:** None in this save step.
- **System implication:** Use this saved image as the approved Soho alternate for later views or comparisons.
- **Status:** Integrated

### 2026-09-23 14:54 -04:00 — Test

- **Learned:** Chrissy wants another LSI bath finish option with Soho Canvas White basketweave mosaic and small Soft Sage square dots on both the main and shower floors.
- **Evidence:** Chrissy asked to change the hex floor to basketweave with a sage dot and supplied the official Soho collection page.
- **Failure or correction:** None.
- **System implication:** Keep different finish options as separate views while holding the approved room, vanity, shower details, and wall-tile scale steady.
- **Status:** Integrated

### 2026-09-23 14:57 -04:00 — Test

- **Learned:** For the Soho basketweave option, Chrissy expects the exact maker format: small white rectangles alternating horizontal and vertical, with small sage square dots in the precise repeating positions.
- **Evidence:** Chrissy rejected the first basketweave draft and attached the exact flat mosaic format.
- **Failure or correction:** The first basketweave draft used the right colors and general idea but simplified the fine arrangement and scale.
- **System implication:** For mosaics with several piece shapes, use the flat product image as an exact map. Check piece proportions, direction changes, dot placement, and density separately.
- **Status:** Integrated

### 2026-09-23 15:02 -04:00 — Test

- **Learned:** The entire Soho Canvas White and Soft Sage basketweave reference image is one 12-by-12-inch sheet.
- **Evidence:** Chrissy attached the image again and stated that it is a 12 x 12-inch sheet.
- **Failure or correction:** Earlier drafts guessed the individual piece scale and repeated a loose basketweave, so both the size and layout were wrong.
- **System implication:** When a mosaic sheet size is known, scale the full sheet first and then repeat it. For this room, use seven sheets across the 84-inch width; for the shower, use four sheets across its 48-inch width and three through its 36-inch depth.
- **Status:** Integrated

### 2026-09-23 13:49 -04:00 — Test

- **Learned:** The plain room check should be reviewed before the LSI bath materials are added.
- **Evidence:** A doorway-view room check was generated with the confirmed vanity, toilet, and shower positions and no finish materials.
- **Failure or correction:** None yet; Chrissy's review is still needed.
- **System implication:** Keep plain room checks separate from finished material views and do not treat an unapproved check as a later reference.
- **Status:** Integrated

### 2026-09-18 14:08 -04:00 — Test

- **Learned:** The Fisher kitchen appliances should be stainless steel.
- **Evidence:** Chrissy confirmed “stainless steel.”
- **Failure or correction:** Chrissy first answered “yes” to a question containing several choices, so the agent asked one short follow-up before recording the finish.
- **System implication:** When a question gives several choices and the answer is only yes or no, confirm the exact choice before using it in a room image.
- **Status:** Integrated

### 2026-09-18 14:10 -04:00 — Test

- **Learned:** The Fisher kitchen cabinet handles and faucet should be brushed nickel.
- **Evidence:** Chrissy answered “nickle” after the finish question was narrowed to the handles and faucet.
- **Failure or correction:** Chrissy first answered “yes” to an open finish question, so the agent clarified what finish she meant.
- **System implication:** Use brushed nickel for Fisher hardware and ask finish questions in a way that can be answered with one clear material name.
- **Status:** Integrated

### 2026-09-18 14:12 -04:00 — Test

- **Learned:** Chrissy wanted to stop the Fisher detail questions and see a real-room draft once the main camera, height, cabinets, stone, floor, appliances, and hardware were known.
- **Evidence:** Chrissy said, “stop questions and show image.”
- **Failure or correction:** The question-led setup had continued past the point when Chrissy was ready to judge a picture.
- **System implication:** The visualizer needs a clear “show me now” action that immediately makes a draft using simple neutral choices for anything still unanswered, while keeping those choices open for correction.
- **Status:** Integrated

### 2026-09-18 14:13 -04:00 — Test

- **Learned:** The first Fisher real-room view is worth keeping when it combines the confirmed left-opening camera, gray Shaker cabinets, natural wood island, supplied quartzite, Lea Grey floor, stainless appliances, and brushed-nickel details.
- **Evidence:** Chrissy approved the shown image and named it “fisher floor.”
- **Failure or correction:** The earlier overhead tile version was not useful for this goal; the real-space room view was approved.
- **System implication:** Use `visualizations/fisher-floor.png` as an approved reference for later Fisher room views, together with the clean plan and exact material images.
- **Status:** Integrated

### 2026-09-18 14:15 -04:00 — Test

- **Learned:** After approving the main Fisher room view, Chrissy wanted a closer supporting view that clearly shows both the Lea Grey floor tile and the cooking range.
- **Evidence:** Chrissy asked to “show closer image showing tile range.”
- **Failure or correction:** None.
- **System implication:** A room may need one broad view for layout and separate closer views for judging important material-and-fixture pairings.
- **Status:** Integrated

### 2026-09-18 14:17 -04:00 — Test

- **Learned:** The Fisher Lea Grey floor tile is 30 x 60 inches, not 30 x 60 centimeters.
- **Evidence:** Chrissy corrected the close view and said, “it should be 30\"x60\".”
- **Failure or correction:** The agent assumed metric sizing, made the tile about 12 x 24 inches, and carried that wrong scale into earlier Fisher drafts.
- **System implication:** Require a unit beside every material size before generating. For Fisher, show tiles as 2.5 x 5-foot rectangles with far fewer grout lines. Keep the approved room design, but do not treat the tile scale in `fisher-floor.png` as accurate.
- **Status:** Integrated

### 2026-09-18 14:20 -04:00 — Test

- **Learned:** Chrissy wants a Fisher floor view from the table area looking back toward the island and long cabinet-and-range wall.
- **Evidence:** Chrissy asked to “show floor image with view from table area.”
- **Failure or correction:** None.
- **System implication:** For multi-view room work, include reverse views from useful activity areas so the floor and layout can be judged from both directions while keeping the same approved room design.
- **Status:** Integrated

### 2026-09-18 14:21 -04:00 — Test

- **Learned:** The table-area Fisher view successfully shows the corrected 30 x 60-inch Lea Grey floor and should be kept as the material-and-scale reference.
- **Evidence:** Chrissy asked to save the most recent image as “fisher tile.”
- **Failure or correction:** Earlier Fisher views used a smaller tile scale because the agent assumed centimeters.
- **System implication:** Use `visualizations/fisher-tile.png` for Lea Grey floor appearance and scale in later Fisher views. Use `fisher-floor.png` only for its approved room design until its floor is corrected.
- **Status:** Integrated

### 2026-09-18 14:26 -04:00 — Test

- **Learned:** Chrissy wanted the approved Fisher Floor image replaced after the true 30 x 60-inch tile size was confirmed.
- **Evidence:** Chrissy said, “update fisher floor image to correct size tile.”
- **Failure or correction:** The original saved Fisher Floor view used the earlier, incorrect smaller tile scale.
- **System implication:** When a saved material view is later corrected, update every approved view that displays that material after Chrissy authorizes replacement. Both `fisher-floor.png` and `fisher-tile.png` now show the corrected large-format floor.
- **Status:** Integrated

### 2026-09-23 13:34 -04:00 — Test

- **Learned:** Chrissy started an LSI bathroom trial with a 9-foot ceiling, Kenzzi 8 x 8 main floor, Libretto 2 x 2 matte hex shower floor, and Libretto polished 12 x 24 shower walls.
- **Evidence:** Chrissy supplied the hand-drawn layout, named each covered surface and material, gave the ceiling height, and supplied product links.
- **Failure or correction:** The name Kenzzi 8 x 8 does not identify one pattern; the collection contains several different designs.
- **System implication:** The visualizer must ask for the exact pattern or color when a collection name contains several products. It should save exact official product images and facts before generating.
- **Status:** Integrated

### 2026-09-23 13:38 -04:00 — Test

- **Learned:** The exact Kenzzi 8 x 8 main-floor pattern for the LSI bath is Paloma.
- **Evidence:** Chrissy answered “paloma” when asked which Kenzzi pattern she selected.
- **Failure or correction:** The collection name alone was not enough because Kenzzi contains several different patterns.
- **System implication:** Use the official Paloma swatch and its four-tile repeat. The visualizer must treat each square as one 8-inch tile, not treat the four-tile sample image as one tile.
- **Status:** Integrated

### 2026-09-23 13:41 -04:00 — Test

- **Learned:** The first LSI bath view should start at the doorway and look toward the toilet and shower.
- **Evidence:** Chrissy answered “yes” to that proposed camera direction.
- **Failure or correction:** None.
- **System implication:** Use this camera for the plain room check and keep left-right fixture placement consistent with the plan.
- **Status:** Integrated

### 2026-09-23 13:43 -04:00 — Test

- **Learned:** The LSI bath is 8 feet long by 7 feet wide, and the shower is 4 feet by 3 feet.
- **Evidence:** Chrissy stated “96 Length, 84 width, shower 4'x3'.”
- **Failure or correction:** The shower looked square in the hand drawing and had a visible 36-inch note, so the agent initially flagged it as possibly 3 by 3 feet. Chrissy corrected it to 4 by 3 feet.
- **System implication:** Use Chrissy's confirmed dimensions instead of judging scale from the hand drawing. Record both room and shower dimensions before generating.
- **Status:** Integrated

### 2026-09-23 13:44 -04:00 — Test

- **Learned:** The LSI shower-wall tile should reach the 9-foot ceiling and use a staggered layout.
- **Evidence:** Chrissy answered “yes and stagger set.”
- **Failure or correction:** None.
- **System implication:** Show full-height shower-wall coverage. Confirm the exact offset because the Libretto maker recommends no more than a 30 percent stagger.
- **Status:** Integrated

### 2026-09-18 14:07 -04:00 — Test

- **Learned:** The Fisher island base should use a natural wood color.
- **Evidence:** Chrissy answered “natural color” when asked about the island wood.
- **Failure or correction:** None.
- **System implication:** Show a light-to-medium natural wood island base, not a dark stain or gray-painted island.
- **Status:** Integrated

### 2026-09-23 15:14 -04:00 — Test

- **Learned:** Chrissy approved the corrected LSI basketweave bathroom image and named it “LSI Basketweave fl w/subway walls.”
- **Evidence:** Chrissy asked to save the image using that name.
- **Failure or correction:** None during the save step. The approved image follows earlier corrections to the 12 x 12-inch basketweave sheet scale and layout.
- **System implication:** Use `test/visualizations/lsi-basketweave-fl-subway-walls.png` as the approved basketweave reference for later LSI bathroom work.
- **Status:** Integrated

### 2026-09-24 12:18 -04:00 — Test

- **Learned:** Chrissy approved the LSI image with Happy Floors Soft Light Grey 12 x 24 main floor, white 3 x 6 subway shower walls, Belworth Murbo penny-round shower floor, Frost grout, and a gray vanity with white top. She named it “LSI Soft Grey w/subway and penny rounds.”
- **Evidence:** Chrissy asked to save the shown image using that name.
- **Failure or correction:** None during the save step.
- **System implication:** The finish choice remains approved, but its shower-floor scale was later rejected. The stored file is `test/visualizations/LSI Soft Grey wMurbo PR.png`; do not use it as an approved scale reference until the newest full-sheet correction is approved.
- **Status:** Integrated

### 2026-09-24 12:08 -04:00 — Test

- **Learned:** The 24-inch side of the Soft Light Grey main-floor tile should follow the length of the LSI room from the doorway toward the shower.
- **Evidence:** Chrissy asked to follow the direction of the room's length.
- **Failure or correction:** None.
- **System implication:** Describe tile direction using the doorway and shower, not only “vertical” or “horizontal,” so the direction remains clear from any plan rotation.
- **Status:** Integrated

### 2026-09-24 12:07 -04:00 — Test

- **Learned:** The stagger for the Happy Floors Soft Light Grey 12 x 24-inch LSI main floor should be 30 percent.
- **Evidence:** Chrissy answered yes when asked to confirm a 30 percent stagger.
- **Failure or correction:** None.
- **System implication:** State the stagger amount in the room instructions instead of using the general word “staggered.”
- **Status:** Integrated

### 2026-09-24 12:06 -04:00 — Test

- **Learned:** The Happy Floors Soft Light Grey 12 x 24-inch tile should use a staggered layout on the LSI main floor.
- **Evidence:** Chrissy answered “stagger.”
- **Failure or correction:** None.
- **System implication:** Record the exact stagger amount separately before generating because “stagger” alone does not define the offset.
- **Status:** Integrated

### 2026-09-24 12:04 -04:00 — Test

- **Learned:** The shower floor for the Happy Floors Soft Light Grey LSI alternate should use Glazzio Belworth Murbo matte penny rounds, item BWH6281.
- **Evidence:** Chrissy named Belworth Murbo penny rounds for the shower floor.
- **Failure or correction:** This filled the shower-floor choice that was missing from the prior request.
- **System implication:** Use the maker's 11 x 12 1/2-inch full sheet as the first shower-floor scale control. Use the visible piece count only as a second check.
- **Status:** Integrated

### 2026-09-24 12:00 -04:00 — Test

- **Learned:** Chrissy wants another LSI bathroom choice with Happy Floors Soft Light Grey 12 x 24-inch matte tile on the main floor and glossy white 3 x 6-inch subway tile on the shower walls.
- **Evidence:** Chrissy supplied the exact Happy Floors product link and named the covered surfaces and sizes.
- **Failure or correction:** The shower-floor material was not included in the request and must not be guessed.
- **System implication:** When a bathroom request names the main floor and shower walls but not the shower floor, ask for the shower-floor material before generating.
- **Status:** Integrated

### 2026-09-23 16:24 -04:00 — Test

- **Learned:** Chrissy approved the LSI image with Roca White and Gray Basket Weave, glossy white subway walls, MAPEI Frost grout, and the gray vanity with white top. She named it “LSI B/W and subway with frost grout.”
- **Evidence:** Chrissy asked to save the image using that name.
- **Failure or correction:** None during the save step.
- **System implication:** Use `test/visualizations/LSI - BW & subway - grey grout.png` as the approved Roca-and-Frost reference for later LSI bathroom work. Its current stored name predates or departs from the lowercase-and-hyphens rule and should not be changed without Chrissy's approval.
- **Status:** Integrated

### 2026-09-24 12:17 -04:00 — Test

- **Learned:** Chrissy wanted to see the Soft Light Grey and Murbo LSI draft before confirming grout.
- **Evidence:** When asked whether to use MAPEI Frost grout, Chrissy said “show image.”
- **Failure or correction:** Grout remained unanswered, so the review draft uses MAPEI Frost 5077 as a clearly stated temporary choice.
- **System implication:** Follow the show-me-now rule once the room, materials, sizes, and layout are known. Clearly identify any temporary choices instead of delaying the draft.
- **Status:** Integrated

### 2026-09-23 16:22 -04:00 — Test

- **Learned:** The exact grout for the Roca LSI bathroom choice is MAPEI Ultracolor Plus FA, color 5077 Frost, on the main floor, shower floor, and shower walls.
- **Evidence:** Chrissy supplied the exact product link and named MAPEI Ultra Frost grout.
- **Failure or correction:** “Very light gray” was only a general color description. Chrissy replaced it with a specific maker, product, and color number.
- **System implication:** Record grout maker, product name, and color number when Chrissy supplies them; do not keep only a general color description.
- **Status:** Integrated

### 2026-09-23 16:18 -04:00 — Test

- **Learned:** The Roca LSI bathroom choice should use very light gray grout on both floor areas and on the shower walls.
- **Evidence:** Chrissy asked to “use very light grey grout for floor and shower walls.”
- **Failure or correction:** The earlier preview did not have this confirmed grout choice.
- **System implication:** Ask for and record grout color separately for each covered surface, then keep it consistent in later views.
- **Status:** Integrated

### 2026-09-23 16:15 -04:00 — Test

- **Learned:** For the next LSI bath choice, Chrissy wants Roca CC Mosaics White and Gray Basket Weave on both floors, using the supplied full 12 x 12-inch sheet for scale. She also wants a gray vanity with a white top.
- **Evidence:** Chrissy supplied the Roca collection link and full-sheet image, stated that it is a 12 x 12-inch sheet, and asked for the gray vanity and white top.
- **Failure or correction:** This choice replaces the earlier white-and-sage basketweave only for this new alternate view.
- **System implication:** A new material choice must be saved separately from an earlier approved choice. Use the full sheet as the pattern and scale reference, while keeping the approved room layout unchanged.
- **Status:** Integrated

### 2026-09-24 12:29 -04:00 — Test

- **Learned:** Glazzio Belworth Murbo penny rounds must read at their true 1-inch size in the LSI shower, with roughly 48 pieces across the 48-inch width and roughly 36 rows through the 36-inch depth.
- **Evidence:** Chrissy said the penny-round scale was wrong and asked for the image to be corrected.
- **Failure or correction:** The saved preview enlarged the penny rounds and showed too few pieces across the shower floor.
- **System implication:** This piece-count-first rule was later corrected. The exact full maker sheet must control the first scale check; the visible piece count is only a second check.
- **Status:** Integrated
### 2026-09-24 12:31 -04:00 — Test

- **Learned:** Chrissy approved the corrected LSI shower floor with the Murbo penny rounds shown at the true 1-inch scale.
- **Evidence:** After seeing the corrected image, Chrissy asked to save it and confirmed that it should replace the older saved version.
- **Failure or correction:** The earlier saved version showed the penny rounds too large.
- **System implication:** This approval was later withdrawn because the saved scale was still wrong. Do not use that saved image as a Murbo scale reference until the full-sheet correction is approved.
- **Status:** Integrated
### 2026-09-24 14:04 -04:00 — Test

- **Learned:** The complete attached Murbo mosaic image is one 11 x 12 1/2-inch sheet, and that full sheet must control the shower-floor scale.
- **Evidence:** Chrissy said the shower-floor scale was still totally wrong and supplied the full-sheet image with its exact size.
- **Failure or correction:** Counting assumed 1-inch rounds did not hold the maker's actual sheet repeat accurately enough.
- **System implication:** For mosaics, repeat the exact full-sheet image across the known surface using the sheet's published width and depth. Use individual-piece counts only as a second check.
- **Status:** Integrated
### 2026-09-24 14:18 -04:00 — Test

- **Learned:** The official Glazzio page confirms Murbo BWH6281 has 1-inch penny rounds on an 11 x 12 1/2-inch sheet. The attached sheet image is wider than it is deep, so the 12 1/2-inch side runs across the 48-inch shower and the 11-inch side runs front to back.
- **Evidence:** Chrissy said the scale was still wrong, supplied the official product page, and attached the full-sheet image again.
- **Failure or correction:** The prior sheet-first check used the correct sheet measurements in the wrong direction, producing 4.36 by 2.88 sheet repeats instead of 3.84 by 3.27.
- **System implication:** A rectangular sheet needs both its measurements and its pictured direction. For this shower, use about 46 pieces across and about 39 staggered rows deep as the second check.
- **Status:** Integrated
### 2026-09-24 14:22 -04:00 — Test

- **Learned:** Chrissy approved the LSI Murbo correction based on the official 1-inch round and 11 x 12 1/2-inch sheet information.
- **Evidence:** After seeing the updated image, Chrissy said “update,” authorizing replacement of the saved image.
- **Failure or correction:** Earlier saved versions used the wrong visible scale or the rectangular sheet in the wrong direction.
- **System implication:** Use `test/visualizations/LSI Soft Grey wMurbo PR.png` as the current approved view. Its shower-floor scale uses 3.84 sheet widths across and 3.27 sheet depths.
- **Status:** Integrated

### 2026-10-02 14:24 -04:00 — Workspace-wide

- **Learned:** Chrissy wants every completed Zoe cycle saved and uploaded to the Visualizer GitHub repository, and she wants that repository public.
- **Evidence:** Chrissy said, “zoe now commits to github as well,” asked to push the workspace, and supplied `https://github.com/cfstonegallery/visualizer`.
- **Failure or correction:** The Visualizer folder was not connected to GitHub, and uploading the complete folder would expose client plans and room images on a public page.
- **System implication:** Add a checked GitHub upload step to every Zoe cycle. Use the public repository for shared Visualizer rules and tools. Keep client job folders private unless Chrissy clearly approves publishing them.
- **Status:** Integrated
