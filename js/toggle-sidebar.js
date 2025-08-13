const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')
const sideBarUlContainer = document.querySelector('.side-bar-ul-container')
const listItemsSideBar = document.querySelectorAll('.side-bar-content > .side-bar > ul > li a')
let iItemIndex = 0
function toggleSideBar(){
    sideBar.classList.toggle('hide')
    
}
function toggleActive(currentTarget){
    sideBar.classList.toggle('active')
    
}
// toggleSideBar()
if(sideBarBtn && sideBar){
    [sideBarBtn,sideBar,sideBarUlContainer].forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            e.stopPropagation()

            if(e.currentTarget.classList.contains('side-bar')){
                toggleActive(e.currentTarget)
                return
            }
            toggleSideBar()
        })
    })
    sideBarBtn.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase() 
        if(letter == 'enter' ){   
            console.log(sideBar)
            toggleSideBar()
            // sideBar.classList.toggle('hidden')
        }
    })

    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        // if(letter == 'a'){
        //     // if(!sideBar.classList.contains('active')){
        //     //     sideBar.classList.add('active')
        //     // }
        //     // if(!e.shiftKey){
        //     //     iItemIndex = (iItemIndex + 1 ) % listItemsSideBar.length
        //     // } else {
        //     //     iItemIndex = (iItemIndex - 1 + listItemsSideBar.length) % listItemsSideBar.length
        //     // }
        //     // listItemsSideBar[iItemIndex].focus()


        // }
    })
    // listItemsSideBar.forEach((el,i,arr) => {
    //     el.addEventListener('focus', e => {
    //         iItemIndex = [...arr].indexOf(e.target)

    //     });
    // })   
    
}