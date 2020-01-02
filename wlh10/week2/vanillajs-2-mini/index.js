document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event) {
  event.preventDefault()
  const item = document.createElement('li')
  const input = document.querySelector('#item')
  item.innerText = input.value
  item.addEventListener('click', completeTodo)

  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', removeTodo)
  item.append(button)
  
  const list = document.querySelector('ul')
  list.appendChild(item)
}

function removeTodo(event) {
  event.target.parentNode.remove()
}

function completeTodo(event) {
  if (event.target.getAttribute('aria-checked') !== 'true') {
    event.target.setAttribute('aria-checked', 'true')
  } else {
    event.target.setAttribute('aria-checked', 'false')
  }

}