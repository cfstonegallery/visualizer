(function () {
  "use strict";

  function clean(value) {
    return String(value || "").trim();
  }

  function measurement(value, label) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? `${label}: ${number} inches.` : "";
  }

  function buildDrawingCheck(values) {
    const drawingType = clean(values.drawingType);
    const controls = clean(values.controls);
    if (!drawingType) {
      throw new Error("Choose what kind of drawing this is.");
    }
    if (!controls) {
      throw new Error("Say what this drawing controls.");
    }

    const parts = [
      clean(values.room) ? `Job and room: ${clean(values.room)}.` : "",
      `Drawing type: ${drawingType}.`,
      `This drawing controls: ${controls}`
    ];

    if (drawingType === "wall elevation or wall-and-ceiling profile") {
      parts.push(
        "Important: Read this as a front-facing wall-and-ceiling shape. Do not use its heights, flat ceiling length, or sloped ceiling length as floor depth.",
        measurement(values.overallWidth, "Overall wall width"),
        measurement(values.highHeight, "High-side wall height"),
        measurement(values.flatLength, "Flat ceiling length"),
        measurement(values.slopeLength, "Sloped ceiling length"),
        measurement(values.lowHeight, "Low-side wall height"),
        clean(values.slopeDirection) ? `Slope direction: ${clean(values.slopeDirection)}.` : ""
      );
    } else if (drawingType === "overhead floor plan") {
      parts.push("Important: Read this from above. Floor lengths control the room outline; wall and ceiling heights must come from a separate confirmed source.");
    } else if (drawingType === "unsure") {
      parts.push("Stop before making the room picture. Ask Chrissy whether this is an overhead plan or a front-facing wall view.");
    }

    if (clean(values.camera)) parts.push(`Camera: ${clean(values.camera)}.`);
    if (clean(values.leftOutside)) parts.push(`Visible just outside the left edge: ${clean(values.leftOutside)}`);
    if (clean(values.rightOutside)) parts.push(`Visible just outside the right edge: ${clean(values.rightOutside)}`);
    if (clean(values.openings)) parts.push(`Glass, doors, windows, and openings: ${clean(values.openings)}`);
    if (clean(values.temporaryPart)) parts.push(`Unfinished or temporary part: ${clean(values.temporaryPart)}. Show its shape and location, but do not invent its finished material.`);

    parts.push("Keep every confirmed measurement in its stated role. Do not mirror the view. Show nearby areas only to the stated amount.");
    return parts.filter(Boolean).join("\n\n");
  }

  function valuesFromForm() {
    const ids = [
      "room", "drawingType", "controls", "overallWidth", "highHeight",
      "flatLength", "slopeLength", "lowHeight", "slopeDirection", "camera",
      "leftOutside", "rightOutside", "openings", "temporaryPart"
    ];
    return Object.fromEntries(ids.map((id) => [id, document.getElementById(id).value]));
  }

  function showProfileFields() {
    const isProfile = document.getElementById("drawingType").value === "wall elevation or wall-and-ceiling profile";
    document.getElementById("profilePanel").style.display = isProfile ? "block" : "none";
  }

  function build() {
    const message = document.getElementById("message");
    try {
      document.getElementById("instructions").value = buildDrawingCheck(valuesFromForm());
      message.style.display = "none";
      message.textContent = "";
    } catch (error) {
      document.getElementById("instructions").value = "";
      message.textContent = error.message;
      message.style.display = "block";
    }
  }

  async function copyInstructions() {
    const output = document.getElementById("instructions");
    const button = document.getElementById("copy");
    if (!output.value) {
      output.focus();
      return;
    }
    try {
      await navigator.clipboard.writeText(output.value);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy these words"; }, 1400);
    } catch (_) {
      output.select();
    }
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("drawingType").addEventListener("change", showProfileFields);
      document.getElementById("build").addEventListener("click", build);
      document.getElementById("copy").addEventListener("click", copyInstructions);
      showProfileFields();
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildDrawingCheck, measurement };
  }
}());
