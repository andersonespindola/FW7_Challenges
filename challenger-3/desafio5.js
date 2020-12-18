const database = require('./db/index')

const products = database.product

const colors = products.colors.map(color => color)

const sizes = colors.map(size => size.sizes)

const quantity = sizes.map(size => {
  const teste = size.reduce((acc, cur) => {
    const hasKey = acc.hasOwnProperty(cur.size)

    const stock = hasKey ? [...acc[cur.size], cur.stock] : [cur.stock]

    return {
      ...acc,
      [cur.size]: stock
    }
  }, {})
  console.log(teste)
})
