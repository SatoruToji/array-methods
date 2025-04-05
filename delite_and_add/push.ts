export {} // to make it a module

declare global {
    interface Array<T> {
        mypush(...item: T[]): number
    }
}

const animals: string[] = ['pigs', 'goats', 'sheep']

Array.prototype.mypush = function <T>(...item: T[]): number {
    const arrLength = this.length
    for (let i = 0; i < item.length; i++) {
        this[arrLength + i] = item[i]
    }
    return this.length
}

console.log(animals.mypush('lion'))
console.log(animals)
