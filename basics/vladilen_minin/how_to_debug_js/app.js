const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const output = document.querySelector('#output')

function getInputValues() {
    const value1 = parseInt(num1.value)
    const value2 = parseInt(num2.value)
    return [value1, value2]
}

function addHandler() {
    // debugger
    const values = getInputValues()
    const result = values[0] + values[1]
    displayResult(result)
}

function subHandler() {
    // debugger
    const values = getInputValues()
    const result = values[0] - values[1]
    displayResult(result)
}

function displayResult(result) {
    output.closest('.card').style.display = 'block'
    output.innerHTML = `Result: ${result}`
    console.trace()  // Посмотреть как проходили вызовы
}

console.log(addBtn, subBtn, output)

addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)