function stepFocus(){
    const stepTxt = document.querySelectorAll('.step-txt')
    addEventListener('keydown', e => {
        console.log(e.target)
    })
    stepFocus.forEach(el => {
        console.log(el)
    })
}

stepFocus()