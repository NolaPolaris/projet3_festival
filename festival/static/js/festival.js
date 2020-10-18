$( document ).ready(function() {
    console.log( "ready!" );
});

const swiper = new Swiper();

var mySwiper = new Swiper('.swiper-header', {
    direction: 'horizontal',
    loop: true,
    // autoplay:true,
    slidePerView:1,
    pagination: {
        el: '.header-pagination',
        type:'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        bulletClass:'header-bullets',
        bulletActiveClass:'header-bullets-active',
        clickable:true,
      },

  })