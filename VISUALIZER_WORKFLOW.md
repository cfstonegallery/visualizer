# Visualizer Workflow — Living Draft

This file holds the safe steps Chrissy has already decided. It is not the final IT plan. The larger workflow is still being discussed with Chrissy.

Last updated: 2026-10-07

## Chrissy's workflow decisions

1. Confirm the client job folder before starting client work.
2. If that folder does not exist, ask Chrissy before creating it.
3. Before making a room image, collect the room, surfaces, measurements, materials, sizes, pattern, direction, grout, camera view, fixtures, and requested result.
4. Show each draft before treating it as a saved job image.
5. Ask Chrissy whether that particular image is worth saving.
6. Ask Chrissy what filename she wants for each image she chooses.
7. Keep the shared tile dictionary current when Chrissy teaches or corrects a term.
8. Show measurements in feet and inches first. Keep original metric values only in source notes when needed.
9. Treat working swatches, different source versions, retained identical copies, and empty render folders as different things.
10. Keep lowercase hyphenated names for stored files, but show Chrissy friendly names with normal spaces and capitalization.
11. Keep an unchanged source plan before making a cleaned plan.
12. Keep furniture that explains the room layout unless Chrissy says to remove it.
13. Have Chrissy confirm a cleaned plan's layout and measurements before using it to guide room views or material placement.
14. Treat a cleaned plan as a planning picture, not a construction, ordering, or installation drawing, unless reliable measurements and details have been checked.
15. After a clean plan is approved, ask Chrissy the missing room questions one at a time before generating a real-looking room.
16. Make and approve a plain room check before adding materials and decoration.
17. Build every new room image and revision from the unchanged original photo or plan, original product and item pictures, useful approved reference images, and a complete written list of approved choices and corrections.
18. Create each view as a new image call. Never include a rejected true-room visualization as a reference. Approved room visualizations may be included when they help preserve an accepted layout, camera, or design.
19. Before making the plain room, use a four-wall map that records what touches each wall, which way it faces, and what the doorway lines up with.
20. Before adding tile or mosaic, identify whether the flat reference shows one tile, several tiles, or a complete sheet.
21. Check material scale with the known room: expected tiles across, rows high, full sheets across, and tiles in one pattern repeat.
22. When Chrissy says to stop the questions and show the image, make a review draft once the room, camera, main materials, and important sizes are known. Use simple temporary choices for minor unanswered details.
23. For mosaic scale, use the exact full maker sheet first. Record its direction and exact decimal repeats across and through the surface. Use the small-piece count only as a second check.
24. If Chrissy later rejects the scale in a saved image, correct the written room spec and use the original maker sheet for scale. Do not send the scale-rejected room visualization back as a reference.
25. After a completed Zoe cycle is checked, save and upload its shared Visualizer changes to the connected GitHub repository.
26. Keep client job folders and their plans, images, swatches, and handoffs off a public GitHub page unless Chrissy clearly approves public sharing of those client materials.

## IT implementation requirements

### Job gate

- Show the existing client job folders.
- Require one folder to be chosen before client files can be created or changed.
- Offer to create a missing job folder, but do not create it until Chrissy confirms.

### Image request form

Ask for these items in short steps:

- Room name and floor.
- Surface or surfaces to change.
- Room length, width, and height.
- Openings and fixture positions.
- Material name and reference image.
- Exact item number when a collection contains similar choices.
- Nominal size and, when available, actual measured size.
- Individual mosaic piece size and full sheet size.
- Whether the reference shows one tile, several tiles, a full sheet, or an installed room.
- Pattern name.
- Exact offset when the pattern is staggered.
- Horizontal, vertical, or named floor direction.
- Grout width and color.
- Starting point, center line, or focal point when important.
- Camera location and viewing direction.
- Fixtures to keep, move, add, replace, or remove.
- Number and type of views needed.

### Four-wall map and scale check

Follow `ROOM_LAYOUT_AND_SCALE_CHECK.md` before image making.

- Map the near, opposite, left, and right walls from the chosen camera.
- Record each item's wall, position, facing direction, and visibility.
- Record what the doorway or camera lines up with.
- Divide known surfaces by the tile or full sheet size.
- Keep decimal sheet counts and partial edge sheets; do not round a 4.36-sheet span down to four.
- Record which full-sheet side runs across and which runs front to back.
- Use `visualizer-tools/material-scale-check.html` to prepare and copy the sheet-scale directions.
- Put expected tile, row, or sheet counts into the image instructions.
- Review product, color, piece shape, piece size, sheet size, repeat, direction, and grout as separate checks.

### Official product-link intake

Follow `PRODUCT_LINK_INTAKE_TEMPLATE.md` when Chrissy supplies an official product link.

- Confirm the job folder first.
- Save the official product image in the job's main `swatches` folder as the working reference.
- Keep the maker, collection, color, appearance, sizes, surfaces, edge, thickness, matching pieces, date checked, and source links in a product-details file beside it.
- Keep the exact item number, individual piece size, full mosaic-sheet size, and the meaning of each reference image.
- When a repeat matters, keep both the flat product image and an installed-room or maker pattern image when available.
- Show imperial measurements first. Use the maker's imperial label when available; otherwise convert carefully and mark rounded conversions as approximate.
- Keep original metric values only in source notes when needed for accuracy.
- Do not place a new working swatch in `finalized-swatches` unless Chrissy later chooses it for that retained group.
- Do not present identical retained copies as extra product choices.

### Clean plan step

Follow `CLEAN_PLAN_WORKFLOW.md` when the supplied plan is faint, marked up, scanned, photographed, or difficult to read.

- Save an unchanged copy in the active job's `floor-plans` folder.
- Identify the room shape, openings, cabinets, fixtures, appliances, useful furniture, readable measurements, and uncertain details.
- Ask what furniture must remain only when the request and plan do not make that clear.
- Make a clean overhead draft without guessing at faint measurements or hidden details.
- Compare the draft with the source.
- Ask Chrissy to confirm the layout and every displayed measurement.
- Do not use the clean plan for later room or material work until she approves it.
- Always state that it is a planning picture unless reliable field or architectural information has been checked.

### Room spec and real-looking room step

Follow `ROOM_SPEC_WORKFLOW.md` after Chrissy approves a clean plan and asks for an actual room image.

- Ask for the camera location and direction, ceiling height, opening sizes, cabinet types and heights, appliance details, island size, furniture size, finishes, lighting, items to change, and requested views.
- Ask one short question at a time.
- Record unknown information instead of inventing it.
- Build a plain room check before adding finishes.
- Have Chrissy confirm the room shape, scale, placement, camera view, and visible items.
- Apply materials and style only after that approval.
- For each room view, include every relevant original plan, original room photo, approved clean plan, approved room view, material image, and item reference that the image maker can accept.
- Label which reference controls layout, height, camera, or appearance.
- Keep one complete written room spec containing every approved choice and correction.
- Create every revision and every view as a new image call from the current reference set and written room spec.
- Never include a rejected true-room visualization as a reference. Keep using original and approved reference images when they help.
- Use `visualizer-tools/fresh-revision-builder.html` to prepare the request and stop it when a rejected true-room visualization is still in the source list.
- If an input limit prevents all relevant references from being included, tell Chrissy before generating.

### Draft review

Show the draft with a short check of:

- Correct room shape and camera direction.
- Correct surfaces covered.
- Correct fixture count and placement.
- Believable material size and shape.
- Correct pattern, offset, and direction.
- Believable grout width.
- No added clutter hiding the material.
- Any detail that could not be confirmed from the source files.

For a cleaned plan, also check:

- Every wall angle, opening, cabinet group, island, appliance, and fixture against the source.
- Whether useful furniture such as a sitting area was kept.
- Every displayed measurement against readable or Chrissy-confirmed information.
- Whether the planning-picture warning is clear.

For a real-looking room, also check:

- The camera location and direction.
- No mirrored or left-and-right-reversed layout.
- Room, cabinet, island, appliance, fixture, and furniture placement.
- Consistency with the complete written room spec and the approved facts recorded from earlier reviews.
- Correct materials and believable scale.
- The exact item number and product variant.
- Whether a reference shows one tile, several tiles, or one full sheet.
- Expected tile, row, and sheet counts across known room dimensions.
- Exact multi-tile or full-sheet repeat without simplification.
- Exact decimal full-sheet count, correct sheet direction, and matching second-check piece count.
- No unrequested redesign, addition, removal, or movement.

### Save gate

For every draft, ask:

1. Is this particular generation worth saving?
2. What filename would you like to use for it?

Do not overwrite an existing saved image unless Chrissy clearly asks.

### Friendly names

- Keep the dependable lowercase-and-hyphens filename in storage.
- Show Chrissy a clear room name with ordinary spaces, such as **Second Floor Powder Room**.
- Show the exact stored filename only when she is naming, replacing, locating, or opening a file.
- A friendly name must never rename or overwrite the stored file by itself.

### Zoe dictionary update

When Chrissy says Zoe:

- Read `TILE_TERMS.md`.
- Review new tile words, meanings, corrections, and examples learned since the last Zoe checkpoint.
- Add confirmed terms in plain language.
- Mark unclear or regional terms as unclear and ask Chrissy before using them in an image.
- Record the dictionary change in `ZOE_LOG.md`.

### Zoe GitHub step

After a Zoe cycle is checked:

- Review the exact files waiting to be uploaded.
- Keep `Dobitsch`, `Esses`, `test`, and `output` out of the public upload unless Chrissy clearly approves them.
- Save the shared system changes with a short description of what Zoe changed.
- Upload them to `https://github.com/cfstonegallery/visualizer`.
- Never ask Chrissy to put her password or login code in chat. Use the safe GitHub sign-in window on her computer.
- Open the GitHub page and confirm the files arrived.
- If the upload fails, keep the local work and tell Chrissy clearly that it was not uploaded.

## Still to decide with Chrissy

- How a new job arrives and how its folder name is chosen.
- Where every type of incoming file should go.
- How alternatives, rejected drafts, approvals, completed jobs, and archived jobs should be separated.
- What job status words Chrissy wants.
- What belongs in every handoff.
- Backup, access, and archive rules for IT.
- Whether any client job folders should ever be included in the public GitHub repository.
