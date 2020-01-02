const form = document.querySelector('form')
form.addEventListener('submit', addTodo)

function addTodo(event) {
  event.preventDefault()
  const newItem = document.createElement('li')
  const input = document.querySelector('#item')
  newItem.innerText = input.value
  newItem.addEventListener('click', completeTodo)

  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', removeTodo)
  newItem.append(button)

  const list = document.querySelector('ul')
  list.appendChild(newItem)
  input.value = ''
}

function removeTodo() {
  event.target.parentNode.remove()
}

function completeTodo() {
  const checked = event.target.getAttribute('aria-checked')
  if (checked === 'true') {
    event.target.setAttribute('aria-checked', false)
  } else {
    event.target.setAttribute('aria-checked', 'true')
  }
}