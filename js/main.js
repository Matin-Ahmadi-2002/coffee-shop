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
  