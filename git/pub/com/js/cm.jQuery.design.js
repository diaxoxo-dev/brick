// 임시레이아웃용
// TOP MENU
function tempHeader(){document.write('<img src="/publish/img/temp/tempHeader.png">');}
function tempSidebar(){document.write('<img src="/publish/img/temp/tempSidebar.png">');}
function tempFooter(){document.write('<img src="/publish/img/temp/tempFooter.png">');}

(function(){
	//Part : IMPORT
	var codeview=new Array();
	codeview.push({'url':'/publish/com/js/cm.jQuery.browser.check.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.selectbox.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.mCustomScrollbar.concat.min.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.mpopup.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.aslide.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.aCarousel.js', 'cashbuster':false});
	codeview.push({'url':'/publish/guide/com/js/datepicker.js', 'cashbuster':false});
	codeview.push({'url':'/publish/guide/com/js/mobile.jQuery.layerPop.js', 'cashbuster':false});

	for(var a=0, atotal=codeview.length; a<atotal; a++){
		document.write('<script src="'+codeview[a].url+((codeview[a].cashbuster)?'?cb='+window._CACHE_BUSTER:'')+'" charset="utf-8"></'+'script>');
	};
})();



$(function(){
	
	/*	
	 * Part: loadExternalPage plug-in
	 */			
	$.fn.loadExternalPage = function(options){
		var 
			defaults = {
				path:''
			},
			settings = $.extend({}, defaults, options);
			
			this.each(function(){
								
//				var $this = $(this);
				
				//Default Action
				$(this).load(settings.path);			

			});
			
			return this;
		}
			
		/*	
		 * Part: 약관동의 외부페이지로드
		 */
		$('#requestAgreeBox').loadExternalPage({
		path:'/publish/html/00/com_personalInfoAgree.html #termsBox'		
		});

		// 견학신청
		
		
		
		$('.boxWrap.listInfo.agree .sub_dsc').load('/publish/html/00/com_vesitRequestAgree.html');
		
		
	
	/*
		Part : Layout
	*/

	window.colMargin = function(){
		/*Margin*/
		// Margin adjustments when the word(imgTxtV) containing
		//variable announce
		var $splitImgTxtV = $('.split, .lst');
		var $splitImgTxtVColSec = $splitImgTxtV.find('>.colSec');
		
		/*Depending on the class column margin control*/
		$splitImgTxtVColSec.each(function(index){
			//variable announce
			var colIndexOf = $(this).parent().attr('class').indexOf('col')+3;
			var intCol = Number($(this).parent().attr('class').charAt(colIndexOf));
			var thisIndex = Number($(this).index() + 1);

			if(thisIndex % intCol == 0){
				$(this).css('margin-right', '0px');
				if($(this).parent().is('ol')){
					$(this).css('padding-right', '0px');
				}
			}//end if

			if(thisIndex <= intCol){
				$(this).css('margin-top',"0px");
			}//end if

		}); //end each
	};
	colMargin();
	

	//사업소 lnb 갯수 체크 후 col 클래스 자동 추가
	var $officeLnb = $('.office #leftWrap');
	$officeLnb.each(function(i, val){
		var $lnbUl =$(this).find('.snb01dep'),
			lnbLength = $lnbUl.find('>li').length;
		$lnbUl.addClass( 'col' + lnbLength );
	});
	
	// lnb 마지막 메뉴 last-child IE7, 8 에서만 적용
	if ( $('body').hasClass('ie7') || $('body').hasClass('ie8') ) {
		$('.office #leftWrap.tabWrap .tab_menu li:last-child a').css({
			'border-top-right-radius': '9px',
			'border-right':'0 none'
		});
	}

	//Margin of the last element control
	//variable announce
	var $wrapContent =$('.bodyContent, .dep02Sec, .dep03Sec, .pop_content, .boxWrap');

	$wrapContent.each(function(){
		$(this).children().last().css('margin-bottom', '0px');
	}); //end each

	//이미지 dimmed 처리 태그 삽입
	$('.caption').append('<span class="dimm"></span>');

	//저작물 표시 테이블 
	if ( $('#wrap').hasClass('office') ) {
		var $staffNccl = $('.staffNccl .staff_info tr');
		$staffNccl.find('> *:first-child').addClass('lft');
		$staffNccl.find('> *:last-child').addClass('rht');
	}

	//사이트맵 디자인
	var $sitemap = $('.sitemap');
    $sitemap.find('> dl.box:nth-child(3n)').css('margin-right', 0);
    $sitemap.find('> dl.box').each(function(idx, val){
        if ( $(this).index() < 3 ) 
            $(this).css('margin-top', 0);
    });
    
    //메인 최근 게시물
    $('#bbsLatest article a.photo > img').css('opacity', 0.35);
    // $('#bbsLatest article a.photo').append('<span class="dimm" />');

    $('.live_operation.type02 table tbody tr *:nth-child(even)').css('background','#fafafa');


	//플러그인 적용 - 여기에서 플러그인 실행 구문을 추가
	window._initial = function ( selector ) {

		//셀렉트박스
		$(selector).each(function(i, val){
			if ( $(this).parent()[0].nodeName !== "TD" ) {
				$(this).selectbox();
				// .parent().find(".select-list").mCustomScrollbar({
				// 	theme:"minimal"
				// });
			} else {
				$(this).selectbox();
			}
		});

	}

	_initial('select');


});