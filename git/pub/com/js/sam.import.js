/****************************************/
/*	Name: PUBLISHING GUIDE
/*	PART: SAMPLE IMPORT Javascript
/*	Version: 1.0
/*	Author: [써냐]BLUEWEBD™
/****************************************/

(function(){
	var codeview=new Array();
	
	codeview.push({'url':'/publish/com/js/jquery-1.11.2.min.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.selectbox.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/jquery.mCustomScrollbar.concat.min.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/cm.jQuery.design.js', 'cashbuster':false});
	codeview.push({'url':'/publish/com/js/cm.jQuery.ui.js', 'cashbuster':false});

	for(var a=0, atotal=codeview.length; a<atotal; a++){
		document.write('<script src="'+codeview[a].url+((codeview[a].cashbuster)?'?cb='+window._CACHE_BUSTER:'')+'" charset="utf-8"></'+'script>');		
	};
})();