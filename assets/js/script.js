/*--- Write Javascript Here ---*/
$(document).ready(function(){
    
});

new WOW().init();

// Hamburger Mobile Menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  $('your div menu id/class').toggle();
});