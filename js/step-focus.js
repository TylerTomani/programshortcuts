export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const mainShorcutPageContainer = document.getElementById('mainShorcutPageContainer')
        
    addEventListener('keydown', e => {
        let key = e.key
        if(!isNaN(key)){
            const intlet = parseInt(key)
            console.log(intlet)
            // stepTxts[intlet - 1].scrollIntoView({behavior: 'smooth', block: 'center'})
            stepTxts[intlet - 1].focus()
        }
        if(key.toLocaleLowerCase() === 'm' && e.target.id == 'mainShorcutPageContainer'){
            console.log('m')
            console.log(e.target)
            window.scrollTo(0,0)

             
        }
    })
    stepTxts.forEach(el => {
        // console.log(el)
    })
}

// stepFocus()