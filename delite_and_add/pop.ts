export {}

declare global {
    interface Array<T> {
        mypop(): T | undefined
    }
}

Array.prototype.mypop = function<T>(): T | undefined {
    if(this.length === 0) return undefined
    const lastElement = this[this.length - 1]
    this.length = this.length - 1
    return lastElement
}

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
console.log(plants.mypop())
console.log(plants)