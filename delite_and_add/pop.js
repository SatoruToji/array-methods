const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
// console.log(plants.pop())
// console.log(plants)

Array.prototype.mypop = function () {
    if (this.length === 0) return undefined
    const lastElement = this[this.length - 1]
    this.length = this.length - 1
    return lastElement
}

console.log('before: ', plants)
console.log('result: ',  plants.mypop())
console.log('after: ', plants)
