
window.addEventListener('scroll', function() {
    var header = document.querySelector('.main_header_sticky');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.style.backgroundColor = 'rgba(25, 23, 22, 0.7)'; /* رنگ دلخواه برای هدر */
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
      menu.style.right = "-300px"
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
    autoplay:true,
    responsive:{
        0:{
          items:1,
          nav:false,
          dots:true,
        },
        450:{
          items:1
        },
        700:{
            items:1
        },
        992:{
            items:1,
            nav:true,
            dots:false,
        },
    }
  })

  $('#article_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        450:{
          items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
  })

  function openPopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "none";
  }

  function toggleSidebar() {
    const shopping_card = document.getElementById('shopping_card');
    if (shopping_card.style.left === '-800px') {
        shopping_card.style.left = '0';
    } else {
        shopping_card.style.left = '-800px';
    }
}