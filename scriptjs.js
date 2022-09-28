$(document).ready(function(){ //muon chay js thi goi dong nay
    $(window).scroll(function() { // khi ban scroll  thi se nhu the nao
        if(this.scrollY > 20){  // khi ban scroll qua 20px thi se nhu the nao
            // lay ra class .navbar va them class sticky
            $('.navbar').addClass("sticky");
            console.log('them class sticky');
        }else{
            $('.navbar').removeClass("sticky"); 
            console.log('remove class sticky')
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            console.log('them class sticky');
        }else{
            $('.scroll-up-btn').removeClass("show");
            console.log('them class sticky');
        }
    }); 

    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar scrip 
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     });

    //  typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //  owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }
    });
});