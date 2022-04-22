let button = document.querySelector('button')
const buttons = document.querySelectorAll('button')
button.addEventListener('click', () => {
    console.log('!')
})

for (var i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.onclick = function() {
        alert(button.id);
    }
}

