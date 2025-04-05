export {}

declare global {
	interface Array<T> {
		myfilter(fn: (item: T, index: number, array: T[]) => boolean): T[]
	}
}

Array.prototype.myfilter = function<T>(fn: (item: T, index: number, array: T[]) => boolean): T[] {
	const result = []
	for(let i = 0; i < this.length; i++) {
		if(fn(this[i], i, this)) {
			result.push(this[i])
		}
	}
	return result
}


const foot = ['banana', 'carrot', 'pear', 'cabbage', 'apple', 'potato']
console.log(foot.myfilter((item) => item[1] === 'a'))
