// Вывидет true, если весь массив забит одними и теми же элементами
const names = ["Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee"]
console.log(names.every((item) => item === 'Azzan'))
const name = ["Azzam", 'Azzam', 'Azzam']
console.log(name.every((item) => item === 'Azzam'))
