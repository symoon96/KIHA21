var windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

$(document).ready(function(){
    let windowWidth = window.innerWidth;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    const url = new URL(window.location);
    const urlParams = url.searchParams;

    let correctGnb = $('.gnb ul.depth01 > li.on').index()

    if(urlParams.get('s')) {
            const scrollTop = $('.'+urlParams.get('s')).offset().top;
            $('html, body').animate({scrollTop: scrollTop-parseInt($('.timeline').css('top').replace('px', ''))}, 500);
        }

    if(windowWidth <= 1170) {
        gnb()
    } else {
        subNav();
        gnbHover()

        $('.gnb').css({
            'transform': '',
            'height' : ''
        });
        $('.gnb ul.depth01').css({
            'height' : ''
        });

        if(correctGnb == 0){
            $('.gnb ul.depth01 > li').eq(correctGnb).find('.depth02').css('height', 0);
        }

        $('.gnb ul.depth01 > li').hover(function(){
            $('.gnb ul.depth01 > li').removeClass('on');
            $(this).addClass('on');

            if(correctGnb == 0){
                $('.gnb ul.depth01 > li').eq(correctGnb).find('.depth02').css('height', 0)
            }
        }, function(){
                $('.gnb ul.depth01 > li').removeClass('on')
                $('.gnb ul.depth01 > li').eq(correctGnb).addClass('on');
                if(correctGnb < 0){
                    $('.gnb ul.depth01 > li').removeClass('on')
                }
        })
    }

    $(window).resize(function(){
        windowWidth = window.innerWidth;
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        if(urlParams.get('s')) {
            const scrollTop = $('.'+urlParams.get('s')).offset().top;
            $('html, body').animate({scrollTop: scrollTop-parseInt($('.timeline').css('top').replace('px', ''))}, 500);
        }

        if(windowWidth <= 1170) {
            gnb()
        } else {
            subNav();
            gnbHover();

            $('.gnb').css({
                'transform': '',
                'height' : ''
            });
            $('.gnb ul.depth01').css({
                'height' : ''
            });

            if(correctGnb == 0){
                $('.gnb ul.depth01 > li').eq(correctGnb).find('.depth02').css('height', 0);
            }

            $('.gnb ul.depth01 > li').hover(function(){
                $('.gnb ul.depth01 > li').removeClass('on');
                $(this).addClass('on');

                if(correctGnb == 0){
                    $('.gnb ul.depth01 > li').eq(correctGnb).find('.depth02').css('height', 0)
                }
            }, function(){
                $('.gnb ul.depth01 > li').removeClass('on')
                $('.gnb ul.depth01 > li').eq(correctGnb).addClass('on');
                if(correctGnb < 0){
                    $('.gnb ul.depth01 > li').removeClass('on')
                }
            })
        }
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $('#header').addClass('scroll')
        } else {
            $('#header').removeClass('scroll')
        }
    })

    
})

function gnbHover(){
    $('.gnb ul.depth01').hover(function(){
        $('#header').addClass('hover')
    }, function(){
        $('#header').removeClass('hover')
    })
}

// 메뉴
function gnb(){
    openMenu();
    closeMenu()
}

// 메뉴 열기
function openMenu(){
    $('.btn-menu').click(function(){
        $('.gnb').css({
            'transform': 'translateX(0)',
            'height' : windowHeight
        });
        $('.gnb ul.depth01').css({
            'height' : windowHeight - parseInt($('.gnb').css('padding-top').replace('px', ''))
        });
        
        dimMakerinHeader()
    })
}

// 메뉴 닫기
function closeMenu(){
    $('.btn-close').click(function(){
        $('.gnb').css('transform', '');

        dimRemoveHeader()
    })
}

// dim 생성
function dimMakerinHeader() {
    if($('#header').find('.dim').length > 0){
        return;
    }
    $('#header').append('<div class="dim"></div>');
    bodyHidden();
}

// dim 생성
function dimMaker() {
    if($('body').find('.dim').length > 0){
        return;
    }
    $('body').append('<div class="dim"></div>');
    bodyHidden();
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
    bodyAuto();
}

// dim 제거
function dimRemoveHeader() {
    $('#header .dim').remove();
    bodyAuto();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', '')
}

// 서브 네비게이션
function subNav(){
    let subNavWidth = new Array;
    let maxWidth;

    $('.sub .sub-nav ul li').each(function(){
        subNavWidth.push($(this).outerWidth())
    });

    maxWidth = Math.max(...subNavWidth);

    // $('.sub .sub-nav ul li').css('width', maxWidth)
}