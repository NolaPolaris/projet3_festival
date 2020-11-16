$( document ).ready(function() {
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

$('.btn-nav').click(function() {
  $('nav').addClass('nav-responsive');
  $('#cross').addClass('cross-responsive')
  $('#cross').click(function() {
    $('nav').removeClass('nav-responsive');
  }) 
}) 


