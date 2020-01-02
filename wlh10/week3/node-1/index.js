// import React from 'react'
const returnUser = require('./returnUser')
const users = require('./users.json')

function userData() {
  return users
}

function userByEmail(arr, email) {
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].email === email) return users[i].email
  // }
  // return users.filter(user => user.email.includes(email))
  return arr.filter(user => user.email === email)
}

function usersWithGmail() {
  return users.filter(user => user.email.includes('google.com'))
}

function nameStartsWithA() {
  return users.filter(user => user.first_name[0].toLowerCase() === 'a')
}

console.log(usersWithGmail())
