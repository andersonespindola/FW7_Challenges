const database = require('./db/index')

const animals = database.animals

const panda = 'Panda'

const ordenedAnimals = [...new Set([animals[0], panda, ...animals])]

console.log(ordenedAnimals)