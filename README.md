# Добавение и удаление 
## _push()_
Метод [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) добавляет элемент в **конец** массива и возвращает новую длину массива
```js
const names = ['eva', 'ivan']
console.log(names.push('oleg'))
// ['eva', 'ivan', 'oleg']
```
> Если элементов нет, метод сам создаст элемент и поместит в новый элемент значение.

## pop()
Метод [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) удаляет **последний** элемент массива и возвращает его.
```js
const names = ['eva', 'ivan']
console.log(names.pop())
// ivan
```

## shift()
Метод [`shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) удаляет **первый** элемент массива и возвращает его. 
```js
const names = ['eva', 'ivan']
console.log(names.shift())
// eva
```

## unshift()
Метод [`unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) добавляет элемент в **начало** массива.
```js
const names = ['eva', 'ivan']
names.unshift('oleg')
console.log(names)
// ['oleg', 'eva', 'ivan']
```

| method | description |
| ------ | ------ |
| push | добавит в конец ➕|
| pop | удалит с конца 🗑️|
| shift | удалит с начала 🗑️|
| unshift | добавит в начало ➕|

# Поиск 
## _indexOf()_
Метод [`indexOf(value, startSearch)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) возвращает индекс элемента (если он присутствует в массиве, иначе вернет `-1`).
```js
const names = ['eva', 'ivan', 'oleg', 'ivan']
console.log(names.indexOf('ivan'))
// 1
console.log(names.indexOf('ivan', 2))
// 3
```

> `startSearch` - индекс, с которого начнется поиск

## _find()_
Метод [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) возвращает 
**первый** значение если оно удовлетворяют условиям функции.
```js
const numbers = [3, 12, 6, 13, 44]
const even = (element) => element % 2 === 0

console.log(array.some(even))
// 12
```

> если метод `find()` найдет элемент с удовлетворяющим значением, поиск сразу же остновится, а метод вернет тебе первый элемент

## _some()_
Метод [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
``` js
const numbers = [1, 2, 3, 4, 5]
console.log((element) => element % 2 === 0)
// true
```

> Отдельное внимание разнице `some()` и `find()`

|                | find()  | some() |
| :------:         | :------:| :------: |
| если найдет:   |`value`|`true`|
| если не найдет:|`undefined`|`false`|
| отличия:       |если найдет: вернет эл. и сразу прекратит перебор|вернет bool в зависимости от поиска|


## _every()_ 
Метод [`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) вернет **true** если ***каждый*** элемент удовлетворяет условиям функции, иначе вернет **false**.
```js
const numbers = [12, 21, 51, 32]
const fn = (item) => item > 10

console.log(numbers.every(fn))
// true
```

# Редактирование
## _join()_
Метод [`join('str')`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) использует `'str'` чтоюы объединить элементы массива и возвращает **строку**
> example:
```js
const names = ['eva', 'ivan', 'oleg', 'ivan']
console.log(names.join(''))
// evaivanolegivan
console.log(names.join(', '))
// eva, ivan, oleg, ivan
```

## _reverse()_
Метод [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) переворачивает массив на 180 
```js
let nums = [1, 2, 3, 4, 5]
console.log(nums.reverse())
// [5, 4, 3, 2, 1]
```

## _from()_
Метод глобального объекта `Array` [`from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) создает массив из ***итерируемого*** объекта
> Example:
```js
let str = '2341'
let result = Array.from(str)
console.log(result)
// ['2', '3', '4', '1']

console.log(Array.from(str, (i) => Number(i)))
// [2, 3, 4, 1]
```

## _flat()_
Метод [`flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) "выравнивает" массив, метод принимает **двумерный/трёхмерный** массив, и возвращает обычный массив без вложенных массивов
> Example:
```js
let nums = [0, 1, [2, 3, 4, 5]]
console.log(nums.flat())
// [0, 1, 2, 3, 4, 5]

let nums2[0, 1, [2, [3, [4, 5]]]]
console.log(nums2.flat(infinity))
// [0, 1, 2, 3, 4, 5]
```
> Примечание: по умолчанию, `flat()` выравнивает двумерные массивы, потму что двумерные массивы соответствуют уровню глубины вложенности `1`

# Сортировка 
## _sort()_
Метод [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) ***переводит элементы массива в строки***, а потом (по умолчанию) сортирует их в ***алфовитном порядке*** 
> Example:
```js
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
console.log(month.sort())
// ['Apr', 'Aug', 'Dec', 'Feb', 'Jan', 'Jul', 'Jun', 'Mar', 'May', 'Nov', 'Oct', 'Sep']

let nums = [911, 32, 24, 54, 7, 8, 1]
console.log(nums.sort())

// [1, 24, 32, 54, 7, 8, 911]
```

> Another Example: 
```js
let nums = [1, 32, 24, 54, 7, 8, 911]
console.log(nums.sort((a, b) => a - b)) // > 0
// [1, 7, 8, 24, 32, 54, 911]

console.log(nums.sort((a, b) => b - a)) // < 0
// [911, 54, 32, 24, 8, 7, 1]
```

