const cars = ['mazda', 'ford', 'bmw', 'mercedes']
const people = [
    {name: 'Alex', budget: 4200},
    {name: 'Pit', budget: 4400},
    {name: 'John', budget: 3200}
]
const fib = [1, 1, 3, 5, 8, 13]
console.log(cars)

// Method
cars.push('Reno')  // At the end
console.log(cars)

cars.unshift('Volga') // In the beginning
console.log(cars)

const car1 = cars.pop()
console.log(car1)
console.log(cars)

const car2 = cars.shift()
console.log(car2)
console.log(cars)

console.log('')
console.log('Reverse:')
cars.reverse()
console.log(cars)

// Task 1
const text = 'Hi, we are learning Java Script'
const reverseText = text.split(',')
console.log(reverseText.reverse().join())

console.log('indexOf', cars.indexOf('bmw'))

console.log('')
const index = people.findIndex(function (people) {
    return people.budget === 3200
})
console.log('findIndex', index)
console.log('findIndex', people[index])

console.log('')
const person = people.find(function (person) {
    return person.budget === 3200
})
console.log('find', person)

let findedPerson
for (const person of people) {
    console.log(person)
    if (person.budget === 3200)
        findedPerson = person
}
console.log('findedPerson', findedPerson)

// Упрощаем до стрелочной функции
console.log("As arrow function. It's the same as one above")
// lambda function?
const person_arrow = people.find(person => person.budget === 3200)
console.log('find with arrow function', person_arrow)

console.log('includes', cars.includes('mazda'))

const upperCaseCars = cars.map(car => car.toUpperCase())
console.log('map', upperCaseCars)  // map returns a new array

console.log('')
const pow2Fib = fib.map(num => num ** 2)
console.log('origin array', fib)
console.log('pow2Fib map', pow2Fib)

console.log('')
const  pow2 = num => num ** 2
const pow2Fib2 = fib.map(pow2)
console.log(pow2Fib2)

console.log('')
const sqrt = num => Math.sqrt(num)
const powFib3 = fib.map(pow2).map(sqrt)
// const powFib3 = fib.map(pow2).map(Math.sqrt)  // or just
console.log(powFib3)

const filtered_fib = pow2Fib.filter(num => num > 20)
console.log(filtered_fib)

// debugger
const allBudget = people
    .filter(person => person.budget > 3200)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
