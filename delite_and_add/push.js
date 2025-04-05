const animals = ['pigs', 'goats', 'sheep']
// animals.push('cows')
// console.log(animals)

Array.prototype.mypush = function (...elements) {
    for (let i = 0; i < elements.length; i++) {
        this[this.length + i] = elements[i]
    }
    return this.length
}

console.log(animals.mypush('pivo'))
console.log(animals)
