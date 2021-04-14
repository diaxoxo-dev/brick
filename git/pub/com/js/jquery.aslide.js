/*
*   title : 접근성 맞춤 슬라이드
*   author : mkpub2705@adcapsule.co.kr
*   date : 2015-10-03
*/

(function() {

  $.fn.aSlide = function ( options ) {

    var defaults = {
          duration: 500,
          interval: 3000,
          auto: true,
          marginBottom: 0,
          pager: true,
          pagerAlign: 'center',
          pagerResize: false
        },

        opts = $.extend({}, defaults, options),
        $parent = $(this),
        $slides = $('.slideshow', $parent),
        $item = $('dd', $slides),
        itemLength = $item.length,
        $btns = $('.btn', $parent),
        duration = opts.duration,
        interval = opts.interval,
        currentIdx = 0,
        timer = null,
        toggle = false, // 버튼 온/오프 처리를 위한 변수
        isMoving = false, // 움직이는동안 동작방지를 위한 변수
        //$indicator = $('.indicator', '#slide'),
        tempStr = '';

        if ( $btns.hasClass('state') ) {
            if ( opts.auto ) {
                toggle = true; // 버튼 온/오프 처리를 위한 변수
                $btns.addClass('play')
                .find('>span').text('멈춤');
            } else {
                $btns.addClass('stop')
                .find('>span').text('재생');
            }
        }

    var moveSlide = function(targetIdx, dir) {
        if (!isMoving) {
            isMoving = true;

            pagerPosition (false, targetIdx);

            if (dir === 'left') {
                $item.css('left', '-100%')
                    .eq(currentIdx).css('left', 0)
                    .stop(true).animate({ left: '100%' }, duration, 'swing')
                    .end().eq(targetIdx)
                    .stop(true).animate({ left: 0 }, duration, 'swing', function() {
                        isMoving = false;
                    });
            } else if (dir === 'right') {
                $item.css('left', '-100%')
                    .eq(currentIdx).css('left', 0)
                    .stop(true).animate({ left: '-100%' }, duration, 'swing')
                    .end().eq(targetIdx).css('left', '100%')
                    .stop(true).animate({ left: 0 }, duration, 'swing', function() {
                        isMoving = false;
                    });
            } else {
                $item.css('left', '-100%')
                    .eq(targetIdx).css('left', 0);
                isMoving = false;
            }
            currentIdx = targetIdx;
        }
    };
    var showPrevSlide = function() {
        var targetIdx = (currentIdx - 1) % itemLength;
        moveSlide(targetIdx, 'left');
    };
    var showNextSlide = function() {
        var targetIdx = (currentIdx + 1) % itemLength;
        moveSlide(targetIdx, 'right');
    };

    var onClick = function() {

        // 클래스명으로 구분하기 위한 처리. 클래스가 2개이상일 경우 띄어쓰기로 구분해서 두번째 값을 선택.
        var className = $(this).attr('class').split(' ')[1];

        clearInterval(timer);
        switch (className) {
            case 'state':
                toggle = !toggle;
                if (toggle) $(this).removeClass('stop').addClass('play').find('>span').text('멈춤');
                else $(this).removeClass('play').addClass('stop').find('>span').text('재생');
                break;
            case 'prev':
                showPrevSlide();
                break;
            case 'next':
                showNextSlide();
                break;
        }
        if (toggle) autoSlide();
    };

    function autoSlide() {
        clearInterval(timer);
        timer = setInterval(showNextSlide, interval);
    }

    function pagerPosition ( recycle, ti ) {

        $('dt', $slides).eq(ti).addClass('active').siblings('dt').removeClass('active');

        for ( var i=0; i<$item.length; i+=1 ) {
            if ( recycle ) {
                tempStr = '<a href="javascript:;" data-index="' + i + '">'+
                            '<span class="ir">' + (i+1) + '번째 슬라이드</span>'+
                        '</a>';
                $slides.find('dt').eq(i).append(tempStr);    
            }
            
            var pagerWidth = ( $item.length * ($slides.find('dt').width()+6) ) - 6,
                pagerStartPos = ( $slides.width() - pagerWidth ) / 2,
                pagerStartPos2 = 0,
                currentPagerIdx = $slides.find('dt.active').index() / 2;

            if ( opts.pagerAlign == 'center' ) {
                $slides.find('dt').eq(i).css('left', pagerStartPos + ( i* ($slides.find('dt').width() + 6 ) ) );
            } else if ( opts.pagerAlign == 'right' ) {
                pagerStartPos = ( $slides.width() - pagerWidth );
                $slides.find('dt').eq(i).css('left', pagerStartPos + ( i* ($slides.find('dt').width() + 6 ) ) - ($parent.find('.btn.state').width() + 10) );
                if ( opts.pagerResize ) {
                    pagerWidth = 109;
                    pagerStartPos2 = ( (980/2) - pagerWidth );
                    $slides.find('dt').eq(i).css('left', pagerStartPos + ( i*19 ) );
                    console.log($parent, pagerWidth);
                    if ( i == currentPagerIdx ) {
                        $slides.find('dt').eq(currentPagerIdx).css({ left:'50%', marginLeft: ( pagerStartPos2-18 ) + ( i*19 ) });    
                    } else if ( i < currentPagerIdx ) {
                        $slides.find('dt').eq(i).css({ left:'50%', marginLeft: pagerStartPos2 + ( i*19 ) - 18 });
                    }else if ( i > currentPagerIdx ) {
                        $slides.find('dt').eq(i).css({ left:'50%', marginLeft: pagerStartPos2 + ( i*19 ) });
                    }
                }
            }
        }
    }

    // 초기화 및 콜백
    if ( opts.pager ) {
        pagerPosition(true);
    }

    $slides.find('.indic').on('click focusin', 'a', function(){
      var idx = $(this).data('index');
      var dir = currentIdx >= idx ? 'left' : 'right';
      moveSlide(idx, dir);
    });

    moveSlide(0, 'right');
    $btns.on('click', onClick);
    $item.eq(0).on('load', function() {
        $parent.height($(this).height() + opts.marginBottom);
    });
    $(window).on('resize', function() {
        $parent.height($item.eq(0).height() + opts.marginBottom);
    });

    if ( opts.auto ) autoSlide();

  };
    
})();