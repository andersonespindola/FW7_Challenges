const database = require('./db/index')

const words = database.words

const palindrome = words.filter(word => {
    const minusculeWord = word.toLowerCase()
    return minusculeWord == minusculeWord.split('').reverse().join('');
})

console.log(palindrome)