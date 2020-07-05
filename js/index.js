$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

const $navbar = $('.navbar');
(function ($) {
     var jump = function (e) {
         if (e) {
             e.preventDefault();
             var target = $($(this).attr("href")).position().top;
         } else {
             var target = $(location.hash).offset().top;
         }
         $('html,body').animate({
             scrollTop: target - $navbar.outerHeight()
         }, 1000, function () {
             location.hash = target;
         });
     }
     $('html, body').hide();
     $(document).ready(function () {
         $('a[href^="#"]').bind("click", jump);
         if (location.hash) {
             setTimeout(function () {
                 $('html, body').scrollTop(0).show()
                 jump();
             }, 0);
         } else {
             $('html, body').show();
         }
     });
 })(jQuery)
