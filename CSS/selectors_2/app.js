const activeLink = document.querySelector('.links :last-child')
activeLink.addEventListener('contextmenu', () => {
    console.log('context, event was wrote to sessionStorage')
    sessionStorage['event'] = Date().toLocaleString()
})