console.log('')
console.log('Numbers:')
const num = 42  // Integer
const float = 42.42  // Float
const pow = 10e3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)  // Максимальное значение с которым можно оперировать в Java Scrips
console.log('Wrong', Number.MAX_SAFE_INTEGER + 10)  // Уже не верный результат
console.log(Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)  // Максимальное значение с которым можно оперировать в Java Scrips
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('+Inf', Number.POSITIVE_INFINITY)
console.log('-Inf', Number.NEGATIVE_INFINITY)
console.log('Inf', 1 / 0)  // O_o?

console.log('NaN', Number.NaN)  // Not a number
console.log('typeof NaN:', typeof (Number.NaN))  // Но тип в итоге number O_o?
const weird = 2 / undefined
console.log('isNaN', isNaN(weird))
console.log('is infinity Infinity', isFinite(Infinity))
console.log('is infinity 42', isFinite(42))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(+stringInt + 2)  // Приведение к целому числу

console.log(parseInt(stringFloat) + 2)  // Так отсечётся целая часть
console.log(parseFloat(stringFloat) + 2)

console.log('')
console.log('Проблемы с дробной частью')
console.log(0.4 + 0.2)  // O_o?
console.log((2 / 5) + (1 / 5))  // O_o?
console.log(parseFloat((0.4 + 0.2).toFixed(1)))

console.log('')
console.log('BigInt')
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)  // Максимальное значение с которым можно оперировать в Java Scrips
console.log(typeof 90000000000000000000000000000000000n)
console.log(90000000000000000000000000000000000n)
// console.log(10n - 4)  // Error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n)  // Теряем дробную часть

console.log('')
console.log('Math:')

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 2))
console.log(Math.abs(-42))
console.log('Math.min: ', Math.min(-42, 1, 2, 42))
console.log('Math.max: ', Math.max(-42, 1, 2, 42))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))

console.log(Math.random())

// 4 Example
function getRandomBetween(min, max) {
    // debugger  // <-- тут отладчик остановится
    // Отладчик работает только если открыты инструменты разработки
    // Иначе браузер проигнорирует точки останова
    // Google Chrome -> F12 -> Sources
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(10, 42))
