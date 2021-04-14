window.commonJs = window.commonJs || {}

var commonJs = function(){
	var common = {
			init : function(){
				common.deviceOpt();
				common.diviceSize();
			},
			deviceOpt : function(){
				if (navigator.userAgent.indexOf('iPhone') != -1) {  
						// 주소창 숨기기 아이폰인 경우  
						addEventListener("load", function() {        
						setTimeout(hideURLbar, 0);}, false);
						// 주소창 숨기기 기기 분기 클래스 추가
						$("body").addClass("ios");
					} 
					else {     
					//아이폰이 아닌 경우
					hideURLbar();
					// 주소창 숨기기 기기 분기 클래스 추가
					$("body").addClass("android");
					}
				function hideURLbar(){ 
					window.scrollTo(0, 1);
				}
			},
			diviceSize : function($deviceHeight){
				var $deviceHeight = $(window).height(); // 장치높이
				var $contH = document.body.clientHeight; // 컨텐츠 높이 
				$(".wrap").height($deviceHeight);
			}
		};
		return common;
}();

$(function(){
	commonJs.init();
});
