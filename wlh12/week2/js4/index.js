// *** CONTEXT AND THE "THIS" KEYWORD *** //

// WHAT IS THIS?
// Objects are the building blocks of Javascript. There's a special object available in Javascript called "this".
// The value of the "this" keyword is some object.
// The value of the "this" keyword is decided based on how and where the code is being executed.

// DEFAULT CONTEXT
// By default, "this" refers to the global object. In the case of browsers, this means the "window" object. In node.js, it's a special global object.

function globalWindow() {
  // console.log('something')
  // console.log(this === window)
}

globalWindow()

var number9 = 9
// console.log(window)
// console.log(window.number9)
// console.log(this.number9)

// IMPLICIT CONTEXT

var name = 'Jonathan'
// console.log(window)
function introduceSelf() {
  if (this === window) {
    console.log('this equals the window')
  } else {
    console.log('what is this?', this)
  }
  return 'Hello my name is ' + this.name
}

// introduceSelf()

let user = {
  name: 'Aaron',
  age: 27,
  favoriteColor: 'green',
  introduceSelf: function () {
    if (this === window) {
      console.log('this equals the window')
    } else {
      console.log('what is this?', this)
    }
    return 'Hello my name is ' + this.name
  }
}

let user2 = {
  name: 'Josh',
  age: 28,
  favoriteColor: 'yellow',
  introduceSelf: introduceSelf
}

// user.introduceSelf()
// user2.introduceSelf()

// EXPLICIT CONTEXT

// CALL & APPLY
// Both .call and .apply will invoke the function immediately, and they will give explicit context to the "this" keyword.
// The first argument passed in to both .call and .apply will be the object we want to be the context of "this".
// The only difference between .call and .apply is HOW the arguments of the function are passed in.

const calculateTotal = function (tax, shipping) {
  return this.price * (1 + tax) + shipping
}

const product = {
  name: 'shoes',
  price: 60
}

// calculateTotal(0.076, 5)  <-- NaN

const totalWithCall = calculateTotal.call(product, 0.076, 6)

const totalWithApply = calculateTotal.apply(product, [0.076, 8])

// console.log(totalWithApply)

// BIND
// Bind is another way to explicitly give context to "this"
// .bind will "bind" context to "this", but instead of invoking the function immediately, it will return a new function that can be invoked later.

const calculateTotalBound = calculateTotal.bind(product)

// calculateTotalBound(0.076, 8)



// *** CLASSES! *** //

// classes are a blueprint for creating Objects.

class Robot {
  // constructor is a key word - it creates the object itself
  constructor(name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
  }
  // Methods go outside the constructor
  // Methods won't be placed on the actual object.
  beep() {
    return this.name + ' says beep boop'
  }
}

// We use the "new" keyword to create a new instance of our class. The object created with the "new" keyword IS the context of "this"

const newRobot = new Robot('R2D2', 'white', 'beeping')
// console.log(newRobot)
newRobot.beep()
const robot2 = new Robot('C3P0', 'gold', 'complaining')
// console.log(robot2)

// The 'beep' method does not belong to newRobot or to robot2. It is not on either object. BUT we can invoke it because it belongs to the Robot class prototype. Every instance of Robot has access to the method.

// Classes can extend from other classes, meaning they inherit their prototype methods and properties

class Terminator extends Robot {
  constructor(name, color, superpower, weapon) {
    // super invokes the constructor method from the class we're extending from. In this case, Robot:
    super(name, color, superpower)
    this.weapon = weapon
    this.numberOfKills = 0
    this.peopleKilled = []
  }

  introduceSelf() {
    return super.beep() + ". I'll be back."
  }

  kill(name) {
    this.numberOfKills++
    this.peopleKilled.push(name)
    return `${this.name} killed ${name} with his ${this.weapon}. Kill tally: ${this.numberOfKills}`
  }
}

const termy = new Terminator('T900', 'chrome', 'Saving Sarah Conner', 'smile')
termy.kill('Jonathan')
termy.introduceSelf()
termy.kill('Aaron')



// *** ARROW FUNCTIONS (THE SEQUEL) *** //

function notArrowFunction() {
  console.log(this)
}

let arrowFunction = () => {
  console.log(this)
}

let arrowFunction2 = () => console.log(this)

// =====>>>> SO LIKE, WHAT ARE THE DIFFERENCES? EH?\

// notArrowFunction() // "this" is the Window
// arrowFunction() // "this" is the Window

let someObj = {
  regularFn: notArrowFunction,
  arrowFn: arrowFunction
}

someObj.regularFn() // "this" = someObj
someObj.arrowFn() // "this" = Window
