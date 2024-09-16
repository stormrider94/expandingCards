const panels = document.querySelectorAll('.panel')
/* this works  */
// panels.forEach((panel)=>{
//     panel.addEventListener('click',function(e){
//         removeActive()
//         e.target.classList.add('active')

//     })
// })

/*this also works */
panels.forEach(panel => {
    panel.addEventListener('click',function(){
        removeActive()
        panel.classList.add('active')
    })
})
function removeActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}