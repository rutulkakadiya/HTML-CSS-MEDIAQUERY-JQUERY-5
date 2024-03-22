$(document).ready(function(){
    
    $("#heart1").mouseenter(function(){
        $("#add1").css("display","block")
    })
    
    $("#heart1").mouseleave(function(){
        $("#add1").css("display","none")
    })


    $("#heart2").mouseenter(function(){
        $("#add2").css("display","block")
    })
    
    $("#heart2").mouseleave(function(){
        $("#add2").css("display","none")
    })


    $("#heart3").mouseenter(function(){
        $("#add3").css("display","block")
    })
    
    $("#heart3").mouseleave(function(){
        $("#add3").css("display","none")
    })


    $("#heart4").mouseenter(function(){
        $("#add4").css("display","block")
    })
    
    $("#heart4").mouseleave(function(){
        $("#add4").css("display","none")
    })


    $("#heart5").mouseenter(function(){
        $("#add5").css("display","block")
    })
    
    $("#heart5").mouseleave(function(){
        $("#add5").css("display","none")
    })


    $("#heart6").mouseenter(function(){
        $("#add6").css("display","block")
    })
    
    $("#heart6").mouseleave(function(){
        $("#add6").css("display","none")
    })


    $("#heart7").mouseenter(function(){
        $("#add7").css("display","block")
    })
    
    $("#heart7").mouseleave(function(){
        $("#add7").css("display","none")
    })

    $("#heart8").mouseenter(function(){
        $("#add8").css("display","block")
    })
    
    $("#heart8").mouseleave(function(){
        $("#add8").css("display","none")
    })

    $("#heart9").mouseenter(function(){
        $("#add9").css("display","block")
    })
    
    $("#heart9").mouseleave(function(){
        $("#add9").css("display","none")
    })

    $("#heart10").mouseenter(function(){
        $("#add10").css("display","block")
    })
    
    $("#heart10").mouseleave(function(){
        $("#add10").css("display","none")
    })


    $("#heart11").mouseenter(function(){
        $("#add11").css("display","block")
    })
    
    $("#heart11").mouseleave(function(){
        $("#add11").css("display","none")
    })


    $("#heart12").mouseenter(function(){
        $("#add12").css("display","block")
    })
    
    $("#heart12").mouseleave(function(){
        $("#add12").css("display","none")
    })

    $("#icon4").click(function()
    {
        $(".menu").css("display","none")
        $(".menu1").css("display","none")
        $(".menu2").css("display","block")
    })

})


var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplaysped: 1000,
    dotsData: true,
    cssMode: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplaysped: 1000,
    slidesPerView: 4,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".swiper-pagination",
    }
  });

                  