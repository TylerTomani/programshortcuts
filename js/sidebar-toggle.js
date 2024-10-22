const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')

// sideBarBtn.onClick = function(){
//     toggleSideBar()
// }
function toggleSideBar(){
    sideBar.classList.toggle('active')
}
[sideBarBtn, sideBar].forEach(el => {
    el.addEventListener('click', e => {
        if(e.target == sideBar){
            toggleSideBar()
        }
    })
})
sideBarBtn.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase() 
    if(letter == 'enter' ){   
        toggleSideBar()
    }
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'a'){
        toggleSideBar()
    }
    
    
})

