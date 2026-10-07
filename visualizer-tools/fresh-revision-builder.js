(function () {
  "use strict";

  function cleanLines(value) {
    return String(value || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function bulletList(items) {
    return items.map((item) => `- ${item}`).join("\n");
  }

  function buildRevisionRequest(values) {
    const originalSources = cleanLines(values.originalSources);
    const appearanceSources = cleanLines(values.appearanceSources);
    const fullSpec = String(values.fullSpec || "").trim();
    const change = String(values.change || "").trim();
    const room = String(values.room || "").trim();
    const camera = String(values.camera || "").trim();

    if (originalSources.length === 0) {
      throw new Error("Add at least one untouched original plan or photograph.");
    }
    if (!fullSpec) {
      throw new Error("Add the complete current room description, including earlier approved choices.");
    }
    if (!change) {
      throw new Error("Describe what should change in this new draft.");
    }
    if (!values.noAiReference) {
      throw new Error("Check the box confirming that no rejected true-room visualization will be used as a reference.");
    }

    const parts = [
      "Create a brand-new visualization using the original sources and approved references listed below. Do not use, trace, or imitate any true-room visualization that Chrissy rejected.",
      room ? `Job and room:\n${room}` : "",
      camera ? `Camera:\n${camera}` : "",
      `Untouched original plan or photograph sources:\n${bulletList(originalSources)}`,
      appearanceSources.length > 0
        ? `Product, material, fixture, style, or approved room references:\n${bulletList(appearanceSources)}`
        : "",
      `Complete current room description:\n${fullSpec}`,
      `Change required in this new draft:\n${change}`,
      "Rebuild the whole picture from these original sources and the complete description. Preserve every stated measurement, position, count, material, and camera direction. Do not mirror the room. Do not add, remove, or move anything unless the description says to do so."
    ];

    return parts.filter(Boolean).join("\n\n");
  }

  function valuesFromForm() {
    return {
      room: document.getElementById("room").value,
      camera: document.getElementById("camera").value,
      originalSources: document.getElementById("originalSources").value,
      appearanceSources: document.getElementById("appearanceSources").value,
      fullSpec: document.getElementById("fullSpec").value,
      change: document.getElementById("change").value,
      noAiReference: document.getElementById("noAiReference").checked
    };
  }

  function build() {
    const message = document.getElementById("message");
    try {
      document.getElementById("request").value = buildRevisionRequest(valuesFromForm());
      message.style.display = "none";
      message.textContent = "";
    } catch (error) {
      document.getElementById("request").value = "";
      message.textContent = error.message;
      message.style.display = "block";
    }
  }

  async function copyRequest() {
    const request = document.getElementById("request");
    const button = document.getElementById("copy");
    if (!request.value) {
      request.focus();
      return;
    }
    try {
      await navigator.clipboard.writeText(request.value);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy this request"; }, 1400);
    } catch (_) {
      request.select();
    }
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("build").addEventListener("click", build);
      document.getElementById("copy").addEventListener("click", copyRequest);
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildRevisionRequest, cleanLines };
  }
}());
