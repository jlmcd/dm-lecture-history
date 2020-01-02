const box = document.getElementById('box')
// console.dir(box)

// * BUTTON 1
function changeText() {
  if (box.innerText === 'I changed the text') {
    box.innerText = 'I have some text'
  } else {
    box.innerText = 'I changed the text'
  }
}

// * getElementsByClassName
const buttonsContainer = document.getElementsByClassName('buttons-container')
// console.dir(buttonsContainer)
buttonsContainer[0].style.height = '80px'
buttonsContainer[0].style.display = 'flex'
buttonsContainer[0].style.alignItems = 'center'
buttonsContainer[0].style.justifyContent = 'center'
buttonsContainer[0].style.borderTop = '5px solid orange'

// * getELementsByTagName
const buttons = document.getElementsByTagName('button')
// console.dir(buttons)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].className = 'test-button'
}


// * BUTTON 2
function changeColor() {
  if (buttons[1].classList.contains('blue')) {
    buttons[1].classList.add('key')
    buttons[1].classList.remove('blue')
  } else {
    buttons[1].classList.add('blue')
    buttons[1].classList.remove('key')
  }
}




// * BUTTON 3
function addHTML() {
  box.innerHTML = `
    <h1>I'm big</h1>
    <p>This is a paragraph</p>
  `
}

buttons[2].onclick = addHTML


// * BUTTON 4

function addText() {
  const valueHolder = document.getElementById('value-holder')
  const input = document.getElementById('input')
  valueHolder.innerText = input.value
}

buttons[3].onclick = addText


// * BUTTON 5
const count = document.getElementsByClassName('count')

function increaseCount() {
  if (!count[0].innerText) {
    count[0].innerText = 0
  } else {
    count[0].innerText++
  }
}

buttons[4].onclick = increaseCount


// * BUTTON 6
function alertFn() {
  alert('Something happened!')
}

buttons[5].onclick = alertFn