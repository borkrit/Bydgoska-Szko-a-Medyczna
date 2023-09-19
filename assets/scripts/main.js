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

const itemLinks = document.querySelectorAll('.direction__item-link .img');
function changeCursorStyle(event) {
    
    if (event.target !== cursor) {
        let x = event.pageX;
        let y = event.pageY;
        cursor.style.display = 'flex';
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
    }
}
function hiddenCursor(item){
    cursor.style.display = 'none';

    item.classList.add('out')
    setTimeout(()=>{
        item.classList.remove('out')
    },500);
    
}

itemLinks.forEach(itemLink => {
    itemLink.style.cursor = 'none';
    
    itemLink.addEventListener('mousemove', (event) => {changeCursorStyle(event);

    });
   
    itemLink.addEventListener('mouseleave', ()=>hiddenCursor(itemLink));

   

    return () => {
        itemLink.removeEventListener('mousemove', (event) => {

            changeCursorStyle(event);

        });
        itemLink.removeEventListener('mouseleave', ()=>hiddenCursor(itemLink));
    }
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

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const acceptCheckbox = document.getElementById('accept');
const acceptC = document.querySelector('.custom-checkbox');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    if (nameInput.value.trim() === '' ) {
        errorText(nameInput,'Imię')
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        errorText(emailInput,'Email')
        return;
    }

    if (!acceptCheckbox.checked) {
        errorText(acceptC,'checkbox')
        return;
    }

    form.submit(); 
});

function errorText(item,text){
    let block = document.createElement('p')
    item.classList.add('error');
    if(text == 'email' || text == 'Imię'){
        block.innerText = 'Napisz prawidlowe '+ text;

    }else{
        block.innerText = 'Wyraż zgodę na przetwarzanie danych';

    }
    item.after(block)

    setTimeout(()=>{
        item.classList.remove('error');
        block.remove()
    },3000)
}