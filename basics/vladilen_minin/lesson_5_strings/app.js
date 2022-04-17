function helloWorld(text) {
    // debugger
    return text
}

const text = 'Hello, world!'
console.log(helloWorld(text))

const name = 'Vladilen'
const age = 26

const output1 = 'Hi my name is ' + name + ' and my age is ' + age + ' years.'
console.log(output1)
// Через обратные кавычки мы можем не использовать конкатенацию через знак +
// Слизано с bash?
const output2 = `Hi my name is ${name} and my age is ${age} years.`
console.log(output2)

const output3 = `function: ${helloWorld(text)}`
console.log(output3)

const output4 = `ternary statement: ${age < 30 ? 'A' : 'B'}`
console.log(output4)

// Многострочные строки
const output5 = `First string
Second string
Third string
`
console.log(output5)

console.log('')
console.log('String methods')
const test_string = 'qwerty'
// new String(test_string)  // Чтобы работали методы JS неявно делает это
console.log('length:', test_string.length)
console.log('toUpperCase:', test_string.toUpperCase())
console.log('toLowerCase:', test_string.toLowerCase())
console.log('charAt:', test_string.charAt(2))
console.log('indexOf:', test_string.indexOf('wer'))
// Если подстрока не найдена в строке, то по соглашению функцию отдаст -1
console.log('indexOf:', test_string.indexOf('123'))
console.log('startsWith:', test_string.startsWith('qwer'))
console.log('startsWith:', test_string.toUpperCase().startsWith('qwer'))
console.log('endsWith:', test_string.endsWith('qwer'))
console.log('repeat:', test_string.repeat(3))

const string_with_spaces = '    space    '
console.log('trim:', string_with_spaces.trim())
console.log('trimStart:', string_with_spaces.trimStart())
console.log('trimEnd:', string_with_spaces.trimEnd())

console.log('')
console.log('Example 1')
function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Not yet born'
    }
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
    // return 'Info about a person.'
}

const personName = 'Alex'
const personAge = 28

const output = logPerson`Name: ${personName}, Age: ${personAge}`
console.log(output)