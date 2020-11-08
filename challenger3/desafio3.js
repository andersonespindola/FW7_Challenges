const database = require('./db/index')

const fruits = database.fruits

const noRepeatFruits = fruits.map(item => item).filter((value, index, self) => self.indexOf(value) === index)

console.log(noRepeatFruits)