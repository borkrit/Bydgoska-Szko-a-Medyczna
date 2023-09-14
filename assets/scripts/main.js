let imgBlock = document.querySelectorAll('.direction__item .img');
if( window.outerWidth > 426){
    imgBlock.forEach(item=>{
        console.log(item);
        item.addEventListener('mousemove',()=>{
            if(!item.classList.contains('active')){
                const setClass =()=>{
                    item.classList.add('active')
                }
        
                setTimeout(setClass,300);
        
                clearTimeout(setClass)
            }
            
        })
        
    
        item.addEventListener('mouseleave',()=>{
            item.classList.remove('active')
        })
    })
}


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