// 사이트맵

$(function(){
	$('.stmap02dep li').has('ul').addClass('has');
	
	var $btnAllView = $('.sitemapWrap > .btnWrap > a');
	var $stmapDepCont = $('.menuBox');
	var $stmap2Dep = $('.stmap02dep>li');
	var $stmap2DepA = $('.stmap02dep>li>a');
	var $stmap3Dep = $('.stmap03dep>li');
	var $stmap3DepA = $('.stmap03dep>li>a');
	
	//하위메뉴 펼침
	$btnAllView.click(function(e){ 
		e.preventDefault();
		if($(this).hasClass('open')){ 
            if($(this).find('ul')){ 
                $(this).removeClass('open').find('span').text('메뉴모두 열기');
				$stmapDepCont.removeClass('open');
				//$stmapDepOn.removeClass('on');
			}
		} else{
			$(this).addClass('open').find('span').text('메뉴모두 닫기');
			$stmapDepCont.addClass('open');
		}
		
	});
	
	// 2dep확장
	$stmap2DepA.click(function(e){
		if( $(this).parent().hasClass('has') ) {
		
			e.preventDefault();
			$stmapDepCont.removeClass('open');
			$btnAllView.removeClass('open').find('span').text('메뉴모두 열기');
			if($(this).parent().hasClass('on')){ 
			   $(this).parent().removeClass('on');
			} else{
				$stmap2Dep.removeClass('on');
				$(this).parent().addClass('on');			
			}
		}
	});
	
	// 3dep확장
	$stmap3DepA.click(function(e){ 
		if( $(this).parent().hasClass('has') ) {
			
			e.preventDefault();
			$stmapDepCont.removeClass('open');
			$btnAllView.removeClass('open').find('span').text('메뉴모두 열기');
			if($(this).parent().hasClass('on')){ 
			   $(this).parent().removeClass('on');
			   
			} else {
				$stmap3Dep.removeClass('on');
				$(this).parent().addClass('on');
			}
		}
	});
})