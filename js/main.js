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
          items: 1,
          loop: true,
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
                items: 1
              },
              1000:{
                  margin: 20,
                  stagePadding: 0,
                  nav: true,
                items: 2.5
              }
          }
      });            
  }

  if ( $('.owl-3').length > 0 ) {
    $('.owl-3').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: false,
        nav: true,
        dots: true,
        navContainer: '#owl-nav3',
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
              items: 2.5
            }
        }
    });            
}

if ( $('.owl-4').length > 0 ) {
  $('.owl-4').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: false,
      nav: true,
      dots: true,
      navContainer: '#owl-nav4',
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
            items: 2.5
          }
      }
  });            
}


    

})