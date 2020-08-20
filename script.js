$(document).ready(function(){

  //for sticky navigation
  $('.js--menu-section').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky')
    }
  },{
    offset: '60px;'
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //Animation on scroll
  $('.js--wp-1').waypoint(function(direction){
    if(direction == 'down'){
      $('.js--wp-1').addClass('animated fadeIn')
    }else{
      $('.js--wp-1').removeClass('animated fadeIn')
    }
  }, {
    offset:'80%'
  });

  $('.js--wp-2').waypoint(function(direction){
    if(direction == 'down'){
      $('.js--wp-1').addClass('animated fadeOut')
      $('.js--wp-2').addClass('animated fadeIn')
    }else{
      $('.js--wp-1').removeClass('animated fadeOut')
      $('.js--wp-2').removeClass('animated fadeIn')
      $('.js--wp-1').addClass('animated fadeIn')
    }
  }, {
    offset:'50%'
  });

  //Mobile NAVIGATION
  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    }else{
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });


})
