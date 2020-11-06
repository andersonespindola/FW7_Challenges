const dataBase = require('../db/index')

const totalRepository = dataBase.reduce((accumulator, currentValue) =>
    accumulator + currentValue.public_repos, 0
)

console.log(totalRepository)