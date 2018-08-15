$(window).on('load', () => {
    $('#loader').delay(2000).fadeOut('slow');
});
    



$(document).ready(() => {

   
 

    $('.serv').on('mouseenter', () =>{
        $(event.currentTarget).find('.infoServ').slideDown(200);
    }).on('mouseleave', () => {
        $(event.currentTarget).find('.infoServ').slideUp(200);

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

  $('.work-1').on('click', () =>{
    $('.containerOverlay').addClass('work-display');
    $('.work1-overlay').show('slow');
  });
  $('.work-exit').on('click', () => {
    $('.work1-overlay').hide('slow');
  });

  $('.work-2').on('click', () =>{
    $('.containerOverlay').addClass('work-display');
    $('.work2-overlay').show('slow');
  });
  $('.work-exit').on('click', () => {
    $('.work2-overlay').hide('slow');
  });
  $('.work-3').on('click', () =>{
    $('.containerOverlay').addClass('work-display');
    $('.work3-overlay').show('slow');
    
  });
  $('.work-exit').on('click', () => {
    $('.work3-overlay').hide('slow');
    
  });

  window.onscroll = function() {myFunction()};

  function myFunction() {
      if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) {
          document.getElementById('Menu').className = "slideUp";
      }else if(document.body.scrollTop < 709 || document.documentElement.scrollTop < 709){
        document.getElementById('Menu').className = "menu";

      }
  }



});

