let box = document.getElementById('box')
console.dir(box)

function changeText() {
  box.innerText = 'I changed the text!'
}

let buttons = document.getElementsByTagName('button')
console.dir(buttons)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].className = 'test-button'
}

let buttonsContainer = document.getElementsByClassName('buttons-container')
console.log(buttonsContainer)
buttonsContainer[0].style.borderTop = '5px solid orange'
buttonsContainer[0].style.height = '80px'
buttonsContainer[0].style.width = '100%'
buttonsContainer[0].style.display = 'flex'
buttonsContainer[0].style.justifyContent = 'center'
buttonsContainer[0].style.alignItems = 'center'

let count = document.getElementsByClassName('count')
console.dir(count)
// PAIN IN THE BUTT
// count[0].className = 'count big-text'
count[0].classList.remove('blue')
count[0].classList.add('key')

function addHTML() {
  box.innerHTML = `<h1>I'm big</h1><p>This is a paragraph</p>`
}

buttons[1].onclick = addHTML

function increaseCount() {
  if (!count[0].innerText) {
    count[0].innerText = 0
  }
  count[0].innerText++
}

buttons[2].onclick = increaseCount

function clickMe() {
  let value = document.getElementById('value')
  let input = document.getElementById('input')
  value.innerText = input.value
}

function alertFn() {
  alert('Something happened!')
}