// стили для шапки при скроле
$(window).scroll(function() {
  var height = $(window).scrollTop();
  
        /*Если сделали скролл на 1px задаём новый класс для header*/
  if(height > 1){
  $('.header').addClass('header_filter');
  } else{
        /*Если меньше 1px удаляем класс для header*/
  $('.header').removeClass('header_filter');
  }
  
  });

  // галерея

$('[data-fancybox="gallery1"]').fancybox({
});
$('[data-fancybox="gallery2"]').fancybox({
});

  
  $('.slider__box').not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      variableWidth: true,
      arrows: false,
      dots:false,
      centerMode:true,
      mobileFirst: true,
      responsive: [
            {
            breakpoint: 1025,
            settings: "unslick"
            }
      ]
      });

      $('.merch__slider').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            variableWidth: true,
            arrows: false,
            dots:false,
            centerMode:true,
            mobileFirst: true,
            responsive: [
                  {
                  breakpoint: 1025,
                  settings: "unslick"
                  }
            ]
            });