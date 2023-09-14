// let imgBlock = document.querySelectorAll('.direction__item .img');
// // if( window.outerWidth > 426){
//     imgBlock.forEach(item=>{
//         console.log(item);
//         item.addEventListener('mousemove',()=>{
//             item.style.cursor = 'sss'
//         })
        
    
        
//     })
// // }
const cursor = document.querySelector(".cursor");

// Получаем все элементы с классом "direction__item-link"
const itemLinks = document.querySelectorAll('.direction__item-link');
// Функция для изменения стиля курсора при наведении
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

// Добавляем обработчик события "mouseenter" для каждого элемента
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
        if([...dropdownBtn].find(item=> {
            if(item !== el){
                item.classList.remove('active')
                el.classList.toggle('active')
            }else{
                el.classList.toggle('active')
            }
            
        })){
            
        }

    })

})