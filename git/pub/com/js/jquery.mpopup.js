//아이프레임으로 팝업 띄우기

(function(){
  (function($, window, document){
    //플러그인 네임
    var pluginName = "mpopup";
    //버전
    var VERSION = "v0.0.1";
    //기본 설정 세팅
    var defaults = {};
    //플러그인 함수
    var Plugin = (function(){
      function Plugin(element, options){
        this.element = element;
        this.options = $.extend(true, {}, defaults, options);
        this._name = pluginName;
        this._width = $(element).data('width');
        this._height = $(element).data('height');
        this._src = $(element).attr('href');
        this._type = $(element).data('type');
        this._init();
      }
      return Plugin;
    })();

    //초기화
    Plugin.prototype._init = function(){
        var that = this,
        	options = this.options,
      		$element = $(this.element);
        
          $element.on('click', function( event ){
            event.preventDefault();
            if ( that._type === 'window' ) that._winOpen();
            else if ( that._type === 'layer' ) that._pushPopup();
          });        

    };

    //클릭시 실행할 프로토타입
    Plugin.prototype._pushPopup = function (  ) {
    	var that = this,
        	options = this.options,
      		$element = $(this.element),
      		ifrmHTML = '';

        $.ajax({
          url: that._src,
          async: false,
          success: function(data){
            ifrmHTML = '<div class="mpopup-content-wrapper">' +
                        '<div class="mpopup-content"></div>' +
                        '</div>';

            if ( $('.mpopup-content-wrapper').length <= 0 ) {
              $('#container').addClass('hasPopup');
              $element.after(ifrmHTML);
              $('.mpopup-content-wrapper').css({ opacity: 0 });
              $('.mpopup-content-wrapper .mpopup-content').append( $(data).find('.pop_header').parent('.pop_wrap'));
              $('.mpopup-content-wrapper').append('<div class="pop_dimmed"><span class="ir">암막효과</span></div>');
              $('.mpopup-content-wrapper').find('.pop_dimmed').css({ opacity: 0.7, backgroundColor:'#000' });
              $('.mpopup-content-wrapper').find('.close_guide a').removeAttr('onclick');
              that.originHeight = $('.mpopup-content-wrapper .mpopup-content').find('.pop_content').height();
              that.originWidth = $('.mpopup-content-wrapper .mpopup-content').find('.pop_content').width();
              console.log('w : '+that.originWidth, '  h : '+that.originHeight);
              that.ifrOnload();
            } else {
              $('.mpopup-content').attr('tabindex', 0).focus();
            }

          },
          error: function(x, t, s){
            alert(x, t, s)
          }
        });

    };

    Plugin.prototype._winOpen = function(){
      var that = this,
          options = this.options,
          $element = $(this.element);
      
      var newWin = window.open(that._src, '_blank', 'width=' + that._width + ', height=' + that._height);
    }

    Plugin.prototype._resize = function(popSelector, w, h){
      var that = this,
          options = this.options,
          $element = $(this.element),
          $popWrap = popSelector.parents('.mpopup-content-wrapper'),
          $popCont = popSelector.parents('.mpopup-content'),
          $realPop = popSelector;
          $realPopHeader = $realPop.find('.pop_header'),
          $realPopCont = $realPop.find('.pop_content'),
          timerCtrl = true,
          //firefox 대응
          _uaFF = navigator.userAgent.toLowerCase().match('firefox'),
          contentPaddingFF = [$realPopCont.css('padding-top'), $realPopCont.css('padding-right'), $realPopCont.css('padding-bottom'), $realPopCont.css('padding-left')],
          contentBorderFF = [$realPopCont.css('border-top-width'), $realPopCont.css('border-right-width'), $realPopCont.css('border-bottom-width'), $realPopCont.css('border-left-width')],
          // contentPadding = _uaFF ? that.cssSplit(contentPaddingFF) : that.cssSplit( $realPopCont.css('padding').split(' ') ),
          // contentBorder = _uaFF ? that.cssSplit(contentBorderFF) : that.cssSplit( $realPopCont.css('border-width').split(' ') ),
          contentPadding = that.cssSplit(contentPaddingFF),
          contentBorder = that.cssSplit(contentBorderFF),
          outerSpaceHorizontal = contentPadding.hori + contentBorder.hori,
          outerSpaceVertical = contentPadding.vert + contentBorder.vert,
          scrollBarWidth = 17,
          verticalSpace = 30*2;

      var popHeight01 = $(window).height() - ($realPopHeader.outerHeight() + outerSpaceVertical + verticalSpace),
          popWidth01 = popWidth01 >= (that.originWidth+scrollBarWidth) ? that.originWidth : (that.originWidth + scrollBarWidth - contentBorder.hori);

      $popWrap.css({ width: $(window).width(), height: $(window).height() });

      if ( that.originHeight < ($(window).height() - outerSpaceVertical - 60 - $realPopHeader.outerHeight()) ) {
        $realPopCont.css({ height: popHeight01, maxHeight: that.originHeight, width: that.originWidth, overflowY: 'auto' });
      } else {
        $realPopCont.css({ height: popHeight01, width: that.originWidth+scrollBarWidth, overflowY: 'scroll' });
      }

      $popCont.css({ marginLeft: -1 * $popCont.width() / 2, marginTop: -1 * $realPop.height() / 2 });
      
      if ( that.originHeight > $(window).height() ) {
        console.log('a');
        $realPopCont.css({ width: popWidth01, height: popHeight01 });
      } else {
        $popCont.css({ marginLeft: -1 * $popCont.width() / 2, marginTop: -1 * $popCont.height() / 2 });
      }
    };

    Plugin.prototype._visible = function (  ) {
    	var that = this,
        	options = this.options,
      		$element = $(this.element),
      		ifr = $element.next('.mpopup-content-wrapper').find('.mpopup-content .pop_wrap');
      		_width = ifr.outerWidth(),
      		_height = ifr.outerHeight();

      $(window).on('resize', function(){
        that._resize(ifr, _width, _height);
      }).trigger('resize');

      	$element.next('.mpopup-content-wrapper').stop().animate({ opacity: 1 }, 300, function(){
          if ( $('head').find('style#mopopupStyle').length < 0 ) {
            $('head').append('<style id="#mopopupStyle">.mpopup-no-scroll{height:100%;overflow:hidden;}</style>').find('style');
          }
          $('body').addClass('mpopup-no-scroll');
      		$(this).find('.mpopup-content').attr('tabindex', 0).focus();
      		that._close();
      		that._keydown();
        });
        _initial('.pop_wrap select');
    };

    Plugin.prototype.ifrOnload = function(){
    	var that = this,
        	options = this.options,
      		$element = $(this.element);
      
      that._visible();

    };

    Plugin.prototype._keydown = function ( event ) {
    	var that = this,
        	options = this.options,
      		$element = $(this.element),
      		ifr = $element.next('.mpopup-content-wrapper'),
          content = $element.next('.mpopup-content-wrapper').find('.mpopup-content').attr('tabindex', 0);

      	ifr.find('a.close').on('keydown', function( event ) {
      		var e = window.event || event,
              key = e.keyCode;

      		if ( key === 9 && !e.shiftKey ) {
      			setTimeout(function(){
      				content.attr('tabindex', 0).focus();
      			}, 15);
      		}
      	});

      	content.on('keydown', function( event ) {
      		var e = window.event || event,
              key = e.keyCode;

      		if ( key === 9 && e.shiftKey ) {
      			setTimeout(function(){
      				ifr.find('a.close').focus();
      			}, 15);
      		}
      	});
    }

    Plugin.prototype._close = function ( event ) {
    	var that = this,
        	options = this.options,
      		$element = $(this.element),
      		ifr = $element.next('.mpopup-content-wrapper');

      	ifr.find('a.close').on('click', function( event ){
          event.preventDefault(); //FF 에서 event를 못받아 올수 있음. a태그 기본 기능 차단
      		$element.next('.mpopup-content-wrapper').stop().animate({opacity: 0}, 300, function(){
      			$(this).remove();
            $element.focus();
            $('#container').removeClass('hasPopup');
            $('body').removeClass('mpopup-no-scroll');
      		});
      	});
    };

    Plugin.prototype.cssSplit = function ( css ){
      var i=0, rtnCss = {};

      for ( ; i<css.length; i+=1 ) {
        // if (css[i].match('px')) //이 조건문은 선택사항임
          css[i] = parseFloat(css[i]);
      }
      switch ( css.length ) {
        case 2: rtnCss = {
          top: css[0], right: css[1], bottom: css[0], left: css[1],
          vert: css[0] * 2, hori: css[1] *2
        };
        break;
        case 3: rtnCss = {
          top: css[0], right: css[1], bottom: css[2], left: css[1],
          vert: css[0] + css[2], hori: css[1] * 2
        };
        break;
        case 4: rtnCss = {
          top: css[0], right: css[1], bottom: css[2], left: css[3],
          vert: css[0] + css[2], hori: css[1] + css[3]
        };
        break;
      }
      return rtnCss;
    }


    return $.fn[pluginName] = function(options){
      return this.each(function(){
        if(!$.data(this, "plugin_"+pluginName)){
          return $.data(this, "plugin_"+pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
}).call(this);