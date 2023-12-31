var windowWidth = window.innerWidth;
var changeSwiper = undefined;
var magazineSwiper = undefined;

let prevIdx

$(document).ready(function(){
    initChangeSwiper();
    initMagazineSwiper();
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
                // setTimeout(() => {
                //     $('.growth #fullpage .section03 .dim').addClass('ani')
                // }, 500);
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 1000);
            } else if(index == 2) {
                // setTimeout(() => {
                //     $('.growth #fullpage .section02 .dim').addClass('ani')
                // }, 500);
                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 1000);
                if(!$('.growth #fullpage .section02 .animation-area').hasClass('ani')){
                    setTimeout(() => {
                        $('.chart01').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart01').width(),
                            value: 0.15,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart02').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart02').width(),
                            value: 0.285,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart03').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart03').width(),
                            value: 0.453,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart04').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart04').width(),
                            value: 0.603,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart05').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart05').width(),
                            value: 0.744,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                    }, 1000);
                }
                
            } else {
                // setTimeout(() => {
                //     $('.growth #fullpage .section01 .dim').addClass('ani')
                // }, 500);
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
            if (index !== 1){
				$('#header').addClass('scroll')
			} else {
                $('#header').removeClass('scroll')
            }

            if(index == 1) {
                // setTimeout(() => {
                //     $('.growth #fullpage .section03 .dim').addClass('ani')
                // }, 500);
                $('#header').removeClass('scroll')
                setTimeout(() => {
                    $('.growth #fullpage .section03 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section03 .animation-area').addClass('ani')
                }, 1000);
                setTimeout(() => {
                    aniTarget3.addClass('ani'); 
                }, 1000);
            } else if(index == 2) {
                // setTimeout(() => {
                //     $('.growth #fullpage .section02 .dim').addClass('ani')
                // }, 500);
				$('#header').addClass('scroll')
                setTimeout(() => {
                    $('.growth #fullpage .section02 .container > img').addClass('ani')
                }, 500)
                setTimeout(() => {
                    $('.growth #fullpage .section02 .animation-area').addClass('ani')
                }, 1000);
                if(!$('.growth #fullpage .section02 .animation-area').hasClass('ani')){
                    setTimeout(() => {
                        $('.chart01').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart01').width(),
                            value: 0.15,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart02').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart02').width(),
                            value: 0.285,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart03').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart03').width(),
                            value: 0.453,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart04').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart04').width(),
                            value: 0.603,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                        $('.chart05').circleProgress({
                            startAngle: Math.PI/2 ,
                            size: $('.chart05').width(),
                            value: 0.744,
                            animation: true,
                            reverse: true,
                            thickness: $('.chart05').width() * 0.03429,
                            lineCap:'square',
                            fill: {color: '#ff0032'},
                            emptyFill: "rgba(0,0,0,0)",
                            animation:{
                                duration: 400,
                                easing: "linear"
                            },
                        });
                    }, 1000);
                }
            } else {
                // setTimeout(() => {
                //     $('.growth #fullpage .section01 .dim').addClass('ani')
                // }, 500);
				$('#header').addClass('scroll')
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
        $('html').animate({scrollTop: $('.history-headline').eq($(this).closest('li').index()).offset().top - topBlank}, 1000)
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

            if(scrolltop + topBlank >= $(this).next().offset().top && scrolltop < $(this).next().offset().top + $(this).next().height()){
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

    $('html').click(function(e){
        if($('.pop-view').hasClass('active')){
            if($(e.target).is('.inner') && $(e.target).parents('.pop-view')){
                $('.pop-view').removeClass('active');
                $('body').css('overflow', '')
    
                $('#header').css('background-color', '')
            }
        }
    })

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
    initChangeSwiper();
    initMagazineSwiper();
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
    } else if (windowWidth <= 750 && changeSwiper != undefined) {
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
}