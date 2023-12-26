var windowWidth = window.innerWidth;
var changeSwiper = undefined;
var magazineSwiper = undefined;

$(window).on('load', function(){

    $(window).scrollTop(0);
})

$(document).ready(function(){
    initChangeSwiper();
    initMagazineSwiper();
    $('img[usemap]').rwdImageMaps();

    AOS.init();

    let topBlank = $('.gnb').outerHeight() + $('.timeline').outerHeight();

    let aniTarget1 = $('.growth #fullpage .section01 .animation-area > div > *')
    let aniTarget2 = $('.growth #fullpage .section02 .animation-area > div > *')
    let aniTarget3 = $('.growth #fullpage .section03 .animation-area > div > *')
    let aniText

    $('#fullpage').fullpage({
        responsiveSlides: true,
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
                setTimeout(() => {
                    $('.growth #fullpage .section03 .dim').addClass('ani')
                }, 500);
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 3500);
            } else if(index == 2) {
                setTimeout(() => {
                    $('.growth #fullpage .section02 .dim').addClass('ani')
                }, 500);
                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget2.addClass('ani'); 
                }, 3500);
            } else {
                setTimeout(() => {
                    $('.growth #fullpage .section01 .dim').addClass('ani')
                }, 500);
                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget1.addClass('ani'); 
                }, 3500);
            }
        },
        
        onLeave: function(index, nextIndex, prevIndex, direction){
            if (index !== 1){
				$('#header').addClass('scroll')
			} else {
                $('#header').removeClass('scroll')
            }

            if(index == 1) {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .dim').addClass('ani')
                }, 500);
                $('#header').removeClass('scroll')
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 1500);
            } else if(index == 2) {
                setTimeout(() => {
                    $('.growth #fullpage .section02 .dim').addClass('ani')
                }, 500);
				$('#header').addClass('scroll')
                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget2.addClass('ani'); 
                }, 3500);
            } else {
                setTimeout(() => {
                    $('.growth #fullpage .section01 .dim').addClass('ani')
                }, 500);
				$('#header').addClass('scroll')
                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').addClass('ani')
                }, 1500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').addClass('ani')
                }, 2000);
                setTimeout(() => {
                    aniTarget1.addClass('ani'); 
                }, 3500);
            }
        }
    });

    $('.timeline ul li a').click(function(){
        $('html').animate({scrollTop: $('.history-detail').eq($(this).closest('li').index()).offset().top}, 1000)
    })

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

    messageSet();

    $('html').click(function(e){
        if($(e.target).is('.inner') && $(e.target).parents('.pop-view')){
            $('.pop-view').remove();
            $('body').css('overflow', '')
<<<<<<< HEAD

            $('#header').css('background-color', '')
        }
    })
=======
        }
    });
>>>>>>> dbe2821c52bf549cd10507c51aa557e61e0795f4

    if($('body').find('.pop-view').length > 0){
        $('.pop-view').remove();
        $('body').css('overflow', '')
<<<<<<< HEAD

        $('#header').css('background-color', '')
    }

    if(windowWidth <= 1170){
        if($('body').find('.pop-view').length > 0){
            $('.pop-view').remove();
            $('body').css('overflow', '')

            $('#header').css('background-color', '')
=======
    }

    if (windowWidth <= 1170) {
        if($('body').find('.pop-view').length > 0){
            $('.pop-view').remove();
            $('body').css('overflow', '')
>>>>>>> dbe2821c52bf549cd10507c51aa557e61e0795f4
        }
    }
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
<<<<<<< HEAD
    if(windowWidth <= 1170){
=======

    if (windowWidth <= 1170) {
>>>>>>> dbe2821c52bf549cd10507c51aa557e61e0795f4
        if($('body').find('.pop-view').length > 0){
            $('.pop-view').remove();
            $('body').css('overflow', '')
        }
    }
    initChangeSwiper();
    initMagazineSwiper();
});

function initChangeSwiper() {
    if (windowWidth > 750 && changeSwiper == undefined) {
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

        if($('.change .change-swiper .swiper .swiper-wrapper .swiper-slide.bg').length > 0){
            changeSwiper.appendSlide('<div class="swiper-slide"><div class="img-wrap"><img src="../img/sub/img_change03_05_pc02.png" alt=""></div><div class="caption-wrap"></div></div>')
        }
    } else if (windowWidth <= 750 && changeSwiper != undefined) {
        changeSwiper.destroy();
        changeSwiper = undefined;

        if($('.change .change-swiper .swiper .swiper-wrapper .swiper-slide.bg').length > 0){
            changeSwiper.removeSlide(5)
        }
    }
}

function initMagazineSwiper() {
    if (windowWidth > 1170 && magazineSwiper == undefined) {
        magazineSwiper = new Swiper(".magazine-swiper .swiper", {
            slidesPerView: 3,
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
    } else if (windowWidth <= 1170 && magazineSwiper != undefined) {
        magazineSwiper.destroy();
        magazineSwiper = undefined;
    }
}

<<<<<<< HEAD
function messageSet() {
    $('.message .congrats map area').each(function(){
        $(this).attr('onclick', 'popViewMessage(' + ($(this).index() +1)+ ')')
    })
}

function popViewMessage(target){
    if($('.congrats').find('.pop-view').length <= 0){
=======
function messageSet(){
    $('.message .congrats map area').each(function(){
        $(this).attr('onclick', 'popViewMessage(' + ($(this).index() + 1) + ')')
    })
}

function popViewMessage(target) {
    if($('.congrats').find('.pop-view').length <= 0) {
>>>>>>> dbe2821c52bf549cd10507c51aa557e61e0795f4
        $('.congrats').append(
            '<div class="pop-view"><div class="inner"><img src="../img/sub/img_congrats' + target + '.png" class="img"></div></div>'
        );

<<<<<<< HEAD
        $('body').css('overflow', 'hidden');

        $('#header').css('background-color', '#ffffff')
    }
}
=======
        $('body').css('overflow', 'hidden')
    }
}
>>>>>>> dbe2821c52bf549cd10507c51aa557e61e0795f4
