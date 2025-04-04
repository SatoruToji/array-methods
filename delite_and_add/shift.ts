export {}

declare global {
    interface Array<T> {
        myshift(): T | undefined
    }
}

Array.prototype.myshift = function <T>(): T | undefined {
    if (this.length === 0) return undefined
    const firstElement = this[0]
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i]
    }
    this.length = this.length - 1
    return firstElement
}

const nums = [1, 2, 3]
console.log('before: ', nums)
console.log('result: ', nums.myshift())
console.log('after: ', nums)
