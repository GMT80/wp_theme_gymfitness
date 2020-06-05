jQuery(document).ready(function($) {
    // Menu responsive
     $('#menu-main-navigation').slicknav({
         // appendTo : '.site-header'
     });

     // Run bxSlider
    $('.testimonials-list').bxSlider({
        controls: false,
        mode: 'fade'
    });

    // When the page is ready add the fixed menu if position is greater than 300pc
    const headerScroll = document.querySelector('.navigation-bar');
    const rect = headerScroll.getBoundingClientRect();
    const topDistance = Math.abs(rect.top);

    fixedMenu(topDistance);    

});

window.onscroll = () => {
    let scroll = window.scrollY;

    fixedMenu(scroll);
}

// Adds a fixed menu on top
function fixedMenu(scroll) {

    const headerScroll = document.querySelector('.navigation-bar');
    const documentBody = document.querySelector('body');

    if (scroll > 300) {
       documentBody.classList.add('ft');
       headerScroll.classList.add('fixed-top'); 
    } else {
       documentBody.classList.remove('ft');
       headerScroll.classList.remove('fixed-top'); 
    }
  }