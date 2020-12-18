const database = require('./db/index')

const colors = database.colors

const splitColors = colors.reduce((accumulator, currentValue) => {

    if (currentValue.isAvailable) {
        return {
            ...accumulator,
            availables: [...accumulator.availables, currentValue]
        }
    }

    if (!currentValue.isAvailable) {
        return {
            ...accumulator,
            unavailables: [...accumulator.unavailables, currentValue]
        }
    }
}, { availables: [], unavailables: [] })

console.log(splitColors)