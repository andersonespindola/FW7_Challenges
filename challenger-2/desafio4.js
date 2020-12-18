const dataBase = require('./db/index')

const biggestName = dataBase.reduce((accumulator, currentValue) =>
    accumulator.name.length > currentValue.name.length ? accumulator : currentValue
)

console.log(biggestName.name)