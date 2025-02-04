let testBtn = document.getElementById("test-button");
let testText = document.getElementById("test-text");

testBtn.addEventListener("click", popFunction);

function popFunction() {
  testText.innerHTML = "Clicked Success";
}
