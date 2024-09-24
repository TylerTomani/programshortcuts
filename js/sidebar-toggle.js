const sideBarBtn = document.querySelector('#sideBarBtn')
const sideBar = document.querySelector('.side-bar')

// sideBarBtn.onClick = function(){
//     toggleSideBar()
// }

sideBarBtn.addEventListener('click', e => {
        toggleSideBar()
})
sideBarBtn.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase() 
    if(letter == 'enter' ){   
        toggleSideBar()
    }
})

const toggleSideBar = function(){
    sideBar.classList.toggle('active')
}