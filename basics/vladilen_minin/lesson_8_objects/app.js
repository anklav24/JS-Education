const person = {
    name: 'Alex',
    age: 28,
    isProgrammer: true,
    languages: ['ru', 'en'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('Greet from a person')
    }
}

console.log(person.name)
console.log(person.age)
console.log(person['complex key'])
console.log(person['key_4'])
console.log(person.key_4)
person.greet()

console.log('')
console.log('Before')
console.log(person)

console.log('After')
person.age++
person.languages.push('by')
delete person['key_4']
console.log(person)

// Old way
// const name = person.name
// const age = person.age
// const languages = person.languages
// New way is Destructuring assignment
// Деструктуризация
console.log('')
console.log('Destructuring assignment')
const {name, age, languages} = person
console.log(name, age, languages)

// Можем создавать псевдонимы
const {name1, age: personAge, languages1} = person
console.log(name1, personAge, languages1)

console.log('')
console.log('OLD WAY')
// Опасен этот цикл. Он можеть заходить в прототип
for (let key in person) {
    if (person.hasOwnProperty(key))
        console.log(key)
    console.log(person[key])
}

console.log('')
console.log('NEW WAY')
Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`))

console.log('')
console.log('CONTEXT')
const person_context = {
    name: 'Alex',
    age: 28,
    isProgrammer: true,
    languages: ['ru', 'en'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('Greet from a person')
    },
    info() {
        console.log(this)
        console.info('Info about a person name', this.name)
    },
}

person_context.info()

console.log('')
console.log('CONTEXT Example')
const logger = {
    keys() {
        console.log('Object Keys', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => console.log(`${key}: ${this[key]}`))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-------start--------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('-------------')
            }
        })
        if (bottom) {
            console.log('------end-------')
        }
    }
}

// Обычные функции создают свой контекст, а стрелочные нет. Аналогия с областью видимости?

let bound = logger.keys.bind(logger)
bound()

bound = logger.keys.bind(person)
bound()

logger.keys.call(person)
logger.keysAndValues.call(logger)

console.log('')
console.log('withParams')
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])

