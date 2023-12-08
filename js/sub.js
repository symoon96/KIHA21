var windowWidth = window.innerWidth;
var changeSwiper = undefined;

$(document).ready(function(){
    initSwiper();
    $('img[usemap]').rwdImageMaps();

    AOS.init();

    // 역사 하이라이트
    $(window).scroll(function(){
        const viewportHeight = $(window).height();
        const scrolltop = $(window).scrollTop();
        
        $('.history-detail').each(function(){
            let thisScrollTop = $(this).offset().top;

            // if(thisScrollTop < (viewportHeight + scrolltop) && thisScrollTop > (scrolltop - $(this).height())){
            //     console.log($(this).find('.text-visual').text())
            // }

            if(scrolltop >= thisScrollTop && scrolltop + viewportHeight < thisScrollTop + $(this).height()){
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }

        })
    })
})

$(window).on('resize', function () {
    windowWidth = window.innerWidth;
    initSwiper();
});

function initSwiper() {
    if (windowWidth >= 750 && changeSwiper == undefined) {
        changeSwiper = new Swiper(".change-swiper .swiper", {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (windowWidth < 750 && changeSwiper != undefined) {
        changeSwiper.destroy();
        changeSwiper = undefined;
    }
}