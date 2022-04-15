// Variables
// camelCase

var name = 'Vladilen'  // Deprecated
const lastName = 'Minin'  // Immutable
let age = 28  // Mutable
age = 27

console.log(lastName, age)

let isProgrammer = false
isProgrammer = true
console.log(isProgrammer)

const _private = 'private'
const $ = 'some value'

// const if = 'test' // error

const withNum5 = '5'
// const 5withNum5 = '5'  // error

// Мутирование
console.log('Name: ' + name)

// const fullName = prompt("Input name: ")
// console.log('Full name: ' + fullName)

// Операторы

let currentYear = 2022
let birthDay = 1993

const newAge = currentYear - birthDay
console.log('newAge: ', newAge)

const a = 10
const b = 5
let c = 0
console.log('a + b: ', a + b)
console.log('a - b: ', a - b)
console.log('a * b: ', a * b)
console.log('a / b: ', a / b)
console.log(currentYear++)  // Выводит в консоль и потом увеличивает значение
console.log(++currentYear)  // Увеличивает значение и выводит в консоль

c += a
c -= a
console.log(c)

// Типы данных

const idProgrammer = true
const name1 = 'Vladlen'
const age1 = 26
let x
// null

console.log('Data types:')
console.log(typeof idProgrammer)
console.log(typeof name1)
console.log(typeof age1)
console.log(typeof x)
console.log(typeof null)  // Возвращает не то что нужно. Баг, фича?

// Приоритет операторов
const fullAge = 26
const birthYear = 1993
const currentYear1 = 2020
const isFullAge = currentYear1 - birthYear >= fullAge
console.log(isFullAge)

// Условные операторы
console.log('')
console.log('Conditions:')
const courseStatus = 'pending'

if (courseStatus === 'ready') {
    console.log('Course ready!')
} else if (courseStatus === 'pending') {
    console.log('Course not ready!')
} else {
    console.log('Not really')
}

const num1 = 42  // number
const num2 = '42'  // string

console.log('num1 == num2:', num1 == num2)  // Сравнивает по значению а типы приводит друг к другу, надежней ===

const isReady = true
if (isReady) {
    console.log('All done!')
} else {
    console.log('All goes wrong')
}

// Тернарное выражение
console.log('')
console.log('Тернарное выражение')
isReady ? console.log('All done') : console.log('All goes wrong')

// Логические операторы
// Google it Logical Operators
console.log('')
console.log('Logical Operators')
const bl1 = !true
const bl2 = !!true
console.log('!true: ', bl1, '!!true: ', bl2)

// Functions
console.log('')
console.log('Functions:')

function calculateAge(year) {
    return 2022 - year
}
console.log(calculateAge(1993))
console.log(calculateAge(1933))
console.log(calculateAge(1983))

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    console.log('logInfoAbout: ' + name + ' ' + age)
}
logInfoAbout('Alex', 1993)
logInfoAbout('Lena', 1998)

// Arrays
console.log('')
console.log('Arrays:')
const cars = ['Mazda', 'Mersedes', 'BMW']
// const cars = new Array('Mazda', 'Mersedes', 'BMW')  // То что под капотом происходит
console.log(cars)
console.log(cars[3])  // undefined нет такого элемента
cars[0] = 'Porsche'
cars[cars.length] = 'Last Element' // Обратиться к последнему элементу
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars.length)

// Loops
console.log('')
console.log('Loops:')
const cars1 = ['Mazda', 'Mersedes', 'BMW', 'Last']
for (let i = 0; i < cars1.length; i++) {
    const car = cars1[i]
    console.log(car)
}

// Удобнее синтаксис
for (let car of cars) {
    console.log(car)
}

// Objects
console.log('')
console.log('Objects:')
const person = {
    firstName: 'Alex',
    lastName: 'Lobanov',
    year: '1993',
    languages: ['ru', 'en'],
    hasWife: true,
    greet: function () {  // Метод
        console.log('greet')
    }
}

console.log(person)
console.log(person.firstName)
console.log(person['year'])
person.isProgrammer = true
person.greet()
console.log(person)
