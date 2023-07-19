let numbersVisible = true;
let gridItemsContent = []; // Array to store the original content of grid items

// Store the original content of grid items when the page loads
window.onload = function () {
  let gridItems = document.getElementsByClassName("grid-item");
  for (var i = 0; i < gridItems.length; i++) {
    gridItemsContent.push(gridItems[i].innerHTML);
  }
};

function toggleNumbers() {
  let gridItems = document.getElementsByClassName("grid-item");
  let button = document.getElementsByClassName("myButton")[0];
  if (numbersVisible) {
    // Hide numbers by setting content to empty
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].innerHTML = "";
    }
    button.innerHTML = "show numbers";
  } else {
    // Show numbers by restoring the original content
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].innerHTML = gridItemsContent[i];
    }
    button.innerHTML = "hide numbers";
  }
  numbersVisible = !numbersVisible;
}
