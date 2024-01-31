var windowWidth = window.innerWidth;
var changeSwiper = undefined;
var magazineSwiper = undefined;

let prevIdx

$(document).ready(function(){
    if($('.change-swiper').length > 0){
        initChangeSwiper();
    }
    if($('.magazine-swiper').length > 0){
        initMagazineSwiper();
<<<<<<< HEAD
    }

=======
    }    
    
>>>>>>> 9b7291f3c040c035d25f57ac2456b0a4a8e3f8bc
    $('img[usemap]').rwdImageMaps();

    AOS.init();

    let topBlank = $('#header').hasClass('scroll') ? $('.gnb').height() + $('.timeline').outerHeight() : $('#header').height() + $('.timeline').outerHeight();

    $(window).scrollTop(0);

    let aniTarget1 = $('.growth #fullpage .section01 .animation-area > div > *')
    let aniTarget2 = $('.growth #fullpage .section02 .animation-area > div > *')
    let aniTarget3 = $('.growth #fullpage .section03 .animation-area > div > *')
    let aniText

    $('#fullpage').fullpage({
        responsiveSlides: true,
        responsiveHeight: 840,
        navigation: true,
		slidesNavigation: true,
		scrollOverflow: true,
		scrollOverflowReset: true,

        afterLoad: function(anchorLink, index){
            if(index == 1) {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.removeClass('ani'); 
                }, 1000);
                
                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.removeClass('ani'); 
                }, 1000);
            } else if(index == 2) {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.addClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.removeClass('ani'); 
                }, 1000);
            } else {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.addClass('ani'); 
                }, 1000);
            }
        },
        
        onLeave: function(index, nextIndex, prevIndex, direction){
            if (index == 2 && prevIndex == "up") {
                $('#header').removeClass('scroll')
            } else {
                $('#header').addClass('scroll')
            }

            if(index == 1) {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.removeClass('ani'); 
                }, 1000);
                
                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.removeClass('ani'); 
                }, 1000);
            } else if(index == 2) {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.addClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.removeClass('ani'); 
                }, 1000);
            } else {
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').removeClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').removeClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget2.removeClass('ani'); 
                }, 1000);

                setTimeout(() => {
                    $('.growth #fullpage .section01 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section01 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget1.addClass('ani'); 
                }, 1000);
            }
        }
    });

    $('.timeline ul li a').click(function(){
        $('html').animate({scrollTop: $('.history-headline').eq($(this).closest('li').index()).offset().top - $('#header').height()}, 1000)
    })
    // $('.history-headline').height($(window).innerHeight() - $('#header').height())
    // 역사 하이라이트
    $('.timeline ul li').eq(0).addClass('on')
    $('.timeline ul li').eq(0).find('a').css('color', '#cc1313');
    
    $(window).scroll(function(){
        const viewportHeight = $(window).height();
        const scrolltop = $(window).scrollTop();

        let thisScrollTop
        let thisContHeight
        let totalHeight
        let detailIdx
        
        $('.history-headline').each(function(){
            thisScrollTop = $(this).offset().top;
            thisContHeight = $(this).next().height();
            totalHeight = $(this).height() + $(this).next().height();
            detailIdx = $('.history-headline').index(this);

            if(scrolltop + topBlank - ($('#header').height() + $('.timeline').height() - 60) >= $(this).next().offset().top && scrolltop < $(this).next().offset().top + $(this).next().height()){
                $(this).next().addClass('on')
            } else {
                $(this).next().removeClass('on')
            }

            if(scrolltop + topBlank >= thisScrollTop){
                $('.timeline ul li').eq(detailIdx).addClass('on')
                $('.timeline ul li').eq(detailIdx).find('a').css('color', '#cc1313')
                $('.timeline ul li').eq(detailIdx).prev().addClass('on')
                $('.timeline ul li').eq(detailIdx).prev().find('a').css('color', '');
                $('.timeline ul li').eq(detailIdx).find('.bar').css('width', progress(thisScrollTop, totalHeight, scrolltop) + '%')

            } else if(scrolltop == 0){
                $('.timeline ul li').eq(0).addClass('on')
                $('.timeline ul li').eq(0).find('a').css('color', '#cc1313')
            } else {
                $('.timeline ul li').eq(detailIdx).removeClass('on')
                $('.timeline ul li').eq(detailIdx).find('a').css('color', '')
                $('.timeline ul li').eq(detailIdx).find('.bar').css('width', '')
            }
        });

        let currentIdx = $('.timeline ul li.on').last().index();

        if($('.timeline').length > 0){
            if(currentIdx !== prevIdx) {
                let leftValue = $('.timeline ul li.on').last().index() == 0 ? 0 : $('.timeline ul li.on').last().position().left
                $('.timeline').animate({scrollLeft: leftValue}, 300);
            }
        }

        prevIdx = currentIdx
    })

    messageSet();

    // $('html').click(function(e){
    //     if($('.pop-view').hasClass('active')){
    //         if($(e.target).is('.inner') && $(e.target).parents('.pop-view')){
    //             $('.pop-view').removeClass('active');
    //             $('body').css('overflow', '')
    
    //             $('#header').css('background-color', '')
    //         }
    //     }
    // })

    if($('.pop-view').hasClass('active')){
        if($(e.target).is('.inner') && $(e.target).parents('.pop-view')){
            $('.pop-view').removeClass('active');
            $('body').css('overflow', '')

            $('#header').css('background-color', '')
        }
    }

    if(windowWidth <= 1170){
        if($('.pop-view').hasClass('active')){
            if($(e.target).is('.inner') && $(e.target).parents('.pop-view')){
                $('.pop-view').removeClass('active');
                $('body').css('overflow', '')
    
                $('#header').css('background-color', '')
            }
        }
    }
})

function progress(thisScrollTop, totalHeight, scrolltop){
    // console.log(thisScrollTop, totalHeight, scrolltop)
    // console.log(scrolltop - thisScrollTop)
    let progress = scrolltop - thisScrollTop;

    if(progress < 0) {
        progress = 0;
    } else {
        progress = (progress/totalHeight)*100

        if(progress > 100){
            progress = 100
        }
    }

    return progress;
}

$(window).on('resize', function () {
    windowWidth = window.innerWidth;
    if(windowWidth <= 1170){
        if($('body').find('.pop-view').length > 0){
            $('.pop-view').remove();
            $('body').css('overflow', '')
        }
    }
    if($('.change-swiper').length > 0){
        initChangeSwiper();
    }
    if($('.magazine-swiper').length > 0){
        initMagazineSwiper();
    }
});

function initChangeSwiper() {
    if (windowWidth > 750 && changeSwiper == undefined) {
        changeSwiper = new Swiper(".change-swiper .swiper", {
            slidesPerView: "auto",
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

        // if($('.change .change-swiper .swiper .swiper-wrapper .swiper-slide.bg').length > 0){
        //     changeSwiper.appendSlide('<div class="swiper-slide"><div class="img-wrap"><img src="../img/sub/img_change03_05_pc02.png" alt=""></div><div class="caption-wrap"></div></div>')
        // }
    } else if (windowWidth <= 1170 && changeSwiper != undefined) {
        changeSwiper.destroy();
        changeSwiper = undefined;

        // if($('.change .change-swiper .swiper .swiper-wrapper .swiper-slide.bg').length > 0){
        //     changeSwiper.removeSlide(5)
        // }
    }
}

function initMagazineSwiper() {
    if (windowWidth > 1170 && magazineSwiper == undefined) {
        magazineSwiper = new Swiper(".magazine-swiper .swiper", {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3,
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

function messageSet() {
    $('.message .congrats map area').each(function(){
        $(this).attr('onclick', 'popViewMessage(' + ($(this).index())+ ')')
    })
}

function popViewMessage(target){
    var popSwiper = new Swiper(".popSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        observer: true,
        observeParents: true,
    });

    popSwiper.slideTo(target, 1000, false)

    if(!$('.congrats').find('.pop-view').hasClass('active')){
        $('.pop-view').addClass('active');

        $('body').css('overflow', 'hidden');

        $('#header').css('background-color', '#ffffff')
    }

    $('.swiper-button-close').click(function(){
        $('.pop-view').removeClass('active');
        $('body').css('overflow', '')

        $('#header').css('background-color', '')
    })
    
    if(!$(window).scrollTop() > 0) {
        $('.message .congrats .pop-view').css('padding-top', $('#header').height() + 60)
    } else {
        $('.message .congrats .pop-view').css('padding-top', $('#header').height() + 60)
    }
}