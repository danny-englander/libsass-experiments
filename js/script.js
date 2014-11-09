/**
 * Misc scripts
 */

/**
 * off-canvas menu functions.
 */
$(document).ready(function(){

  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu-trigger').toggleClass('is-visible');
    $('.js-menu-trigger i').removeClass('fa-align-justify').addClass('fa-close');
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu-trigger').toggleClass('is-visible');
    $('.js-menu-trigger i').addClass('fa-align-justify').removeClass('fa-close');
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

});


/**
 * Misc functions.
 */
$(document).ready(function(){


});