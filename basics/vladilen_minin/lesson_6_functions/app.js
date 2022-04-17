console.log('Function declaration.')

function greet(name) {
    console.log(`Hi ${name}`)
}

greet('Alex')

console.log('')
console.log('Function Expression.')
const greet2 = function greet2(name) {
    console.log(`Hi ${name}`)
}
greet2('Alex')

console.log('')
console.log(typeof greet)  // Типо function нет, это для упрощения жизни?

console.dir(greet)

// Анонимные функции
console.log('')
console.log('Anonymous Functions:')
let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)  // There is the clearTimeout function
    } else {
        console.log(++counter)
    }
}, 500)

// Стрелочные функции
console.log('')
console.log('Arrow function expressions:')

function greet(name) {
    console.log(`Hi, ${name}!`)
}

// Эти две функции сверху и снизу делают одно и то же.

const arrow = (name) => {
    console.log(`Hi, ${name}!`)
}

const arrow_one_line = (name) => {
    console.log(`Hi, ${name}!`)
}

greet('Alex')
arrow('Alex')
arrow_one_line('Alex')

const pow2_1 = num => {
    return num ** 2
}
const pow2_2 = num => num ** 2
console.log(pow2_1(5))
console.log(pow2_2(5))

// Параметрые по умолчанию
console.log('')
console.log('Default parameters')
const sum = (a, b = a * 2) => a + b
console.log(sum(41, 1))
console.log(sum(41))

// Принять неограниченное количество параметров
// Оператор rest (...)
function sumAll(...all) {
    console.log('sumAll, rest parameter', all)
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

sumAll(1, 2, 3)

// Замыкания
console.log('')
console.log('Closures')

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Alex ')
console.log(logWithLastName('Last'))
console.log(logWithLastName('Two'))
