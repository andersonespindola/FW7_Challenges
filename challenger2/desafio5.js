const dataBase = require('./db/index')

const users = dataBase.map(user => ({
    name: user.name,
    repos: user.public_repos
})).filter(userFiltered => userFiltered.repos > 10).sort((a, b) => {
    return (a.repos < b.repos) - 1
})

console.log(users)