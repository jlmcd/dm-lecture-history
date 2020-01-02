module.exports = {
  randomHouse: (updateHouseInfo, historyPush) => {
    // generate a random num between 1 - 4
    const randomNum = Math.ceil(Math.random() * 4)

    // use the number to assign a house
    const house = 
      randomNum === 1 ? 'gryffindor'
      : randomNum === 2 ? 'hufflepuff'
      : randomNum === 3 ? 'slytherin'
      : 'ravenclaw'
    const mainColor = 
      randomNum === 1 ? '#740001' 
      : randomNum === 2 ? '#372e29' 
      : randomNum === 3 ? '#000000' 
      : '#000000'
    const secondaryColor = 
      randomNum === 1 ? '#d3a625' 
      : randomNum === 2 ? '	#ecb939' 
      : randomNum === 3 ? '#2a623d' 
      : '#0066e2'

      updateHouseInfo({house, mainColor, secondaryColor})
      historyPush(`/house/${house}`)
  }
}