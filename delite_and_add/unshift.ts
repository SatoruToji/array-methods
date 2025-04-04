export {}

declare global {
    interface Array<T> {
        myunshift(item: T[]): number
    }
}

Array.prototype.myunshift = function <T>(...item: T[]):number {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + item.length] = this[i]
    }
    for (let j = 0; j < item.length; j++) {
        this[j] = item[j]
    }
    return this.length
}

const nums = [1, 2, 3] 
console.log('before: ', nums)
// @ts-ignore
console.log('result: ', nums.myunshift('A'))
console.log('after: ', nums)
