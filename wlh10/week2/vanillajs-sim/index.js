const monthlyExpenses = []
let totalExpenses = 0
let id = 1

const addButton = document.querySelector('.add-bill>button')
const billName = document.querySelector('input[type="text"]')
const billAmount = document.querySelector('input[type="number"]')
const expenseList = document.querySelector('.expenses>ul')
const total = document.querySelector('.total')

addButton.addEventListener('click', addBill)

function addBill(e) {
  if (!billName.value || !billAmount.value) return alert('You must fill out all fields!')

  // Add expense to array:
  const newExpense = {
    name: billName.value, 
    amount: billAmount.value, 
    id: id++
  }
  monthlyExpenses.push(newExpense)

  // Create the element
  const li = document.createElement('li')
  const div = document.createElement('div')
  const newName = document.createElement('p')
  const newValue = document.createElement('p')
  const deleteButton = document.createElement('img')

  // Give values and event listeners to the elements
  li.setAttribute('id', newExpense.id)
  newName.innerText = billName.value
  newValue.innerText = '$' + billAmount.value
  deleteButton.setAttribute('src', 'garbage.svg')
  deleteButton.addEventListener('click', deleteBill)

  // Assemble and render the new expense
  div.appendChild(newName)
  div.appendChild(newValue)
  li.appendChild(div)
  li.appendChild(deleteButton)
  li.classList.add('expense')
  expenseList.append(li)

  // Render the new total
  totalExpenses = monthlyExpenses.reduce((acc, el) => acc + +el.amount, 0)
  total.innerText = `$${totalExpenses}`
}

function deleteBill(e) {
  const id = e.target.getAttribute('id')
  const index = monthlyExpenses.indexOf(el => el.id === id)
  monthlyExpenses.splice(index, 1)
  totalExpenses = monthlyExpenses.reduce((acc, el) => acc + +el.amount, 0)
  total.innerText = `$${totalExpenses}`
  e.target.parentNode.remove()
}