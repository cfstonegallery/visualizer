(function () {
  "use strict";

  function round(value, places) {
    const power = 10 ** places;
    return Math.round(value * power) / power;
  }

  function calculateScale(values) {
    const required = [values.surfaceWidth, values.surfaceDepth, values.sheetWidth, values.sheetDepth];
    if (required.some((value) => !Number.isFinite(value) || value <= 0)) {
      throw new Error("Enter a number greater than zero in each required box.");
    }

    const sheetsAcross = values.surfaceWidth / values.sheetWidth;
    const sheetsDeep = values.surfaceDepth / values.sheetDepth;
    const result = {
      sheetsAcross,
      sheetsDeep,
      wholeSheetArea: sheetsAcross * sheetsDeep
    };

    if (Number.isFinite(values.piecesAcross) && values.piecesAcross > 0) {
      result.piecesAcross = sheetsAcross * values.piecesAcross;
    }
    if (Number.isFinite(values.rowsDeep) && values.rowsDeep > 0) {
      result.rowsDeep = sheetsDeep * values.rowsDeep;
    }
    return result;
  }

  function readNumber(id) {
    const value = document.getElementById(id).value.trim();
    return value === "" ? null : Number(value);
  }

  function valuesFromForm() {
    return {
      surfaceWidth: readNumber("surfaceWidth"),
      surfaceDepth: readNumber("surfaceDepth"),
      sheetWidth: readNumber("sheetWidth"),
      sheetDepth: readNumber("sheetDepth"),
      piecesAcross: readNumber("piecesAcross"),
      rowsDeep: readNumber("rowsDeep")
    };
  }

  function buildInstructions(values, result) {
    let words = `The attached flat material image is one complete ${values.sheetWidth} by ${values.sheetDepth}-inch sheet. Repeat the complete sheet without changing its internal pattern. The surface is ${values.surfaceWidth} inches wide by ${values.surfaceDepth} inches deep. Show ${round(result.sheetsAcross, 2)} sheet widths across and ${round(result.sheetsDeep, 2)} sheet depths from front to back, including the natural partial sheets at the edges.`;
    if (result.piecesAcross && result.rowsDeep) {
      words += ` As a second scale check, the surface should read as about ${Math.round(result.piecesAcross)} pieces across and about ${Math.round(result.rowsDeep)} rows deep before edge cuts and camera perspective.`;
    }
    words += " The full maker sheet controls the scale. Do not enlarge the individual pieces or simplify the sheet repeat.";
    return words;
  }

  function drawPreview(values, result) {
    const canvas = document.getElementById("preview");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const pad = 46;
    const availableWidth = canvas.width - pad * 2;
    const availableHeight = canvas.height - pad * 2;
    const scale = Math.min(availableWidth / values.surfaceWidth, availableHeight / values.surfaceDepth);
    const width = values.surfaceWidth * scale;
    const height = values.surfaceDepth * scale;
    const left = (canvas.width - width) / 2;
    const top = (canvas.height - height) / 2;

    context.fillStyle = "#fbfbfa";
    context.fillRect(left, top, width, height);
    context.save();
    context.beginPath();
    context.rect(left, top, width, height);
    context.clip();

    if (result.piecesAcross && result.rowsDeep) {
      const gapX = width / result.piecesAcross;
      const gapY = height / result.rowsDeep;
      const radius = Math.max(1.4, Math.min(gapX, gapY) * 0.38);
      context.fillStyle = "#e7e7e4";
      context.strokeStyle = "#c4c4bf";
      context.lineWidth = 0.7;
      for (let row = 0; row <= Math.ceil(result.rowsDeep); row += 1) {
        const offset = row % 2 ? gapX / 2 : 0;
        for (let column = -1; column <= Math.ceil(result.piecesAcross); column += 1) {
          const x = left + column * gapX + offset + gapX / 2;
          const y = top + row * gapY + gapY / 2;
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
          context.stroke();
        }
      }
    }

    context.strokeStyle = "#66756b";
    context.lineWidth = 2;
    for (let x = 0; x <= values.surfaceWidth + 0.0001; x += values.sheetWidth) {
      context.beginPath();
      context.moveTo(left + x * scale, top);
      context.lineTo(left + x * scale, top + height);
      context.stroke();
    }
    for (let y = 0; y <= values.surfaceDepth + 0.0001; y += values.sheetDepth) {
      context.beginPath();
      context.moveTo(left, top + y * scale);
      context.lineTo(left + width, top + y * scale);
      context.stroke();
    }
    context.restore();

    context.strokeStyle = "#232323";
    context.lineWidth = 3;
    context.strokeRect(left, top, width, height);
  }

  function update() {
    const resultBox = document.getElementById("result");
    try {
      const values = valuesFromForm();
      const result = calculateScale(values);
      const pieceWords = result.piecesAcross && result.rowsDeep
        ? `<br>Second check: about <strong>${Math.round(result.piecesAcross)} pieces across</strong> and <strong>${Math.round(result.rowsDeep)} rows deep</strong>.`
        : "";
      resultBox.classList.remove("error");
      resultBox.innerHTML = `<strong>${round(result.sheetsAcross, 2)} sheets across</strong> and <strong>${round(result.sheetsDeep, 2)} sheets deep</strong>.${pieceWords}`;
      document.getElementById("instructions").value = buildInstructions(values, result);
      drawPreview(values, result);
    } catch (error) {
      resultBox.classList.add("error");
      resultBox.textContent = error.message;
      document.getElementById("instructions").value = "";
    }
  }

  function turnSheet() {
    const width = document.getElementById("sheetWidth");
    const depth = document.getElementById("sheetDepth");
    const across = document.getElementById("piecesAcross");
    const rows = document.getElementById("rowsDeep");
    [width.value, depth.value] = [depth.value, width.value];
    [across.value, rows.value] = [rows.value, across.value];
    update();
  }

  async function copyInstructions() {
    const text = document.getElementById("instructions").value;
    const button = document.getElementById("copy");
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy these words"; }, 1400);
    } catch (_) {
      document.getElementById("instructions").select();
    }
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("calculate").addEventListener("click", update);
      document.getElementById("turnSheet").addEventListener("click", turnSheet);
      document.getElementById("copy").addEventListener("click", copyInstructions);
      update();
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateScale };
  }
}());
