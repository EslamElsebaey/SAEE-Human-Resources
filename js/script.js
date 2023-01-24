/************************************************************************ */

// show and hide search box

$(".openMySearch").click(function(){
  $(".search-holder-parent").fadeToggle(200);
  $("body").css("overflow" , "hidden") ;
  $(".search-holder-input").addClass("open-search");
})
$(".closeSearh-btn").click(function(){
    $(".search-holder-input").removeClass("open-search");
    setTimeout(() => {
    $(".search-holder-parent").fadeToggle(300);
  }, 200);
  $("body").css("overflow" , "visible") ;
 
})

/************************************************************************ */


$(document).ready(function(){
    // preloader
    setTimeout(function () {
      $(".preloader").css({
        opacity : "0" , 
        visibility : "hidden" , 
      })
    }, 2000);




/************************************************************************ */








// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

/************************************************************************ */




// clients swiper
const clientsSwiper = new Swiper('.clients .swiper', {
  loop: true,
  autoplay : true ,
  pagination: {
    el: '.clients .swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: ' .clients .swiper-button-next',
    prevEl: '.clients .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 35
    }
  }
});


/************************************************************************ */



// open and close sideBar

$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})


/************************************************************************ */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************ */



// footer nested menu

if($(window).width() <= 768) {
  $(".footer-title").click(function(e){
    e.preventDefault() ; 
    $(this).next().slideToggle(350);
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");

  })
}


/************************************************************************ */


// nav nested menu

if($(window).width() <= 768) {
  $(".li-drop").click(function (e) {
    e.preventDefault() ;
    $(this).children(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop").not($(this)).children(".ul-drop ").slideUp(300);
    $(".li-drop").not($(this)).removeClass("icon-rotate");
    })
  }
  

})
/************************************************************************ */



//  wow animation
new WOW().init();


/********************************************************************************************** */


//fixed nav

    //~~~~~~~~~ fixed header
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
        $(".lang a span").css("color" , "#16697b");
        if($(window).width() > 768){
          $(".logo img").css("width" , "120px");
        }
      } else {
        $("header").removeClass("fixed");
        if($(window).width() > 768){
          $(".logo img").css("width" , "170px");
        }
      
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  

