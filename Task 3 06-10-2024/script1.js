document.getElementById("word").addEventListener("mouseover", function () {
  this.innerHTML = "Can I help you?";
});
document.getElementById("word").addEventListener("mouseout", function () {
  this.innerHTML = "Hello World!";
});
document.addEventListener("DOMContentLoaded", function () {
  const CitySelect = document.getElementById("City");
  const flagss = document.getElementById("flag");
  const flags = {
    1: "pic/istockphoto-182826898-612x612.jpg",
    2: "pic/360_F_203153438_6tvdEUB2Nw9K0pubP6GAk7TjSIKlLorI.jpg",
    3: "pic/syria.jpg",
  };
  CitySelect.addEventListener("change", function () {
    const select = CitySelect.value;
    flagss.src = flags[select];
  });
});
function applyFontSize() {
  const sizeSelect = document.querySelector("#size");
  const textElement = document.querySelector("#dothechange");

  textElement.style.fontSize = sizeSelect.value;
}
document.querySelector("#size").addEventListener("change", applyFontSize);
applyFontSize();
///////////////////////////////////
function applyFontFamily() {
  const fontSelect = document.querySelector("#font");
  const textElement = document.querySelector("#dothechange");

  textElement.style.fontFamily = fontSelect.value;
}
document.querySelector("#font").addEventListener("change", applyFontFamily);

applyFontFamily();
///////////////////////////////////////////////
function toggleStyle(style) {
  const textElement = document.getElementById("dothechange");

  switch (style) {
    case "Italic":
      textElement.style.fontStyle =
        textElement.style.fontStyle === "italic" ? "normal" : "italic";
      break;
    case "Bold":
      textElement.style.fontWeight =
        textElement.style.fontWeight === "bold" ? "normal" : "bold";
      break;
    case "Underline":
      textElement.style.textDecoration =
        textElement.style.textDecoration === "underline" ? "none" : "underline";

      break;
  }
}

document.getElementById("Italic").addEventListener("change", function () {
  toggleStyle("Italic");
});

document.getElementById("Bold").addEventListener("change", function () {
  toggleStyle("Bold");
});
document.getElementById("Underline").addEventListener("change", function () {
  toggleStyle("Underline");
});
