let num = 0
function adder() {
  console.log(num++)
  // This stops the background from changing when the 
  // user clicks on the button
  // STOPS EVENT BUBBLING
  event.stopPropagation()
}

function randomBackground() {
  // 3 random numbers for rgb values
  let randomNum1 = Math.floor(Math.random() * 255)
  let randomNum2 = Math.floor(Math.random() * 255)
  let randomNum3 = Math.floor(Math.random() * 255)
  // Set background div to a variable
  const background = document.getElementById('background')
  // SET BACKGROUND COLOR
  background.style.backgroundColor = 
  `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
}

function updateTitle() {
  const title = document.querySelector('h1')
  console.dir(title)
  title.innerText = event.target.value
}

function alertTheThing() {
  alert('the thing was clicked')
}

// *** ADDING EVENT LISTENERS *** //
let button = document.querySelector('button')
// ! The less good way:
// button.onclick = alertTheThing
// The more good way:
// button.addEventListener('click', alertTheThing)





// *** ADDING AND REMOVING ELEMENTS *** //
// Adding new element
function addItem() {
  // Create the element
  const newItem = document.createElement('li')
  // Added HTML to the inside of the element
  newItem.innerHTML = event.target.value
  // Tell JS where to put the element
  const itemsElement = document.querySelector('.items')
  itemsElement.append(newItem) // append will put the element INSIDE the node
  event.target.value = ''
}

function removeElement() {
  // Select the element we want to remove
  const list = document.querySelectorAll('li')
  const itemToRemove = list[list.length - 1]
  // Remove that element
  itemToRemove.remove()
}