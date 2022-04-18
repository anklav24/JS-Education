const h1 = document.getElementById('hw1')
const header = document.getElementById('hw2')
console.dir('header:', header)  // Можем вывести объект в консоль
console.log('header:', header)  // Можем вывести объект в консоль
console.log('header.id:', header.id)
console.log('header.innerText:', header.innerText)
console.log('header.textContent:', header.textContent)
console.log('header.textContent:', header.textContent)
header.textContent = 'Changed from JavaScript'

function addStylesTo(node) {
    node.style.color = 'blue'
    node.style.textAlign = 'center'  // В CSS эти свойства будут писаться через дефис. text-align
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
}

setTimeout(() => {
    addStylesTo(header)
}, 2000)

addStylesTo(h1)

// Old way
// const heading2 = document.getElementsByTagName('h2')
// const heading2 = document.getElementsByClassName('h2-class')

// New way
// const heading2 = document.querySelector('h2')
const heading2 = document.querySelector('.h2-class')
console.log(heading2)
console.dir(heading2)

console.log('')
console.log('heading3')
const heading3 = heading2.nextElementSibling
console.dir(heading3)
console.log(heading3.textContent)

const h2List = document.querySelectorAll('h2')
console.log(h2List)
console.log(h2List[h2List.length - 1].textContent)

setTimeout(() => addStylesTo(heading2), 3000)
setTimeout(() => addStylesTo(heading3), 4000)

heading2.style.color = 'red'
heading3.style.color = 'green'

console.log('Events, e.g MDN Mouse Events')
h1.onclick = () => {
    console.log('click')
    if (h1.style.color === 'black') {
        h1.style.color = 'red'
    } else {
        h1.style.color = 'black'
    }
}
header.ondblclick = () => {
    console.log('double-click')
}

heading2.oncontextmenu = () => {
    console.log('contextmenu')
}

heading3.addEventListener('dblclick', () => {
    heading3.style.padding = '3rem'
})

const link = document.querySelector('a')
console.log(link)
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link:', event)
    const url = event.target.getAttribute('href')
    window.location = url
})