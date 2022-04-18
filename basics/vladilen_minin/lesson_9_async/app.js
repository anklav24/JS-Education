// Event Loop
const timeout = setTimeout(() => {
    console.log('After timeout')
}, 1000)

// clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('After interval')
}, 1000)

// clearInterval(interval)

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay(() => console.log('After 2 seconds'), 2000)

function clearAll(interval, timeout) {
    clearInterval(interval)
    clearTimeout(timeout)
    console.log('Clear all')
}

setTimeout(clearAll(timeout, interval), 5000)

const delay_promise = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            // reject('Try to repeat')
        }, wait)
    })
    return promise
}

delay_promise(2500).then(() => {
    console.log('After 2 seconds from promise')
}).catch(err => console.log('Error:', err)).finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]))
getData().then(data => console.log('getData:', data))

console.log('')
console.log('A new way')

async function asyncExample() {
    try {
        await delay(3000)
        console.log('asyncExample')
        const data = await getData()
        console.log(data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally from async')
    }
}

asyncExample()

