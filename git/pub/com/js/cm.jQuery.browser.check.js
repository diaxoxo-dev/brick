/**
* @desc 브라우저의 종류 및 IE의 경우 버전까지 체크해주는 함수.
*
* @method browserCheck
* @param {Boolean} compatibilityView, 호환성보기 사용 여부
* @param {Boolean} returnText, 현재 브라우저 명을 반환할 것인지 여부
* @return {String} return_text 변수를 반환하며 returnText 매개변수의 여부에 따라 출력하지 않을 수 있다.
*
* @author mkpub2705@adcapsule.co.kr
*/

	window.browserCheck = function (compatibilityView, returnText) {
		'use strict'
		var _ua, trident, rv, css_class, return_text;
		_ua = navigator.userAgent.toLowerCase();
		trident = _ua.match(/trident\/(\d.\d)/i) || _ua.match(/rv:(\d.\d)/i);
		rv = -1;
		css_class = '';
		return_text = '';

		if ( compatibilityView === undefined || trident === null ) compatibilityView = false;

		if ( compatibilityView && trident != null ) {
			//IE 11,10,9,8
	    	switch (trident[1]) {
	    		case '7.0': css_class = "ie11";
	    		break;
	    		case '6.0': css_class = "ie10";
	    		break;
	    		case '5.0': css_class = "ie9";
	    		break;
	    		case '4.0': css_class = "ie8";
	    		break;
	    		default: css_class = "ie7";
	    	}
		} else {
			if ( _ua.indexOf('msie 7') != -1 ) css_class = 'ie7';
			else if ( _ua.indexOf('msie 8') != -1 ) css_class = 'ie8';
			else if ( _ua.indexOf('msie 9') != -1 ) css_class = 'ie9';
			else if ( _ua.indexOf('msie 10') != -1 ) css_class = 'ie10';
			else if (_ua.indexOf('msie') == -1 && trident && trident[1] == '7.0' ) css_class = 'ie11';
		}
	     
	    //other
	    if (_ua.indexOf("safari") != -1 && _ua.indexOf('version') != -1) css_class = 'safari'; 
	    else if (_ua.indexOf("chrome") != -1 && _ua.indexOf("opr") == -1) css_class = 'chrome';
	    else if (_ua.indexOf("opera") != -1 || _ua.indexOf("opr") != -1 || _ua.indexOf("opera") != -1) css_class = 'opera';
	    else if (_ua.indexOf("firefox") != -1) css_class = 'firefox'; 





	    if ( document.body.className.length >= 1 ) {
	    	document.body.className += ' '+css_class;
	    } else {
	    	document.body.className += css_class;
		}
}


$(window).on('load', function(){
	browserCheck();
});