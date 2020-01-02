// *** ARRAYS! *** //

// How can we store a list?
// List a bunch of variables
// OR........ an Array!

let first = 'buy groceries'
let second = 'walk teh dog'
let third = 'wash laundry'

let todoList = ['buy groceries', 'walk teh dog', 'wash laundry']

// What is an array?
// Just a list.
// SYNTAX: square brackets - []
              // items are separated by commas - ,

// What can we keep in an array?
let randomList = [9, 'string', {thing: 'woeifj'}, function() {}, [1,2,3], true, null, undefined, NaN, 7, 5, 3,5, 67, 1]

// NaN = 
let something = 'string' / 9

// How do I access items in this array?

// console.log(todoList[1])
// console.log(randomList[6])

// How can we access the end of the array?
// console.log(randomList[8])
// ^^^ if you know the length, this works 
// But there's a better way!
// Array.length gives us the total number of elements inside the array
// console.log(randomList.length)
// console.log(randomList[14])

// *** ARRAY METHODS! *** //
// What is a method?
let methodsObj = {
  addAThing: function() {
    console.log('I added a thing')
  },
  removeAThing: function() {
    console.log('I removed a thing')
  }
}
// methodsObj.addAThing()

// AN ARRAY ALSO HAS BUILD-IN METHODS!
let pianos = ['Steinway', 'Yamaha']

// PUSH //
// Action: Adds an argument to the end of the array
// Return: The new length of the array
let pushReturn = pianos.push('Bosendorfer', 'Kawai')
// console.log(pianos)
// console.log(pushReturn)

// POP //
// Action: Removes the last element of the array
// Return: The element we removed from the array
let popReturn = pianos.pop()
// console.log(pianos)
// console.log(popReturn)

let dogs = ['Goldendoodle', 'German Shepherd', 'Crested Hairless']
// UNSHIFT //
// Action: Add the argument to the front of the array
// Return: The new length of the array
let unshiftReturn = dogs.unshift('Yorkie Poo')
// console.log(dogs)
// console.log(unshiftReturn)

// SHIFT //
// Action: Remove the first item of the array
// Return: The item we removed from the array
let shiftReturn = dogs.shift()
// console.log(dogs)
// console.log(shiftReturn)

let trees = ['Aspen', 'Cedar', 'Evergreen', 'Box Elder', 'Oak', 'Blue Spruce', 'Fir']
// SLICE //
// Action: Nothing to the original array
// Return: A copy of the array
// 1st Arg: (OPTIONAL): The index we want to start our copy at
// 2nd Arg: (OPTIONAL): The index we want to stop our copy at (BUT IT DOESN'T INCLUDE THE ELEMENT AT THIS INDEX)
let sliceReturn = trees.slice(3, 6)
// console.log(trees)
// console.log(sliceReturn)

// SPLICE //
// Action: (OPTIONAL): remove stuff from the array, and (OPTIONAL) add stuff to the array
// Return: An array containing the items removed
// 1st Arg: (REQUIRED): The index to start removing things from
// 2nd Arg: (OPTIONAL): How many elements to remove (number)
// 3rd Arg and beyond: (OPTIONAL): Any new data to be added to the array
// console.log(trees)
let spliceReturn = trees.splice(2, 2, 'Pine')
// console.log(trees)
// console.log(spliceReturn)



// *** FOR LOOPS *** //

// What is a for loop?
// It's just repeating code.
// A for loop will repeat a block of code until a condition is met

// Here's the syntax:
// 1st - code to be run before the loop
  // set up a variable (I use 'i' for iterator)
// 2nd - condition to be met
// 3rd - code to be run after each iteration of the code

// for (let i = 10; i > 0; i--) {
//   // any action we want goes here
//   console.log(i)
// }

// How many different ways can we loop?
// forward
// skipping numbers
// backwards
// YOU CAN LOOP IN AS MANY CREATIVE WAYS AS YOUR LITTLE IMAGINATION CAN HANDLE

// Can I loop through an array?

let numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++) {
  // numbers[i] = numbers[i] + 5
  numbers[i] += 5 // <-- a shorter way of writing the line above
  // console.log(numbers[i])
}



// *** OBJECTS *** //

// How can we store related pieces of data?
let name = 'Jonathan'
let hair = 'Brown'
let email = 'jon@than.com'
let password = '$ecret'

// Would an array work?
let userArr = ['Joanthan', 'Brown', 'jon@than.com', '$ecret']

// What is the syntax for an object?

let userObj = {
  name: 'Jonathan',
  hair: 'Brown',
  email: 'jon@than.com',
  password: '$ecret'
}

// What can we keep in an object?

let randomObj = {
  num: 9,
  string: 'jonathan',
  nully: null,
  bool: true,
  und: undefined,
  fn: function() {},
  arr: [1,2,3],
  obj: {}
}

// How do I delete something from an object?
// The delete keyword
delete randomObj.nully
// console.log(randomObj)

// How do we access items in an object?
// DOT NOTATION
// console.log(randomObj.string)
// BRACKET NOTATION
// console.log(randomObj['string'])

// BRACKET NOTATION allows us to use variables as key names (you can't do that with dot notation)
let key = 'bool'
// console.log(randomObj[key])

// How do I add more key/value pairs to an object?
let aaron = {
  name: 'Aaron',
  favoritePizza: 'BBQ Chicken'
}

// I want to add the key 'isBestMentor' with the value 'true'
aaron.isBestMentor = true
aaron['likesToEatCheesecake'] = true
// console.log(aaron)



// *** NESTED DATA *** //

let objArr = [
  {
    name: 'Shayla',
    friends: ['Stephen', 'Jeremiah'],
    greeting: function() {
      console.log('Hello, Shayla')
    }
  },
  {
    name: 'Mimi',
    friends: ['Chaz', 'John'],
    greeting: function() {
      console.log('Hello, Mimi')
    }
  },
  {
    name: 'Lance',
    friends: ['Roundy', 'Ethan'],
    greeting: function() {
      console.log('Hello, Lance')
    }
  }
]

// console.log(objArr[0].name)
// console.log(objArr[2].friends[1])
// objArr[1].greeting()


// *** "FOR IN" LOOPS *** //
let superhero = {
  name: "Batman",
  secretIdentity: "Bruce Wayne",
  car: "Batmobile",
  sidekick: "Robin"
}

// for (let key in superhero) {
//   console.log('key: ', key)
//   console.log(superhero[key])
// }



// *** CALLBACKS *** //

// What datatypes can we pass into a function as a parameter?
// ANY OF THEM! Including.......... FUNCTIONS!

// What is a callback?
// A pattern where a function is passed into another function as an argument.

function funky(cb) {
  cb()
}
funky(function() {
  console.log('hey there im a callback')
})

function callbackExample() {
  console.log('hey im the example')
}
funky(callbackExample)

// DRY CODE (Don't Repeat Yourself)

// BAD WAY:
let addTotal = 0;
function addFn(num) {
  addTotal += num
  return addTotal
}
addFn(7)
addFn(19)

let subtractTotal = 10;
function subtractFn(num) {
  subtractTotal -= num
  return subtractTotal
}
subtractFn(3)
subtractFn(2)

// BETTER WAY:
let total = 0
function calculator(num, cb) {
  total = cb(total, num)
  return total
}
function add(currentTotal, number) {
  return currentTotal + number
}
function subtract(currentTotal, number) {
  return currentTotal - number
}
calculator(100, add)
calculator(10, subtract)



// *** TERNARY *** //

// Review if/else statements
let age = 34

if (age >= 21) {
  console.log('You can drink')
} else {
  console.log('You have to wait')
}

// You can write the same thing, with less typing!

// 1. condition to check, followed by a question mark - ?
// 2. whatever comes after the question mark is the if part of the if statement
// 3. follow the if part with a colon - :
// 4. whatever follows the colon is the 'else' portion of the if statement

age >= 21 ? console.log('you can drink') : console.log('you have to wait')

if (age < 16) {
  console.log('bikes are the way to go!')
} else if (age <= 18) {
  console.log('you cant vote')
} else {
  console.log('youre an adult. woopdi doo')
}

age < 16 ? (
  console.log('bikes')
  ) 
  : 
  age <= 18 ? (
    console.log('no votes')
    ) 
    : 
    console.log('adulting. boo.')