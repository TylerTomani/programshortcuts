const shortcuts = document.querySelectorAll('.shortcut-txt')

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()

    if(!isNaN(letter)){
        const intLetter = parseInt(letter)
        if(shortcuts && intLetter < shortcuts.length){
            shortcuts[intLetter - 1].focus()
        }
    }
})