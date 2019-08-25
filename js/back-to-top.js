$(document).ready(function(){
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
         $('#chat-button').fadeIn();
         $('#back-to-top').fadeIn();
         $('#footer-banner').fadeIn();
       } else {
         $('#chat-button').fadeOut();
         $('#back-to-top').fadeOut();
         $('#footer-banner').fadeOut();
       }
     });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
      // $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    // $('#back-to-top').tooltip('show');
});
