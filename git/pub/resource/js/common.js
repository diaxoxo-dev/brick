window.commonJs = window.commonJs || {}

var commonJs = function(){
	var common = {
			init : function(){
				common.autoGnb();
			},
			autoGnb : function(){
				$(".gnb__all").on("click" , function(event){
					event.preventDefault();
					$(this).siblings(".nav").toggleClass("active");
				});
			}
		};
		return common;
}();

$(function(){
	commonJs.init();
});
