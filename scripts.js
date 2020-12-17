const colors = ["silver", "red", "blue"];
let christmasTree = document.querySelector('.christmas-tree');

function addPresent() {
  // Create DOM element and set it to a variable
  // let christmasTree = document.querySelector('.christmas-tree');
  let newPresent = document.createElement('div');

  // Add class "present"
  newPresent.classList.add("present");
  // Add a class for color,
  // randomly adding either class
  // "silver", "red", or "blue".
  // Use the colors array.

  let randomNum = Math.floor(Math.random() * 3);
  newPresent.classList.add(colors[randomNum]);
  // Add event listener so when
  // the DOM element is clicked,
  // it is removed from the document

  newPresent.addEventListener("click", function() {
    newPresent.remove();
  })

  // Append your DOM element to the ".presents" div
  let presents = document.querySelector(".presents");
  presents.appendChild(newPresent);
}

// Add event listener so when .christmas-tree
// is clicked, addPresent() is called

document.querySelector(".christmas-tree").addEventListener("click", addPresent);