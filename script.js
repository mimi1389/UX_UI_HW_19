
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$.fn.ready(function(){
$("h4").fitText(1.2, { minFontSize: '14', maxFontSize: '34' });

});