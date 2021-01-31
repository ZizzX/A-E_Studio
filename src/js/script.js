$(document).ready(function() {
  $("a.scroll-to").on("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
  });

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slider-nav',
    swipe:true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 800,
    easing: 'easy-out'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    swipe:true,
    speed: 800,
    easing: 'easy-out'
  });


  $("#promo-callback").click(function(){ // задаем функцию при нажатиии на элемент <p>
    $("#the-popup").fadeIn('slow','linear').addClass('overlay-active'); // добавляем элементу <p> по которому произведен клик два класса
  });

  $(".popup-close").click(function(){ // задаем функцию при нажатиии на элемент <p>
  $("#the-popup").fadeOut('slow','linear').removeClass('overlay-active'); // добавляем элементу <p> по которому произведен клик два класса
});

  $( window ).scroll(function(){ // задаем функцию при срабатывании события "scroll" на элементе <div>
  if ($(this).scrollTop() > 1000) {
  $('.scrollUp').fadeIn('slow').addClass("scrollUp-active");
      } else {
  $('.scrollUp').fadeOut('slow').removeClass(".scrollUp-active");
      } 
  });


  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  $("#main-form").validate({
    rules: {
      name: "required",
      phone: "required"
    },
    messages: {
      name: "Напишите, пожалуйста ваше имя",
      phone: "Напишите, пожалуйста ваш номер" 
    }
  });

  $('.popup__tel').mask('9(999) 999-99-99');


  $("#main-form").on("submit", function(){
    $.ajax({
      url: '/index.php',
      method: 'post',
      dataType: 'html',
      data: $(this).serialize(),
      success: function(data){
        $('#message').html(data);
      }
    });
  });
});

