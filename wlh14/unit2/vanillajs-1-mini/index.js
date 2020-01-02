let count = 0
const element = document.getElementById('counter')
const buttons = document.getElementsByTagName('button')

function increase() {
  count++
  // console.log(count)
  element.innerText = count
}

function decrease() {
  count--
  // console.log(count)
  element.innerText = count
}

function reset() {
  count = 0
  // console.log(count)
  element.innerText = count
}

function selectTheme(theme) {
  // * const body = document.getElementsByClassName('body')
  // * body.className = theme
  document.getElementsByTagName('body')[0].className = theme
  document.getElementsByTagName('main')[0].className = theme
  for (let i = 0; i  < buttons.length; i++) {
    buttons[i].className = theme
  }
  console.dir(buttons)
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => (
    selectTheme(buttons[i].innerText.toLowerCase())
    )
  )
}