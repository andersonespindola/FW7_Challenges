const dataBase = require('../db/index')

const sortArray = dataBase.map(array => ({
    nome: array.name,
    data: array.created_at
})).sort((a, b) => {
    return (a.data < b.data) - 1
})

console.log(sortArray)