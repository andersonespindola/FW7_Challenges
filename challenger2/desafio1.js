const dataBase = require('../db/index')

const sortArray = dataBase.map(people => people.name).sort()

console.log(sortArray)