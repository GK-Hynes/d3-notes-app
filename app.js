var input = d3.select("input");
var preview = d3.select(".preview");

// New note
d3.select("#new-note").on("submit", function() {
  d3.event.preventDefault();
  d3
    .select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  setPreview("");
});

// Clear notes
d3.select(".remove").on("click", function() {
  d3.selectAll(".note").remove();
});

// Randomize font-size of notes
d3.select(".lucky").on("click", function() {
  d3.selectAll(".note").style("font-size", function() {
    return Math.random() * 100 + "px";
  });
});

// Listen for input
input.on("input", function() {
  var note = d3.event.target.value;
  setPreview(note);
});

// Hide preview when empty
function setPreview(val) {
  preview.text(val).classed("hide", val === "");
}
