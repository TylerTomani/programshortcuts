export function stepFocus(){
    const stepTxts = document.querySelectorAll('.step-txt')
    const body = document.querySelector('body')
        
    addEventListener('keydown', e => {
        let key = e.key
        if(!isNaN(key)){
            const intlet = parseInt(key)
            console.log(intlet)
            // stepTxts[intlet - 1].scrollIntoView({behavior: 'smooth', block: 'center'})
            if(stepTxts.length == 0) return
            stepTxts[intlet - 1].focus()
        }
        if(key.toLocaleLowerCase() === 'm' && e.target.id != 'mainShorcutPageContainer'){
            console.log(mainShorcutPageContainer)
           body.scrollTo({
            top: 0,        // Specifies the vertical scroll position (0 for the very top)
            left: 0,       // Specifies the horizontal scroll position (0 for the very left)
            behavior: 'smooth' // Optional: Provides a smooth scrolling animation
            });
        // what the fuck !!!!???? why won't it scroll to top of page ???????!!!!!!!!!!!!
        // Find error

             
        }
    })
    stepTxts.forEach(el => {
        // console.log(el)
    })
}

// stepFocus()