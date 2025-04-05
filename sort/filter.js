const foot = ['banana', 'carrot', 'pear', 'cabbage', 'apple', 'potato']
//const test = foot.filter((word) => word.length > 5)
//console.log(test)
//const test2 = foot.filter((a) => a[1] === 'a')
//console.log(test2)


Array.prototype.myfilter = function(fn) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		if(fn(this[i], i, this)) {
			result.push(this[i])
		}
	}
	return result
}

console.log(foot.myfilter((item) => item[3] === 'a' ))
