$(function(){
$('.fairy-tail__slider, .our-trip__slider').slick({
   prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/fairy-tail/arrow back.svg" alt=""></button>',
   nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/fairy-tail/arrow next .svg" alt=""></button>',
   autoplay: true,
   fade: true,
   /* убираем стрелки  на брайкпойнте 600*/
   responsive: [
      {
         breakpoint: 601,
         settings: {
         arrows: false,
         }
      },      
   ]
});
/*меняємо решетку на точку взято с сайта
https://webcomplex.com.ua/jquery/plavnyj-skroll-posle-nazhatiya-na-yakornuyu-ssylku.html */
$(".menu, .our-trip__body").on("click","a", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
   
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
});
});
