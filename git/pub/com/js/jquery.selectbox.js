/*
plugin name : selectbox plugin
author : yikl1004@naver.com
date : 2015-01-16
*/

(function () {
    "use strict";
    (function ($, window, document) {

        //변수 정리
        var pluginName, defaults, Plugin;

        //플러그인 네임
        pluginName = "selectbox";

        //기본 설정 값
        defaults = {
            width: 'auto',         //넓이
            naming: '',   //셀렉트 박스의 이름
            duration: 150
        };

        Plugin = (function () {
            function Plugin( element, options ) {
                this.element = element;                                                                 //jquery this
                this.options = $.extend( {}, defaults, options );      
                this._width = $(this.element).data('width');                           //기본 설정 값, 옵션을 넣었다면 옵션 값을 합쳐준다.

                $(this.element).wrap( "<div class='select-wrap' />" );                                  //독립적인 관리를 위해 실제 셀렉트박스를 한번 깜싸 준다.

                this._width == undefined ? this.wrap = $(this.element).parent( '.select-wrap' ).css( 'min-width', 150 ) : this.wrap = $(this.element).parent( '.select-wrap' ).css( 'width', this._width );
                //감싸준 태그에 넓이값을 저장 후 this.wrap에 저장
                //넓이 값이 없을 경우는 넓이 값을 제외하고 저장

                //셀렉트 박스를 대체할 DOM을 삽입 한다.
                this.wrap.prepend(
                    "<span class='select'>" +
                        "<a href='javascript:;' class='def'><span></span></a>" +
                        "<div class='select-list'>" +
                            "<ul class='options'></ul>" +
                        "<div>" +
                    "</span>"
                );
                this.new_sel = this.wrap.find( '.select' );             //세로 만든 가짜 셀렉트박스
                this.opts = this.new_sel.find( '.options' );            //option들을 담아 줄 ul 태그
                this.def = this.new_sel.find( '.def>span' );                 //텍스트 출력창
                this.listWrap = this.new_sel.find( '.select-list' );
                this.real = $(this.element);                            //실제 셀렉트박스
                this.real_opt = this.real.find( 'option' );             //실제 셀렉트박스 안에 옵션등
                this.real.hide();                                       //실제 셀렉트박스는 감춰 준다.
                this.idx = -1;
                this.tempIdx = -1;

                if ( $(this.element).data('control') == 'tab' ) {
                    this.control = $(this.element).data('control');
                }

                this.init();                                            //초기화 실행
            }
            return Plugin;
        }) ();
        
        //플러그인 실행 후 초기화
        Plugin.prototype.init = function () {
            var i = 0,                                          //for문에서 쓰일 i
                that = this,                                    //내부 함수의 this 바인딩 문제로 변수에 할당하여 사용
                opts = this.options,                            //옵션 값
                addOpt = '<li><a href=javascript:;></a></li>';  //추가 될 li의 DOM 문자열

            if ( opts.naming && opts.naming.length > 0 ) {
            	that.wrap.attr( 'data-select-name', opts.naming );   //셀렉트박스의 이름
            }
            
            //for문을 이용해서 li를 추가시켜 준다.
            for (i = 0; i < that.real_opt.length; i += 1) {
                that.opts.append( addOpt );
                if (i === 0) {
                    that.def.text( that.real_opt.eq( 0 ).text() );
                    that.opts.find( 'li' ).eq( 0 ).find( 'a' ).text( that.real_opt.eq( i ).text() );
                } else if (i >= 1) {
                    that.opts.find( 'li' ).eq( i ).find( 'a' ).text(
                    	(function(){
                    		var returnText = '';
                    		if ( that.real_opt.eq( i ).val().length > 0 )
                    			returnText = that.real_opt.eq( i ).val();
                    		else
                    			returnText = that.real_opt.eq( i ).text();
                    		return returnText;
                    	})()
                    );
                }
            }

            //선택된 옵션이 있다면 그 옵션의 텍스트로 교체
            if ( $(that.element).find('[selected]').length > 0 ) {
                that.def.text( $(that.element).find('[selected]').text() );
            }

            // that.listWrap.css( { height: that.new_sel.find('.options').height() } );

            $(window).on('click', function(){
                var allSelect = $('.select-wrap');

                allSelect.removeClass('on').find('.select-list').slideUp( 'fast', function(){
                	$(this).removeAttr( 'style' ).hide();
                } ).removeClass( 'on' ).parent( '.select' ).removeClass( 'on' );
            });

            //가짜 셀렉트박스를 클릭했을 때
            that.new_sel.on( 'click', '.def', function ( event ) {
                that.wrap.addClass('on');
                that.selectClick( event );

                return event.preventDefault();
            });

            //li를 클릭했을 때
            that.opts.find( 'li' ).on( 'click', function () {
                this.idx = $(this).index();
                that.listClick( this.idx );
            });

            that.opts.find('li').on({
            	focusin: function(){
            		$(this).find('a').addClass('focus');
            	},
            	focusout: function(){
            		$(this).find('a').removeClass('focus');
            	}
            });

            that.opts.find('li:last-child > a').on( 'keydown', function( event ){
                if ( event.keyCode === 9 ) {
                    that.listWrap.stop(true).slideUp( 'fast', function(){
                    	$(this).removeAttr('style').hide();
                    }).removeClass( 'on' );
                    that.new_sel.removeClass('on');
                }
            });

            //키보드 대응
            that.new_sel.on( 'keydown', function( event ){
                that.keydown( event );
                return event.stopPropagation();
            });

        }

        //셀렉트 박스를 클릭 했을 때
        Plugin.prototype.selectClick = function ( event ) {
            var that = this;

            $('.select-wrap').removeClass('on opened');
            that.wrap.addClass('on');

            for ( var i=0; i<$('.select-wrap').length; i++ ) {
                if ( !$('.select-wrap').eq(i).hasClass('on') ) {
                    $('.select-wrap').eq(i).find('.select-list').slideUp('fast', function(){
                        $(this).removeClass('on');
                    });
                }
            }

            function listResize() {
                var list = that.wrap,
                    listHeight = list.find('.select-list').height(),
                    listOffsetTop = list.offset().top - $(window).scrollTop() + 34;

                if ( listHeight > ( $(window).height() - listOffsetTop) ) {
                    list.find('.select-list').css({
                        height: $(window).height() - listOffsetTop - 20,
                        oveflow: 'auto'
                    })
                }
            }
            listResize();

            that.listWrap.stop(true).slideDown( 'fast', function(){
                if ( that.wrap.hasClass('on') )
                    that.new_sel.addClass('on');
                $(this).find('.options').addClass( 'on' );
                that.wrap.addClass('opened');
            });

            if ( that.wrap.hasClass('opened') ) {
                that.wrap.find('.select-list').slideUp('fast', function(){
                    that.wrap.removeClass('on');
                    $(this).removeClass('on');
                    that.wrap.removeClass('opened')
                });
            }

            return event.stopPropagation();     //버블링 차단
        };

         Plugin.prototype.moveTab = function ( obj ) {
            var that = this,
                $el = obj.selector,
                idx = obj.index,
                $pages = $el.parents('.boxWrap').siblings('.tabContSub');
            $pages.removeClass('on').eq( obj.index ).addClass('on');
            if ( $el.parents('.boxWrap').find('.srch h2.dep02').length > 0 ) {
                $el.parents('.boxWrap').find('.srch h2.dep02')
                .text( $(that.element).find('option').eq( idx ).data('title') );
            } else if( $el.parents('.boxWrap').find('h2.ir').length > 0 ) {
                $el.parents('.boxWrap').find('.srch h2.ir')
                .text( $(that.element).find('option').eq( idx ).data('title') );
            }
         }

        //리스트를 클릭했을 때
        Plugin.prototype.listClick = function ( idx ) {
            var that = this;

            that.textChange ( idx );
            that.listWrap.stop(true).slideUp( 'fast', function(){
                that.new_sel.removeClass( 'on' );
                that.wrap.removeClass( 'on' );
                that.listWrap.removeAttr( 'style' ).hide();
                that.def.focus();
                //$(that.element).attr('data-page-number', idx);

                //탭 기능 추가
                if ( that.control == 'tab' ) {
                    that.wrap.next('.btn').off('.btnClick');
                    that.wrap.next('.btn').on('click.btnClick', function( event ){
                        event.preventDefault();
                        that.moveTab({ selector: $(this), index: idx });
                    });
                }

            } ).removeClass( 'on' ).parents('.select-wrap').removeClass('opened');//슬라이드토글 후 'on' 클래스 삭제

            return window.event.stopPropagation ? window.event.stopPropagation() : false;
        };

        Plugin.prototype.textChange = function ( idx, useTemp ) {
            var that = this,
                t;

            t = that.opts.find( 'li' ).eq( idx ).text();    //선택한 li의 텍스트
            that.new_sel.find( '.def>span' ).text( t );          //텍스트 출력창에 삽입

            if ( useTemp === undefined ) {
                //실제 셀렉트 박스의 option 선택 속성을 변경
                that.real_opt.eq( idx ).attr( 'selected', true).siblings().removeAttr( 'selected' );
            } else {
                that.opts.find(' > li').eq( idx ).find('a')
                .focus().addClass('focus')
                .parent().siblings().find('a')
                .removeClass('focus');
            }

        };


        Plugin.prototype.keydown = function ( event ) {
            var that = this,
                t;

             //셀렉트 박스를 한번도 클릭이나 키보드로 제어하지 않았을 때 idx값을 첫번째로 재할당
            if ( that.idx === -1 ) 
                that.idx = 0;
            else if ( that.idx !== -1 || that.idx > -1 )
                that.idx = that.idx;

            if ( !that.opts.hasClass('on') ) {

                //방향키(아래)일 경우
                if( event.keyCode === 40 )
                    that.idx = that.idx >= ( that.real_opt.length - 1 ) ? that.idx = 0 : that.idx += 1,
                    that.textChange( that.idx );

                //방향키(위)일 경우
                else if ( event.keyCode === 38 )
                    that.idx = that.idx <= 0 ? that.idx = ( that.real_opt.length - 1 ) : that.idx -= 1,
                    that.textChange( that.idx );

                // //ENTER 일 경우
                else if ( event.keyCode === 13 )
                    that.idx = that.tempIdx;

            } else {

                //방향키(아래)일 경우
                if( event.keyCode === 40 )
                    that.tempIdx = that.tempIdx >= ( that.real_opt.length - 1 ) ? that.tempIdx = 0 : that.tempIdx += 1,
                    that.textChange( that.tempIdx, true );

                //방향키(위)일 경우
                else if ( event.keyCode === 38 )
                    that.tempIdx = that.tempIdx <= 0 ? that.tempIdx = ( that.real_opt.length - 1 ) : that.tempIdx -= 1,
                    that.textChange( that.tempIdx, true );

                //ESC 일 경우
                else if ( event.keyCode === 27 )
                    this.opts.stop(true).slideUp( 'fast' ).removeClass( 'on' ), //슬라이드토글 후 'on' 클래스 삭제
                    that.tempIdx = -1,
                    that.idx = that.idx,
                    that.textChange( that.idx ),
                    that.def.focus();

            }

            return event.stopPropagation();                
        };

      //플러그인에 대한 프로토타입 추가
        return $.fn[pluginName] = function ( options ) {
            return this.each( function () {
                if ( !$.data(this, "plugin_" + pluginName) ) {
                    return $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                }
            });
        };

    })(jQuery, window, document);
}).call(this);
