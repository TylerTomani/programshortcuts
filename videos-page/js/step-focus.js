export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const body = document.querySelector('body')
        
    addEventListener('keydown', e => {
        let key = e.key
        if(!isNaN(key)){
            const intlet = parseInt(key)
            // console.log(intlet)
            // stepTxts[intlet - 1].scrollIntoView({behavior: 'smooth', block: 'center'})
            if(stepTxts.length == 0) return
            stepTxts[intlet - 1]?.focus()
        }
        if(key.toLocaleLowerCase() === 'm' && e.target.id != 'mainShorcutPageContainer'){
            // console.log(mainShorcutPageContainer)
            body.scrollTo(0, 0)
    

             
        }
    })
    stepTxts.forEach(el => {
        // console.log(el)
    })
}

// stepFocus()