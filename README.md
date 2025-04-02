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

