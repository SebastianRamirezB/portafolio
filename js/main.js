$(window).on('load', () => {
    $('#loader').delay(2000).fadeOut('slow');
});
    



$(document).ready(() => {
  $('.c-list-1__item').on('click', function(event)  {
    $(event.currentTarget).find('.c-list-1__p').slideToggle();
    $(event.currentTarget).find('.o-button-1').slideToggle();
    $(event.currentTarget).find('.o-button-2').slideToggle();
   
   });
    
  
// Add smooth scrolling to all links
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$('.fondeprol').on('click', () =>{
  $('.c-list-3').show('slow');
  $('.item-1').addClass('active');
})


$('.usd').on('click', () =>{
  $('.c-list-3').show('slow');  
  $('.item-2').addClass('active');
})

$('.exitOverlay').on('click', () => {  
  $('.c-list-3').hide('slow');
  $('.item-1').removeClass('active');
  $('.item-2').removeClass('active');
  
});
});

window.onscroll = function() {myFunction()};

  function myFunction() {
      if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) {
          document.getElementById('menu').className = "c-nav-1";
      }else if(document.body.scrollTop < 709 || document.documentElement.scrollTop < 709){
        document.getElementById('menu').className = "o-slideUp-1";

      }
  }
