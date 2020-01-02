class Pinao {
  constructor(pinao, model) {
    this.make = pinao
    this.model = model
  }
  play = () => {
    console.log('You tickled the ' + this.make + ' ' + this.model + "'s ivories.")
  }
}
let piano1 = new Pinao('s', 'd')