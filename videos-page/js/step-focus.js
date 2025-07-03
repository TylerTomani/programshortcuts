export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const body = document.querySelector('body')
        
    addEventListener('keydown', e => {
        let key = e.key
        let keyCode = e.keyCode
        if(key === '32'){
             e.preventDefault()
        }
        if(!isNaN(key)){
            
            // console.log(intlet)
            let intlet = parseInt(key)
            intlet -= 1
            console.log(intlet)
            if(stepTxts.length == 0) return
            stepTxts[intlet]?.focus()
            // stepTxts[intlet].scrollIntoView({behavior: 'smooth', block: 'center'})
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
