$('.hamburger-menu').click(function() {
    $('.navhamburger').toggleClass('show');
    $(this).toggleClass('clicked');
    $('.b2').toggleClass('show');
    

    

    setTimeout(function() {
        $('.b2').toggleClass('show');
      }, 500); 
    });
