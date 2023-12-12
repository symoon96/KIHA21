var windowWidth = window.innerWidth;
var changeSwiper = undefined;

$(document).ready(function(){
    initSwiper();
    $('img[usemap]').rwdImageMaps();

    AOS.init();

    let topBlank = $('.gnb').outerHeight() + $('.timeline').outerHeight();

    $(window).scrollTop(0);

    let aniTarget1 = $('.growth #fullpage .section01 .animation-area > div > *')
    let aniTarget3 = $('.growth #fullpage .section03 .animation-area > div > *')

    $('#fullpage').fullpage({
        responsiveSlides: true,
        responsiveWidth: 1110,
        responsiveHeight: 810,
        navigation: true,
        scrollOverflow: true,
		scrollOverflowReset: true,

        afterLoad: function(anchorLink, index){
            if (index !== 1){
				$('#header').addClass('scroll')
			} else {
                $('#header').removeClass('scroll')
            }
            
            if(index == 1) {
                aniTarget1.addClass('ani'); 
            } else if(index == 2) {
            } else {
                console.log(index)
                aniTarget3.addClass('ani'); 
            }
        },
        
        onLeave: function(index, nextIndex, prevIndex, direction){
            if (index !== 1){
				$('#header').addClass('scroll')
			} else {
                $('#header').removeClass('scroll')
            }

            if(index == 1) {
                aniTarget1.addClass('ani'); 
                $('#header').removeClass('scroll')
            } else if(index == 2) {
				$('#header').addClass('scroll')
            } else {
				$('#header').addClass('scroll')
                console.log(index)
                aniTarget3.addClass('ani'); 
            }
        }
    });

    // 역사 하이라이트
    $(window).scroll(function(){
        const viewportHeight = $(window).height();
        const scrolltop = $(window).scrollTop();
        
        $('.history-detail').each(function(){
            let thisScrollTop = $(this).offset().top;
            let thisHeight = $(this).height();
            let detailIdx = $('.history-detail').index(this)

            if(scrolltop + topBlank >= thisScrollTop && scrolltop < thisScrollTop + $(this).height() /* - $('.history .history-detail .visual .text-visual').outerHeight() - topBlank*/){
                $(this).addClass('on')

                
            } else {
                $(this).removeClass('on')
                // $(this).find('.inner').css('transform', 'translateY('+ thisScrollTop + $(this).height() - $('.history .history-detail .visual .text-visual').outerHeight() - topBlank + ')')
            }

            if(scrolltop + topBlank >= thisScrollTop){
                $('.timeline ul li').eq(detailIdx).addClass('on')
                $('.timeline ul li').eq(detailIdx).find('a').css('color', '#cc1313')
                $('.timeline ul li').eq(detailIdx).prev().addClass('on')
                $('.timeline ul li').eq(detailIdx).prev().find('a').css('color', '');
                $('.timeline ul li').eq(detailIdx).find('.bar').css('width', progress(thisScrollTop, thisHeight, scrolltop) + '%')
            } else {
                $('.timeline ul li').eq(detailIdx).removeClass('on')
                $('.timeline ul li').eq(detailIdx).find('a').css('color', '')
                $('.timeline ul li').eq(detailIdx).find('.bar').css('width', '')
            }
        })
    })
})

function progress(thisScrollTop, thisHeight, scrolltop){
    // console.log(thisScrollTop, thisHeight, scrolltop)
    // console.log(scrolltop - thisScrollTop)
    let progress = scrolltop - thisScrollTop;

    if(progress < 0) {
        progress = 0;
    } else {
        progress = (progress/thisHeight)*100

        if(progress > 100){
            progress = 100
        }
    }

    return progress;
}

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