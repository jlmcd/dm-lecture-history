module.exports = {
  randomHouse: (updateFn, nextPageFn) => {
    // generate a random number between 1 and 4
    const randomNum = Math.ceil(Math.random() * 4)

    // use that random num to assign a house
    const house = randomNum === 1 ? 'gryffindor' : randomNum === 2 ? 'hufflepuff' : randomNum === 3 ? 'slytherin' : 'ravenclaw'
    const mainColor = randomNum === 1 ? '#d3a625' : randomNum === 2 ? '#372e29' : randomNum === 3 ? '#EAEAEA' : '#E2E2E2'
    const secondaryColor = randomNum === 1 ? '#740001' : randomNum === 2 ? '	#ecb939' : randomNum === 3 ? '#2a623d' : '#000a90'
    updateFn({house, mainColor, secondaryColor})
    nextPageFn(`/house/${house}`)
  }
}