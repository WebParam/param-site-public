$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: false,
            dots: false,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: false,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: false,
                  items: 3
                }
            }
        });        
            
    }

    if ( $('.owl-1').length > 0 ) {
      $('.owl-1').owlCarousel({
          center: false,
          items: 1.5,
          loop: false,
          stagePadding: 0,
          margin: 20,
          smartSpeed: 1000,
          autoplay: false,
          nav: true,
          dots: true,
          navContainer: '#owl-nav',
          pauseOnHover: false,
          responsive:{
              600:{
                  margin: 20,
                  nav: true,
                items: 2
              },
              1000:{
                  margin: 20,
                  stagePadding: 0,
                  nav: true,
                items: 3
              }
          }
      });            
  }


    

})