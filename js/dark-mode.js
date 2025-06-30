addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(key === 'k' && e.shiftKey && e.metaKey){
        console.log('yes')
        const body = document.querySelector('body')
        body.classList.toggle('dark-mode')
         
    }
});