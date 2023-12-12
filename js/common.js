$(document).ready(function(){
    let windowWidth = window.innerWidth;

    if(windowWidth <= 1170) {
        gnb()
    } else {
        subNav();
    }

    $(window).resize(function(){
        windowWidth = window.innerWidth;
        
        if(windowWidth <= 1170) {
            gnb()
        } else {
            subNav();
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

// 메뉴
function gnb(){
    openMenu();
    closeMenu()
}

// 메뉴 열기
function openMenu(){
    $('.btn-menu').click(function(){
        $('.gnb').css('transform', 'translateX(0)');

        dimMakerinHeader()
    })
}

// 메뉴 닫기
function closeMenu(){
    $('.btn-close').click(function(){
        $('.gnb').css('transform', '');

        dimRemove()
    })
}

// dim 생성
function dimMakerinHeader() {
    if($('body').find('.dim').length > 0){
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

    $('.sub .sub-nav ul li').css('width', maxWidth)
}