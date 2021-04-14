$(function(){

	$(".lnb").each(function(){
		$(".depth1 > li > a,.depth2 > li > a,.depth3 > li > a ").on("click" , function(){
			$(this).siblings("ul").toggleClass("active");
		});
	});
	
	// /* INPUT PLACEHOLDER */
	// //이벤트 상실 문제로 인한 함수화
	// function labelPlaceHolder() {
	// 	$('.overlay').on('focusin click', function(){
    //     $(this).prev('.overlay_guide').hide();
	//     })
	//     .on('focusout', function(){
	//         if (this.value == '') 
	//         {
	//             $(this).prev('.overlay_guide').show();
	//         };
	//     });

	//     $('.overlay_guide').on('click', function(){            
	//         $(this).hide();
	//         $(this).next('input[type=text]').focus();
	//     });
	// }
	// labelPlaceHolder();

	// /* RADIO BUTTON */
	// if ( $('label').hasClass('radio') ) {
	// 	$('label[class*=radio]').on('click', function(){
	// 		if (!$(this).hasClass('radio')) return ;
	// 		var _id = '#' + $(this).attr('for'),
	// 			_name = $(_id).attr('name');
	// 		$('[name=' + _name + ']').siblings('input[type=radio]').attr('checked', false);
	// 		$(_id).attr('checked', true);
	// 		$(this).addClass('on').siblings('label[class*=radio]').removeClass('on');
	// 	});
	// }
	
	
	// /* QUICK BAR */

	// //스크롤 값 초기화
	// $(window).scrollTop( 0 );

	// //윈도우 리사이즈시
	// $(window).on('resize', function(){

	// 	var $this, w, h;

	// 		$this = $(this),
	// 		// w = $(window).width() - ( $('#container').offset().left + $('#container').width() ),
	// 		h = $(window).height();

	// 	if ( $(window).width() > 1024 ) {

	// 		$(window).off('.quickScroll');
	// 		$('#quick').height( h );

	// 	} else {

	// 		$('#quick').height( h );
	// 		$(window).on('scroll.quickScroll', function(){
	// 			//$('#quick').css('top', $(window).scrollTop());
	// 		});

	// 	}

	// }).trigger('resize');	//페이지 로드 후 한번 실행


	// //탭메뉴
	// function tabMenu( $el ) {
	// 	var tabLength = $el.find('> .tab_menu > li').length,
	// 		maxLength = 6;

	// 	$el.find('> .tab_menu > li').on('click', 'a', function( event ){
	// 		var idx = $(this).parent().index();
	// 			//e = window.event || event;

	// 		//data-control 속성이 tab 일때만 실행한다.
	// 		if ( $(this).parents('.tabWrap').data('control') == 'tab' ) {
	// 			event.preventDefault();
	// 			$(this).attr('title', '현재페이지').parent().siblings().find('a').removeAttr('title');
	// 			$(this).parent().addClass('on').siblings().removeClass('on');
	// 			$el.nextUntil('.tabWrap').eq(idx).addClass('on').siblings('.tabContWrap').removeClass('on');
	// 			$el.nextUntil('.tabWrap').eq(idx).find('.tabContWrap').attr('tabindex', 0).focus();
	// 		}
	// 		// 사업소용 탭
	// 		else if ( $(this).parents('.tabWrap').data('control') == 'ofTab' ) {
	// 			event.preventDefault();
	// 			$(this).attr('title', '현재페이지').parent().siblings().find('a').removeAttr('title');
	// 			$(this).parent().addClass('on').siblings().removeClass('on');
	// 			$el.next('.of_tab_page').find('.tabContWrap').eq(idx).addClass('on').siblings().removeClass('on');
	// 		} else if ( $(this).parents('.tabWrap').data('control') !== 'tab' || $(this).parents('.tabWrap').data('control') !== 'ofTab' ){
	// 			return ;
	// 		}			
	// 	});


	// 	if ( tabLength <= maxLength )
	// 		$el.find(' > .tab_menu').addClass('col' + tabLength);
	// 	else
	// 		$el.find(' > .tab_menu').addClass('col6');

	// }
	// //탭메뉴 DOM이 있을 때 실행
	// if ( $('.tabWrap').length > 0 ) {
	// 	$('.tabWrap').each(function( i, val ){
	// 		tabMenu( $(this) );
	// 	});
	// }


	// //팝업 실행
	// if ( $('a.popup').length > 0 )
	// 	$('a.popup').mpopup();


 	// tabSquare();

	// function tabSquare(){
	// 	var status = function (sel) {
	// 		return sel.parent().hasClass('on');
	// 	};
	//     var noChange = function (sel2) {
	//     	return sel2.children().hasClass('center');	    	
	//     };

	// 	// 탭메뉴 .square 타입
	// 	$('.tab_menu.square>li>a').on('mouseenter focusin', function(){			
	// 		if ( !status($(this)) && !noChange($(this)) ) {
	//         	$(this).parent().addClass('active');
	//         	imgReplOn($(this));			
	// 		};

	//     }).on('mouseleave focusout', function(){   

	// 		if ( !status($(this)) && !noChange($(this)) ) {			
	//         	$('.tab_menu.square>li').removeClass('active');
	//         	imgReplOff($(this));
	//         }

	//     }).on('click', function(){

	// 		if ( !status($(this)) && !noChange($(this)) )  	
	//     	{
	// 			$('.tab_menu.square>li>a img').attr('src',$('.tab_menu.square>li>a img').attr('src').replace('_on.gif', '_off.gif'));
	// 			imgReplOn($(this));
	// 			$(this).parent().addClass('on').siblings('li').removeClass('on');
	//     	}
	//     	else
	//     	{
	//     		imgReplOff($(this));
	//     		$(this).parent().removeClass('on');
	//     	}
	//     });

	//     function imgReplOn(_this){
	//     	$('img',_this).attr('src',$('img',_this).attr('src').replace('_off.gif', '_on.gif'));
	//     }

	//     function imgReplOff(_this){
	//     	$('img',_this).attr('src',$('img',_this).attr('src').replace('_on.gif', '_off.gif')); 
	//     }
	// }

	
	// //faq 아코디언
	// /*초기값*/
	// $('.faqLst > dl:not(:first-child) > dd').css('display', 'none');
	// $('.faqLst > dl:first-child,.faqLst > dl:first-child > dt a').addClass('on');
	// $('.faqLst > dl:first-child > dt a span').text('열림');
	
	// $( ".faqLst > dl > dt a" ).on('click',function(){
	// var speed = 400;	
	// if($(this).hasClass("on")){
	// 	$(this).removeClass('on').parents('dl').removeClass('on');
	// 	$(this).find('span').text('닫힘');
	// 	$(this).parent().next('dd').slideUp(speed);
	// }else{
	// 	$(this).addClass('on').parents('dl').siblings('dl').find('> dt a').removeClass('on');
	// 	$(this).parents('dl').addClass('on').siblings('dl').removeClass('on');
	// 	$(this).parents('dl').siblings('dl').find('> dt a span').text('닫힘');
	// 	$(this).find('span').text('열림');
	// 	$(this).parents('dl').siblings('dl').find('> dd').slideUp(speed);
	// 	$(this).parent().next('dd').slideDown(speed);
	// }
	// return false;

	// });

	// /* 아코디언 type2 */
	// /*초기값*/
	// $('.slideMenu dt').eq(0).addClass('on').find('span').text('열림');
	// $('.slideMenu dd').eq(0).css('display','block');

	// $('.slideMenu dt a').on('click', function(){
	//     var status = $(this).parent().hasClass('on');
	//     var speed = 400;
	//     if (!status) 
	//     {
	//         $('.slideMenu dt').removeClass('on');            
	//         $('.slideMenu dt span').text('닫힘');
	//         $(this).children('span').text('열림');
	//         $('.slideMenu dd').slideUp(speed);
	//         $(this).parent().addClass('on').next().slideDown(speed);           
	//     }else
	//     { 
	//         $('.slideMenu dt').removeClass('on');
	//         $(this).parent().next().slideUp(speed);
	//         $(this).children('span').text('닫힘');
	//     };
	//     return false;
	// });




	// //동영상리스트 이미지 키보드이동시
	// $('.vedio_list li .image a').on('focusin',function(){							
	// 	$(this).addClass('on');
	// }).on('focusout',function(){
	// 	$(this).removeClass('on');
	// });

	
	// //별점 주기
	// $('.starRating').on('click', 'label', function(){
	// 	var idx = ($(this).index() + 1) / 2,
	// 		txt = '';

	// 	$(this).parents('.starRating').find('.hide span').remove();

	// 	$(this).children('span').append(' <span>선택</span> ');

	// 	$(this).parents('.starRating').find('label').removeClass('on');
	// 	for ( var i=0; i<idx; i+=1 ) {
	// 		$(this).parents('.starRating').find('label').eq(i).addClass('on');
	// 	}

	// 	switch ( idx ) {
	// 		case 1: txt = '매우 불만족';
	// 		break;
	// 		case 2: txt = '불만족';;
	// 		break;
	// 		case 3: txt = '보통';;
	// 		break;
	// 		case 4: txt = '만족';;
	// 		break;
	// 		case 5: txt = '매우 만족';;
	// 		break;
	// 		default: txt = '선택하세요';;
	// 	}

	// 	$(this).parents('.starRating').find('.starRating_txt').text( txt );

	// });

	// $('a.result_view').on('click', function( event ){
	// 	var e = event || window.event;
	// 	e.preventDefault();
	// 	$('.satis_result').addClass('on');
	// 	$('.satis').removeClass('on');

	// 	$('a.btn_satis').on('click', function( event ){
	// 		var e = event || window.event;
	// 		e.preventDefault();
	// 		$('.satis_result').removeClass('on');
	// 		$('.satis').addClass('on');			
	// 	});
	// });

	// //테이블 캡션 삽입
	// function addTableCaption ( table ) {

	// 	var thStr = '',
	// 		htmlDoctype = doctypeCheck();

	// 	function doctypeCheck () {
	// 		var doctype = document.doctype,
	// 			htmlVersion = '';

	// 		if ( doctype ) {
	// 			var v = doctype.publicId;

	// 			if ( !v ) htmlVersion = '5';
	// 			else if ( v.indexOf('HTML 4.01') > -1) htmlVersion = '4.01';
	// 			else if ( v.indexOf('XHTML 1.0') > -1 ) htmlVersion = 'XHTML 1.0';
	// 			else if ( v.indexOf('XHTML 1.1') > -1 ) htmlVersion = 'XHTML 1.1';
	// 		} else {
	// 			htmlVersion = 'Quirks mode';
	// 		}
	// 		return htmlVersion;
	// 	}

	// 	$(table).each(function( idx, value ){
			
	// 		if ( $(value).data('th-collect') !== false ) {
	// 			thStr = '';
	// 			for( var i=0; i<$(value).find('th').length; i+=1 ) {
	// 				if ( $(value).find(' > * > * > th').eq(i).text() !== '' ) {
	// 					thStr += $(value).find(' > * > * > th').eq(i).text() + ', ';
	// 				}
	// 			}
	// 			thStr = thStr.slice(0, thStr.length-2);
	// 			if ( htmlDoctype !== '5' ) {
	// 				$(value).attr('summary', thStr + '로 구성된 표입니다.' );
	// 			} else if ( htmlDoctype === '5' ) {
	// 				$(value).find(' > caption > p').text( thStr + '에 대한 표 입니다.' );
	// 			}
	// 		}

	// 	});

	// }

	// /*
	// 사용 방법;
	// ex.1) addTableCaption('table');
	// ex.2) var exe = addTableCaption('table');

	// table에 data-th-collect="false" 이 속성을 부여하면 
	// th에 있는 텍스트를 수집하지 않습니다.

	// */
	// var c = addTableCaption('table');


	// //동영상 게시판 동영상 삽입(유튜브)
	// function ytMovie ( $el ){
	// 	var size = {
	// 			w: 498,
	// 			h: 287
	// 		},
	// 		src = $el.data('yt-src'),
	// 		txt = $el.data('yt-txt'),
	// 		movieStr = '<iframe width="' + size.w + '" height="' + size.h + '" src="' + src + '" frameborder="0" allowfullscreen></iframe>';

	// 	$('.video .video_view').html('').append( movieStr );
	// 	$('.video .video_txt').html('').append( txt );
	// }

	// $('.video_list li').on('click', 'a', function(){
	// 	ytMovie( $(this) );
	// });

	// /* 달력 */     
	// if ( $(".datepicker_wrap").length > 0 ) {
	// 	$(".datepicker_wrap").datepicker();
	// }
	// //option값
	// //data-case="twoPop" (한팝업에 두개)
	// //data-link="start" (기간제한 달력중 시작일 설정 달력 일 경우)
	// //data-link="end" (기간제한 달력중 종료일 설정 달력 일 경우)
	// //data-max="" (달력 최대값 제한)
	// //data-min="" (달력 최소값 제한)
	// //data-type="month"
	// //data-target="two_pop01" (달력이 생성될 팝업의 위치)
	// //data-role="common-ui-layerPop-button" (팝업 열기)


	// //디자인 체크박스 
	// $(this).on('click', '.checkWrap label', function ( event ) {
		
	// 	var status = $(this).hasClass('on');	
	// 	if (!status) 
	// 	{
	// 		$(this).addClass('on').children('span').text('선택');
	// 		$(this).parent().children('input[type=checkbox]').attr("checked","checked");
	// 	}
	// 	else
	// 	{	
	// 		$(this).removeClass('on').find('span').text('미선택');
	// 		$(this).parent().children('input[type=checkbox]').removeAttr("checked");
	// 	}

	// 	return event.preventDefault();
	// });

	// //lnb 보류
	// // var $lnb = $('#leftWrap');}
	// // $lnb.find(' > .snb01dep > li > a').on('click', function( event ){
	// // 	event.preventDefault();
	// // 	$(this).parent().addClass('on').siblings().removeClass('on');
	// // });

	// //사업소 - 홍보관 층별안내
	// var $floorMap = $('.floor_map'),
	// 	$number = $floorMap.find('.cont_list > li > a'),
	// 	$cont = $floorMap.find('.cont_list .cont');

	// $number.on('click', function(){
	// 	var idx = $(this).parent().index(),
	// 		$cont_list = $cont.parents('.cont_list')
	// 	$(this).addClass('on').parent().siblings('li').find('> a').removeClass('on');
	// 	$cont.removeClass('on').eq(idx).addClass('on');
	// 	$('html, body').scrollTop( $cont_list.offset().top - ( $(window).height() - $cont_list.height() ) );
	// });

    // //slide
    // $('.slide').aSlide({
	//     duration: 300,
	//     interval: 3000,
	//     auto: true,
	//     marginBottom:0
	// });

	// $('.slide.type02').aSlide({
	//     duration: 300,
	//     interval: 2400,
	//     auto: false,
	//     marginBottom:0,
	//     pager: false
	// });

	// //메인 배너 슬라이드
	// $('.banner_slide').aSlide({
	//     duration: 300,
	//     interval: 2400,
	//     auto: true,
	//     marginBottom:0,
	//     pager: true,
	//     pagerAlign: 'right'
	// });


	// //지도 툴팁 띄우기
	// $('.mapMaker').on('click', function(){
    //     if ( $(this).next('.map_info_tip').length > 0 )
    //         return false;

    //     var $marker = $(this),
    //         _title = $marker.data('title'),
    //         _content = $marker.data('content'),
    //         _pos = $marker.position(),
    //         _html = '<div class="map_info_tip">' +
    //                     '<div class="info">' +
    //                         '<storong class="head">'+ _title +'</storong>' +
    //                         '<p>'+ _content +'</p>' +
    //                         '<span class="arrow"><img src="/publish/img/com/map_tip_arrow.png" alt="화살표"></span>' +
    //                     '</div>' +
    //                     '<a href="javascript:;" class="close">' +
    //                         '<img src="/publish/img/ico/ico_map_close.png" alt="지도 정보 닫기">' +
    //                     '</a>' +
    //                 '</div>';

    //     $marker.after(_html);

    //     var $tip = $marker.next('.map_info_tip'),
    //         tipWidth = $tip.outerWidth() - 40,
    //         tipHeight = $tip.outerHeight();

    //     // $tip.find('.arrow').css({ top: $tip.outerHeight() - 38 });
    //     $tip.find('.info').attr('tabindex', 0).focus()
    //     $tip.css({top: _pos.top - tipHeight, left: _pos.left - tipWidth})
    //     .find('a.close').on('click', function(){
    //         $marker.focus();
    //         $(this).parents('.map_info_tip').remove();
    //     });

    //     //닫기 전 포커스 이탈 방지
    //     $tip.on('keydown', function( event ){
    //     	var e = event,
    //     		$target = $(e.target),
    //     		keycode = e.keyCode,
    //     		_shiftKey = e.shiftKey;

    //         if ( keycode == 9 && $target.hasClass('close') )
    //             setTimeout(function(){ $tip.find('.info').attr('tabindex', 0).focus(); }, 15);
    //         else if ( keycode == 9 && _shiftKey && $target.hasClass('info') )
    //             setTimeout(function(){ $tip.find('a.close').focus(); }, 15);
    //     });
    // });

	// $('ul.snsShare a.print').on('click', function(){
	// 	var Obj = $('#contents'),
	// 		W = Obj.outerWidth(),        //screen.availWidth; 
	//     	H = Obj.outerHeight();       //screen.availHeight;
	//     	features = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=" + W + ",height=" + H + ",left=0,top=0"; 
	//     	PrintPage = window.open("about:blank", Obj.id, features); 

	//     PrintPage.document.open(); 
	//     PrintPage.document.write("<html><head><title></title></head>\n<body>" + Obj.html() + "\n</body></html>");
	//     PrintPage.document.close(); 

	//     PrintPage.document.title = document.domain; 
	//     PrintPage.print(PrintPage.location.reload()); 
	// });

	// //url 복사하기
	// $('ul.snsShare a.mail').on('click', function(){
	// 	prompt('이글의 트랙백 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요.', location.href);
	// });

	// //퀵메뉴
    // var $quick = $('#quick');

    // //퀵메뉴 리사이징 시 간격 조정
    // $(window).on('resize', function(){
    //     var wh = $(this).height(),
    //         liHeight = 0,
    //         _padding = 0;
    //     for ( var i=0; i<$quick.find('> ul > li').length; i++ ) {
    //         liHeight += $quick.find('> ul > li').eq(i).height();
    //     }
    //     _padding = ( wh - liHeight ) / $quick.find('> ul > li').length;
    //     $quick.find('> ul > li').each(function(idx, val){
    //         if ( idx == 0 ) {
    //             $(this).css('padding-top', _padding / 2 );
    //         } else if ( idx == ( $quick.find('> ul > li').length - 1 ) ) {
    //             $(this).css({ 'padding-top': _padding,  'padding-bottom': _padding/2 });
    //         } else {
    //             $(this).css('padding-top', _padding);
    //         }
    //     });
    // }).trigger('resize');


    // //퀵메뉴 통합검색, 글쓰기
    // $quick.find('> ul > li > a').on('click', function( event ){
    //     var $this = $(this),
    //         quickKlassArr = ['search', 'write', 'office', 'event'],    //레이어를 띄우는 버튼이라면 여기에 a태그의 클래스 명을 'btn_'를 제외하고 추가 시켜준다.
    //         ctrl = false;
    //         klass = $this.get(0).className.substr(4);

    //     for ( var i=0; i<quickKlassArr.length; i++ ) {
    //          if ( $(this).hasClass( 'btn_' + quickKlassArr[i] ) ) 
    //             ctrl = true;
    //     }

    //     if ( ctrl && !$quick.hasClass('opened') ) {
    //     	$quick.addClass('opened');
        	
    //         $.ajax({
    //             url: '/khnp/quick/' + klass + '.do',
    //             success: function ( data ) {
    //                 $this.parent().append(data);
    //                 //검색 또는 글쓰기
    //                 if ( klass == 'search' || klass == 'write' ) {
	//                     	labelPlaceHolder();
	//                         $this.siblings('.quick_layer').addClass('on');
	//                         $('#wrap').append('<div class="dimm" />');
	//                         $this.siblings('.quick_layer').find('a.close').on('click', function(){
	//                             $(this).parent('.quick_layer').remove();
	//                             $('#wrap').find('> .dimm').remove();
	//                             $quick.removeClass('opened');
	//                         });
	//                         if ( $this.get(0).className.substr(4) == 'write' )
	//                             //퀵메뉴 글쓰기 정렬 디자인
	//                             $('#quick .quick_layer.write .write_list li:nth-child(3n+1)').css('border', 0);
	//                 }
    //                 //사업소
    //                 else if ( klass == 'office' ) {
    //                     var $parent = $this.parent(),
    //                         posY = $parent.position().top + parseInt( $parent.css('padding-top'), 10 ) + ($parent.height()/2);
    //                     $this.parent().find('.office_menu').css('padding-top', posY).stop().animate({ width: 177 }, 300, 'swing');
    //                     $this.parent().find('.office_menu').on('mouseleave', function(){
    //                         $(this).stop().animate({ width: 0 }, 300, 'swing', function(){
    //                             $(this).remove();
    //                             $quick.removeClass('opened');
    //                         });
    //                     });
    //                 } else if ( klass == 'event' ) {
    //                 	var $parent = $this.parent();
    //                 	//이벤트 비주얼 슬라이드
	// 					$('#quick .event_layer .evt_slide').aSlide({
	// 					    duration: 500, interval: 3000, auto: true, marginBottom:0, pager: true, pagerAlign: 'right', pagerResize: true
	// 					});
	// 					colMargin();
	// 					setTimeout(function(){
	// 						$parent.find('.event_layer').stop().animate({ right: 0 }, 500, 'swing', function(){
	// 							$('html').css('overflow-y', 'hidden');
    //                 		});
	// 					}, 300);
	// 					$('#quick .event_layer > a.close').on('click', function ( event ) {
	// 						$('html').css('overflow-y', 'auto');
	// 						$parent.find('.event_layer').stop().animate({ right: '-100%' }, 500, 'swing', function(){
	// 							$('#quick .event_layer').remove();
    //                 		});
    //                 		$quick.removeClass('opened');
	// 						return event.preventDefault();
	// 					});
    //                 }
    //             }
    //         });
    //     }
    //     return event.preventDefault();
    // });
	
	// //검색옵션
	// $('.fake_select a.select_title').on('click', function( event ){
    //     var $this = $(this);
    //     $this.siblings('.select_list').css('top', $this.outerHeight(true) ).show();
    //     if ( $(this).parent().hasClass('term') ) {
    //         $this.siblings('.select_list').find('> ul > li > dl > dd a.apply').on('click', function( event ){
    //             $this.siblings('.selected_result').find('em.from').text( $('#calendar_wrap input').eq(0).val() + '~\n' );
    //             $this.siblings('.selected_result').find('em.to').text( $('#calendar_wrap input').eq(1).val() );
    //             $this.siblings('.select_list').hide();
    //             return event.preventDefault();
    //         });
    //     } else if ( $(this).parent().hasClass('detail') ) {
    //         $this.siblings('.select_list').find('a.close').on('click', function( event ) {
    //             $this.siblings('.select_list').hide();
    //             return event.preventDefault();
    //         });
    //     } else {
    //         $this.siblings('.select_list').find('> ul > li > a').on('click', function( event ){
    //             event.preventDefault();
    //             $this.siblings('.selected_result').find('em').text( $(this).text() );
    //             $this.siblings('.select_list').hide();
    //             $(this).parent().addClass('selected').siblings().removeClass('selected');
    //             return event.preventDefault();
    //         });
    //     }
    //     return event.preventDefault();
    // });

    // $('.fake_select.term a.select_title').on('click', function( event ){

    // });

    // $('.srchOption a.btn_optCongig').on('click', function( event ){
    //     if ( $('.srchOption').hasClass('on') )
    //         $('.srchOption').removeClass('on');
    //     else
    //         $('.srchOption').addClass('on');
    //    return event.preventDefault(); 
    // });

    // //캘린더 암막
    // $('[data-role=common-ui-layerPop-button]').on('click', function( event ){
    // 	$('#container').addClass('cal_dimm');
    // });

    // $('.calendarClose2 a.btn').on('click', function(){
    // 	$('#container').removeClass('cal_dimm');
    // });

    // $(window).on('resize', function(){
    // 	var win = $(this),
    //         defaultWidth = 980,
    //         quickWidth = $('#quick').outerWidth();
        
    //     $('#intro').height( $(window).height() );
            
    // 	if ( win.width() <= ( defaultWidth + (quickWidth*2) ) ) {
    // 		if ( !$('#wrap').hasClass('office') ) $('#wrap').css('margin-right', 0);
    // 		$('#quick').css('right', -1*$('#quick').width());
    // 		$('#quick .open_quick').css('top', ($(this).height()/2)+($('#quick .open_quick').height()/2)).show();
    // 		$('#quick .open_quick').on('click', function( event ){
    // 			$('#quick').css('right', 0);
    // 			$(this).hide();
    // 			return event.preventDefault();
    // 		});
    //         $('#intro').addClass('quick_closed');
    // 	} else {
    // 		if ( !$('#wrap').hasClass('office') ) $('#wrap').css('margin-right', 143);
    // 		$('#quick .open_quick').hide();
    // 		$('#quick').css('right', 0);
    //         $('#intro').removeClass('quick_closed');
    // 	}
    // }).trigger('resize');

    // //전체메뉴
    // $('.mu_allview').on('click', function(){
    // 	if ( $(this).parent().find('.all_menu').length <= 0 ) {
    // 		$(this).parent().append('<div class="all_menu"></div>');
    // 	}
    //     //메뉴 삽입
    //     $('.all_menu').load('/publish/html/00/all_menu.html', function(){
    //         $(this).addClass('open');

    //         //닫기
    //         $('.all_menu a.close').on('click', function(event){
    //             event.preventDefault();
    //             $('.all_menu').removeClass('dep3_open').html('');;
    //         });

    //         //하위메뉴 펼침
    //         $('.all_menu .dep3_close a').on('click', function(event){
    //             event.preventDefault();
    //             if ( $('.all_menu').hasClass('dep3_open') ) {
    //                 $('.all_menu').removeClass('dep3_open');
    //                 $(this).text('하위메뉴 열기');
    //             } else {
    //                 $('.all_menu').addClass('dep3_open');
    //                 $(this).text('하위메뉴 닫기');
    //             }
    //         });

    //         //맞춤형 컨텐츠
    //         $('.all_menu .visit_type dd a').on('click', function(){
    //             $(this).parent('li').addClass('on').siblings('li').removeClass('on');
    //             var filterStr = $(this).data('filter-str');
    //             $('.all_menu .all_depth2 a').removeClass('choice');
    //             $('.all_menu .all_depth2 a[data-filter]').each(function(idx, val){
    //                 var filter = $(this).attr('data-filter');
    //                 if( filter.match(filterStr) ) 
    //                     $(this).addClass('choice');
    //             });
    //         });

    //     });
    // });

	// //서브메인 (원자력) 텍스트 슬라이드
	// var $slideText = $('.slide_text');
    // var slideTextCtrlVar = true;
    // $slideText.find('.slideshow > ul').css('margin-left', -$slideText.find('.slideshow > ul > li').outerWidth());
    // $slideText.find('a.ctrl').on('click', function( event ){
    //     var $ul = $slideText.find('.slideshow > ul'),
    //         moveDist = $ul.find('li').outerWidth(),
    //         pageLength = $ul.find('li').length,
    //         currentPos = parseInt($ul.css('margin-left'), 10),
    //         hasPrev = $(this).hasClass('prev'),
    //         btnKlass = hasPrev ? 'prev' : 'next';
    //         revBtnKlass = !hasPrev ? 'prev' : 'next',
    //         dir = hasPrev ? '+=' : '-=',
    //         cond = hasPrev ? (currentPos < 0) : (currentPos > (-1*moveDist*(pageLength-1))),
    //         lastIdx = $ul.find('li').last().index();

    //     if ( $(this).hasClass(btnKlass) && cond && slideTextCtrlVar ){
    //         slideTextCtrlVar = false;
    //         $ul.stop().animate({marginLeft: dir+moveDist}, 300, 'swing', function(){
    //             var eq = hasPrev ? lastIdx : 0,
    //                 revEq = !hasPrev ? lastIdx : 0,
    //                 insert = hasPrev ? 'Before' : 'After',
    //                 dir = !hasPrev ? '+=' : '-=';
    //                 slideTextCtrlVar = true;
    //            $ul.find('li').eq( eq )['insert' + insert]( $ul.find('li').eq( revEq ) );
    //            $ul.css('margin-left', dir+moveDist);
    //         });
    //     }
    //     // $slideText.find('a.'+revBtnKlass).css('opacity', 1);
    //     return event.preventDefault();
    // });

	// /*이벤트 배너*/
	// $('.office_evt_banner').aSlide({
	// 	duration: 500,
	// 	interval: 3000,
	// 	auto: true,
	// 	marginBottom:0,
	// 	pager: true,
	// 	pagerAlign: 'right'
	// });

	// $('.office_live').aSlide({
	// 	duration: 500,
	// 	interval: 3000,
	// 	auto: true,
	// 	marginBottom:0,
	// 	pager: true,
	// 	pagerAlign: 'center'
	// });

	// /*사업소 상단영역*/
	// //gnb
	// $('.office .headerWrap .depth1 > li').on('mouseenter focusin',function(){
	// 	$('.bg_gnb_over,.office .headerWrap .depth2').slideDown('fast');
	// });
	// $('.office header').on('mouseleave focusout',function(){
	// 	$('.bg_gnb_over,.office .headerWrap .depth2').slideUp('fast');
	// });
	// //사업소 click
	// $( ".office .bis_place dt a" ).click(function(){
	// $(this).toggleClass('on');
	// 	if ($(this).hasClass('on')) {
	// 		$(this).addClass("on").parent().siblings('dd').show();
	// 	} else {
	// 		$(this).parent().siblings('dd').hide();
	// 	}
	// 	return false;
	// });
	// $( ".office .bis_place dd li:last-child" ).on('focusout',function(){
	// 	$(this).parents('.bis_place dd').siblings('dt').find('a').removeClass('on');
	// 	$(this).parents('.bis_place dd').hide();
	// 	});
	// //검색창
	// $('.sch_area > a').click(function(){
	// $(this).toggleClass('on');
	// 	if ($(this).hasClass('on')) {
	// 		$(this).addClass("on").parent().find('form').show();
	// 	} else {
	// 		$(this).parent().find('form').hide();
	// 	}
	// 	return false;
	// });

});

