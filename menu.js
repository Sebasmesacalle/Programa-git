const close = document.querySelector('.close');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(close)

close.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != close){
        menu.classList.toggle("spread")
    }
  
})