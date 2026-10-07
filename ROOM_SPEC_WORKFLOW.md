# Room Spec Workflow

Use this workflow after Chrissy approves a clean plan and wants a real-looking room image.

## Purpose

The clean plan controls the overhead layout. The room spec adds the missing heights, item details, materials, and camera views needed to turn that layout into a believable room.

Do not start a real-looking room image from the overhead plan alone.

## Step 1: Gather the room information

Ask Chrissy one short question at a time. Collect:

- The camera location and the direction it faces.
- Ceiling height.
- Wall lengths and heights that matter to the view.
- Door and window widths, heights, and positions.
- Which cabinets are base, wall, or full-height cabinets.
- Cabinet heights, door style, color, and hardware.
- Countertop and backsplash choices.
- Appliance type, position, size, and finish.
- Island or peninsula size and height.
- Furniture to keep, its size, and its position.
- Flooring, wall, ceiling, and trim finishes.
- Lighting to show.
- Items to hide, remove, move, or add.
- The room views Chrissy wants.

Record anything unknown. Never silently invent a missing measurement or item position.

If Chrissy says to stop the questions and show the room, proceed once the room, camera, main materials, and important sizes are known. Use simple temporary choices for minor unanswered details and list those choices when the draft is shown.

## Step 2: Make the four-wall map

Before generating, follow the wall-map part of `ROOM_LAYOUT_AND_SCALE_CHECK.md`.

- Name the near, opposite, left, and right walls from the chosen camera.
- Record what touches each wall.
- Record which way every fixture, cabinet, and item faces.
- Record what the doorway or camera lines up with.
- Record whether items on the camera wall should be fully visible, partly visible, or hidden.

Do this even when the plan is rotated. Do not replace the wall map with changing left-and-right descriptions.

## Step 3: Build the reference set

Use every relevant original source and approved reference image for that room whenever the image maker can accept it.

Every revision must be a new image call built from the unchanged original photo or plan, the original material and item pictures, useful approved references, and one complete written list of all approved room choices and corrections. Never include a true-room visualization that Chrissy rejected. An approved room visualization may be included when it helps preserve an accepted layout, camera, or design.

Clearly label the purpose of each reference:

- Approved clean plan: controls the overhead layout.
- Original plan: helps check that the cleaned plan did not lose information.
- Flat wall view: controls cabinet, opening, and fixture heights on that wall.
- Camera view or arrow: controls where the viewer stands and looks.
- Approved room view: controls an accepted layout, camera, or design when consistency is needed.
- Product or material image: controls color, pattern, finish, and scale.
- Furniture, appliance, or fixture image: controls the appearance of that item.

For a revision, write the full desired result again. Do not send only the newest correction. The written room spec must carry forward every approved decision so the new image call does not depend on a rejected draft.

Use `visualizer-tools/fresh-revision-builder.html` to check the source list and prepare the complete request. The tool must not produce the request until the agent confirms that no rejected true-room visualization is included.

If the image maker cannot accept every relevant approved reference in one request, do not silently leave images out. Tell Chrissy what cannot be included and use a clearly labeled combined reference sheet or another agreed method.

For each material reference, state whether it shows one tile, several tiles, one full mosaic sheet, or an installed room. When a flat image contains several tiles or one full sheet, state that clearly so the image maker does not treat the whole picture as one tile.

## Step 4: Make a plain room check

First generate a simple room with:

- Plain light walls and ceiling.
- Plain floor.
- Soft-gray cabinets.
- Simple appliances and furniture.
- The selected camera view.

The goal is to check room shape, scale, cabinet placement, furniture placement, doors, windows, and what should be visible. Do not let finishes or decoration hide layout errors.

## Step 5: Review the plain room

Check with Chrissy:

- Correct camera position and direction.
- Correct room shape and proportions.
- No left-and-right reversal or mirrored layout.
- Correct wall, cabinet, island, appliance, fixture, and furniture positions.
- Correct visible and hidden items.
- Believable heights and walking space.

Correct the room shape and placement before adding finishes.

## Step 6: Check material scale and apply finishes

After Chrissy approves the plain room, record its approved layout in the written room spec. Add the confirmed cabinets, counters, backsplash, flooring, wall finishes, furniture, lighting, hardware, and decoration in a new image call. The approved plain-room picture may be included as a layout reference. A rejected plain-room picture may not be included.

Material images control appearance. Confirmed room measurements control scale.

Before generating, follow `ROOM_LAYOUT_AND_SCALE_CHECK.md`:

- Record the exact maker, product, item number, piece size, and full sheet size when there is one.
- Count how many tiles or sheets should fit across the known floor or wall.
- Count how many rows should fit over the known wall height.
- For a multi-tile design, record how many individual tiles create one complete repeat.
- For a mosaic, state which full-sheet side runs across the surface and which side runs front to back. Keep the exact decimal sheet count instead of rounding it.
- Repeat the entire factory sheet before judging the individual pieces. Use the visible pieces inside the full sheet only as a second check.
- Use `visualizer-tools/material-scale-check.html` to prepare the sheet counts and plain-language image instructions.
- Put these expected counts into the image instructions.

If Chrissy later finds a scale problem in a saved image, correct the written room spec and use the original maker sheet for scale. Do not include the scale-rejected room visualization as a reference. Have Chrissy review the new image before replacing the saved one.

## Step 7: Make more room views

Create each requested room view separately. For every new view:

- Send the same approved clean plan and room spec.
- Send every relevant approved room view from the same room when it helps preserve an accepted result.
- Send the same material, furniture, appliance, and fixture references.
- State the new camera position and direction.
- Require the room layout, cabinet count, furniture count, materials, and proportions to remain consistent.

Never send a rejected true-room visualization as a reference for a later view or correction. Use original sources, useful approved references, and the same complete written room spec for every camera view. A rejected draft may explain what failed to the agent, but it must not be sent to the image maker.

## Step 8: Save after approval

Show each view separately. Ask whether that exact view is worth saving and what filename Chrissy wants.

Record the approved view, its camera position, the references used, and the full approved written room spec in the room handoff.

## Image-maker direction

Every real-looking room request should say, in plain language:

- Which image controls the layout.
- Which images control heights and positions.
- Which approved room images control consistency.
- Which images control appearance only.
- Where the camera stands and faces.
- What must remain unchanged.
- No mirroring, redesigning, moving, adding, or removing unless Chrissy asked.
- Which details are still uncertain.

Original sources, approved references, and a complete written spec improve consistency, but they do not guarantee that separate generations will match perfectly. Every result still needs Chrissy's review. Rejected true-room visualizations must never be fed into the next image request. When an exact local change or exact pixel-for-pixel match is required, explain that a photo-editing or measured three-dimensional room tool may be more reliable than image generation.
