//back to top btn start//
$(window).on('scroll',function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop>900){
        $('.backToTop').fadeIn(500)
    }else{
        $('.backToTop').fadeOut(500)
    }
})



$('.backToTop').on('click', function(){
    $('html, body').animate({
        scrollTop:0
    },1000 )
})

//back to top button end//
//preloader start//
$(window).on('load',function(){
    $('.preloader_bg').fadeOut(1000);
})
//preloader end//
/* smooth scroling start */
$('a').on('click', function(event){
    event.preventDefault();

    var hash = this.hash

    if(this.hash !== ''){
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        })
    }
})
/* smooth scrolling end */