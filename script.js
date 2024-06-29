const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
// ham hien thi( thêm class vào modal để có display: flex)
function showTickets(){
    modal.classList.add('open')
}
// hàm gỡ classs open 
function closeTickets(){
    modal.classList.remove('open')
}
// lặp qua từng thẻ btn và nghe hàng vi
for(const buyBtn of buyBtns){

    buyBtn.addEventListener('click',showTickets)
}
// nghe hành vi click 
modalClose.addEventListener('click', closeTickets)

modal.addEventListener('click',closeTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
// end click buy
// đongs mo mobile menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;

    mobileMenu.onclick = function(){
        const isClose = header.clientHeight === headerHeight;
        if(isClose){
            header.style.height = 'auto';
        }else{
            header.style.height = null;
        }
    }


    // tự động đóng  khi chon menu

    const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        
    
        for( const menuItem of menuItems){
           
            menuItem.addEventListener('click',function(event){
                const isParrentMenu =  menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav') ;
                if(isParrentMenu){
                    event.preventDefault();
                }else{
                    header.style.height = null;
                    
                }
                
            } )
        }
    

















