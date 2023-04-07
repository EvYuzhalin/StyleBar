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
  


// Открытие меню в header

// $('.header__button_menu').on('click',function () {
//   $('.mobile__menu').toggleClass('mobile__menu_active');
//   $('.header__link_box').addClass('header__link_box_active');
//   $('.consultant_mobile').addClass('consultant_mobile_active');
// });
// $('.button_close').on('click',function () {
//   $('.mobile__menu').removeClass('mobile__menu_active');
//   $('.header__link_box').removeClass('header__link_box_active');
//   $('.consultant_mobile').removeClass('consultant_mobile_active');
// });

// $('.header__link_box_item').on('click',function () {
//   $('.mobile__menu').removeClass('mobile__menu_active');
// });


// маска для телефонов

$("#inputPhone").mask("+7 (999) 99-99-999");


// перенос блоков в header
// document.addEventListener("DOMContentLoaded", ready);
// function ready()
// {
//   // перенос блоков при загрузке экрана
//   if ($(window).width() < 1025) {
//     $('.header__link_box').prependTo('.mobile__menu');
//     $('.consultant_mobile').prependTo('.mobile__menu');    
//    }
//   else {
//     $('.header__link_box').prependTo('.header');
//     $('.consultant_mobile').prependTo('.header');
//   }
    
//   // перенос блоков при изменении ширины экрана 
//   $(window).on('resize', function(){
//     if ($(window).width() < 1025) {
//       $('.header__link_box').prependTo('.mobile__menu');
//       $('.consultant_mobile').appendTo('.mobile__menu');
//     }
//     else {
//       $('.header__link_box').prependTo('.header');
//       $('.consultant_mobile').appendTo('.header');
//     }
//     });

// }