export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    addEventListener('keydown', e => {
        let key = e.key
        if(!isNaN(key)){
            const intlet = parseInt(key)
            console.log(intlet)
            // stepTxts[intlet - 1].scrollIntoView({behavior: 'smooth', block: 'center'})
            stepTxts[intlet - 1].focus()
        }
    })
    stepTxts.forEach(el => {
        // console.log(el)
    })
}

// stepFocus()