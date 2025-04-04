const nums = [1, 2, 3]
// nums.unshift(4, 5)
// console.log(nums)

Array.prototype.myunshift = function (...item) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + item.length] = this[i]
    }
    for (let j = 0; j < item.length; j++) {
        this[j] = item[j]
    }
    return this.length
}

console.log(nums.myunshift(4, 5))
