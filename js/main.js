
window.addEventListener('scroll', function() {
    var header = document.querySelector('.main_header_color');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.style.backgroundColor = '#191716'; /* رنگ دلخواه برای هدر */
    } else {
      header.style.backgroundColor = 'transparent'; /* رنگ پیشفرض هدر */
    }
  });

  let menu = document.querySelector(".menu_responsive")
  let menuBtn = document.querySelector(".hamberger_menu")
  let menuBtnIcon = document.querySelector(".hamberger_menu i")

  menuBtn.addEventListener("click", function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
      menu.style.right = "0"
      menuBtnIcon.classList = "fa fa-times"
    } else {
      menu.style.right = "-200px"
      menuBtnIcon.classList = "fa fa-bars"
    }
  })

  $('#store_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        450:{
          items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        },
    }
  })
  
  $('#store_coffee_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        450:{
          items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        },
    }
  })

  $('#comment_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        450:{
          items:1
        },
        700:{
            items:1
        },
        1000:{
            items:1
        },
    }
  })