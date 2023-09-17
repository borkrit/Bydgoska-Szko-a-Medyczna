const header = document.querySelector('.header__container');



document.addEventListener('scroll',()=>{
    console.log( window.scrollY )
    if(window.scrollY > 20){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})

const cursor = document.querySelector(".cursor");

const itemLinks = document.querySelectorAll('.direction__item-link');
function changeCursorStyle(event) {
    let x = event.pageX;
		let y = event.pageY;
    cursor.style.display = 'flex';
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
}
function hiddenCursor(){
    cursor.style.display = 'none';
}

itemLinks.forEach(itemLink => {
    itemLink.style.cursor = 'none'
    itemLink.addEventListener('mousemove', changeCursorStyle);

    itemLink.addEventListener('mouseleave', hiddenCursor);

    
});
// menu 
let menuHamburger = document.querySelector('.mobile__menu-icon');
let mobileMenu = document.querySelector('.mobile__wrapper');


menuHamburger.addEventListener('click',()=>{
    document.body.classList.toggle('hidden')
    mobileMenu.classList.toggle('active')
    menuHamburger.classList.toggle('active')
})

// set active menu 

let menuItems = document.querySelectorAll('.menu-list li a');
let url = window.location.href

menuItems.forEach((item)=>{
if(item.href === url ){
    item.classList.add('active')
}   
})

// dropdown mobile menu 

let dropdownBtn = document.querySelectorAll('.mobile__item.dropdown');


dropdownBtn.forEach(el=>{
    el.addEventListener('click',()=>{
        el.classList.toggle('active')
        
        dropdownBtn.forEach(item=> {
            if(item !== el){
                item.classList.remove('active')
                el.classList.toggle('active')
            }else{
                el.classList.toggle('active')
            }
            
        })
})

})