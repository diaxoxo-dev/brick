
$(function(){

    //gnb
    var $headerWrap = $('.main .headerWrap'),
        $depth2 = $headerWrap.find('.depth2');
    var gnbOpen = function(){
        var depth2Height = 0;
        $depth2.each(function(idx, val){
            if ( $(this).outerHeight() > depth2Height ) {
                depth2Height = $(this).outerHeight();
            }
            $(this).slideDown('fast', function() { });
        });
        if ( !$('.main .headerWrap').hasClass('open-menu') )
            $headerWrap.addClass('open-menu').height( $('.main .headerWrap').height() + depth2Height );
    };

    var gnbClose = function(){
        $headerWrap.removeClass('open-menu').height( 'inherit' );
    }

    $('.main .headerWrap .depth1 > li').on( 'mouseenter focusin', gnbOpen);
    $('.main .headerWrap').on('mouseleave focusout', gnbClose);


    //메인 비주얼
    var $mainVisual = $('#mainVisual');
    function mainVisualAnimation ( dir ) {
        var _current = $mainVisual.find('.visual_area li.on'),
            ctrlVar = false;
        if ( dir == 'next' || dir == 'prev' ) {
            var endOrStart = dir=='next' ? 0 : $mainVisual.find('.visual_area > li').length-1,
                $el = _current[dir]().css({opacity: 0});

            if ( $el.length <= 0 ) {
                $el = $mainVisual.find('.visual_area > li').eq(endOrStart).css({opacity: 0});
            }
            ctrlVar = true;
        } else {
            var klassName = dir;
            if ( klassName == $mainVisual.find('.visual_area li.on')[0].className.split(' ')[0] ){
                ctrlVar = false;
            } else {
                var $el = $mainVisual.find('.visual_area > li.' + klassName).css({opacity: 0});
                    ctrlVar = true;
            }
        }
        if ( ctrlVar ) {
            //console.log('애니메이션 실행');
            $el.stop().animate({opacity: 1}, 300, function(){
                $(this).addClass('on');
                var klassName = $el.get(0).className.split(' ')[0];
                $mainVisual.find('.pager_map .' + klassName).addClass('on').siblings().removeClass('on');
            });
            _current.stop().animate({opacity: 0}, 300, function(){
               $(this).removeClass('on'); 
            });
        }
    }
    
    function mainVisualPager () {
        if ( $mainVisual.length <= 0 ){
            return false;
        }
        var pagerKlass = $mainVisual.find('.visual_area > li.on').get(0).className.split(' ')[0];
        $mainVisual.find('.pager_map .' + pagerKlass).addClass('on').siblings().removeClass('on');
    }
    
    
    var _randNum = Math.floor( Math.random()*4 );
    $mainVisual.find('.visual_area > li').css({ opacity: 0 }).eq(_randNum).css({ opacity: 1 }).addClass('on').siblings().removeClass('on');
    
    mainVisualPager();
    
    //슬라이드 좌우 이동
    $mainVisual.find(' > a').on('click', function(event){
        var klass = $(this).get(0).className;
        mainVisualAnimation( klass );
        return event.preventDefault();
    });

    //지도위의 각 발전소 버튼
    $mainVisual.find('.pager_map li a').on('click', function(event){
        event.preventDefault();
        var plantName = $(this).parent().get(0).className.split(' ')[0];
        mainVisualAnimation(plantName);
    });
    
    //관련사이트 Carousel
    if ( $(".accessibleCarousel").length > 0 ) {  
        $(".accessibleCarousel").aCarousel({ auto : false, speed : 1000 }, function(){
            // alert("리스트 변경후 실행할 함수 정의");
            //console.log('sdfsdf');
        });
    }

    //최근게시물 이미지 오버효과
    $('#bbsLatest article a.photo').on({
        mouseenter: function(){
            $(this).find('img').stop().animate({opacity: 0.7, width:'120%', height:'120%', left:'-10%', top:'-10%'});
            $(this).find('> .shortcut').stop().animate({ top: 64 }, 300, 'swing');
            $(this).find('> .tit').stop().animate({ top: 280 }, 300, 'swing');
        },
        mouseleave: function(){
            $(this).find('img').stop().animate({opacity: 0.35, width:'100%', height:'100%', left:0, top:0});
            $(this).find('> .shortcut').stop().animate({ top: -136 }, 300, 'swing');
            $(this).find('> .tit').stop().animate({ top: 80 }, 300, 'swing');
        }
    });

    //TOP BANNER
    var $topBanner = $('#topBanner');

    $topBanner.find('a.close').on('click', function( event ){
        $topBanner.stop().animate({height: 0}, 500, 'swing', function(){
            $topBanner.remove();
        });
    });

}); //end document ready