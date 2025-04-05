const nums = [1, 2, 3]
// const firstElement = array1.shift()

// console.log(array1)
// console.log(firstElement)

Array.prototype.myshift = function () {
    if (this.length === 0) return undefined
    const firstElement = this[0]
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i]
    }
    this.length = this.length - 1
    return firstElement
}

console.log('before: ', nums)
console.log('result: ', nums.myshift())
console.log('after:', nums)
