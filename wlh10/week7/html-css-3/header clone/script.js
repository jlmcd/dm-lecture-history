function clickHamburger() {
  const dropdown = document.querySelector('#dropdown')
  // console.dir(dropdown)
  if (dropdown.classList.contains('hide')) {
    dropdown.classList.remove('hide')
  } else {
    dropdown.classList.add('hide')
  }
}

function removeMenu() {
  const dropdown = document.getElementById('dropdown')
  if (!dropdown.classList.contains('hide')) {
    dropdown.classList.add('hide')
  }
}