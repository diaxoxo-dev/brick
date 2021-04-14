  (function($) {
      // rolling banner on footer
      $.fn.aCarousel = function(_options) {
          return this.each(function(i, n) {
              // 변수 선언
              var options = jQuery.extend({}, {
                  listWrap: ".listWrap",
                  list: ".list",
                  lis: ".list li",
                  btnL: ".left",
                  btnR: ".right",
                  btnAuto: ".auto",
                  anchors: ".anchors button",
                  speed: 3000,
                  auto: true,
                  motionSpeed: 300,
                  callback: function() {}
              }, _options)

              , $wrap = $(this), $btnL = $wrap.find(options.btnL), $btnR = $wrap.find(options.btnR), $btnAuto = $wrap.find(options.btnAuto), $anchors = $wrap.find(options.anchors), $listWrap = $wrap.find(options.listWrap), $list = $wrap.find(options.list), $lis = $wrap.find(options.lis), $bannerAnchors = $lis.find("a")

              , listsWidth = $lis.eq(0).width() + (parseFloat($lis.eq(0).css("marginRight")) || 0), visibleLisCnt = Math.ceil($listWrap.width() / listsWidth), doing = false

              , auto = (options.auto) ? true : false, pause = false, speed = options.speed

              , dir = "right", visibleLisFirstIndex = 0, timer

              , callback = options.callback;

              // Accessibility: 모든 배너 링크 포커싱 받지 못하게 초기화
              for (var i = visibleLisCnt; i < $bannerAnchors.length; i++) {
                  $bannerAnchors.eq(i).attr("tabindex", "-1");
              }

              // 롤링갯수가 부족하면 멈춤
              if ($lis.length <= visibleLisCnt) return false;

              // 배너 영역 전체 넓이 셋팅
              $list.width($lis.length * listsWidth);

              // 초기 위치 잡기
              $list.css("left", 0);

              // button event
              $btnL.on("click", onBtnLClick);
              $btnR.on("click", onBtnRClick);
              $btnAuto.on("click", onBtnAutoClick);
              $anchors.on("click mouseover", onAnchorsClick).eq(0).addClass("current");

              if (auto) {
                  $wrap.on("mouseenter focusin", onWrapMouseEnter);
                  $wrap.on("mouseleave focusout", onWrapMouseLeave);
                  onStart();
              }

              function onBtnAutoClick() {
                  pause = !pause;
                  $btnAuto.toggleClass("stop", pause);
              }

              function onBtnRClick() {
                  if (doing) return false;
                  dir = "right";
                  unActiveAnchor(visibleLisFirstIndex);
                  visibleLisFirstIndex++;
                  onChange();
                  return false;
              }

              function onBtnLClick() {
                  if (doing) return false;
                  dir = "left";
                  unActiveAnchor(visibleLisFirstIndex);
                  visibleLisFirstIndex--;
                  onChange();
                  return false;
              }

              function onAnchorsClick() {
                  unActiveAnchor(visibleLisFirstIndex);
                  var n = $anchors.index(this) + visibleLisCnt;
                  onChange(n);
              }

              function onWrapMouseEnter() {
                  onStop();
              }

              function onWrapMouseLeave() {
                  onStart();
              }

              function onChange(n) {
                  if (n) visibleLisFirstIndex = n;

                  ActiveAnchor(visibleLisFirstIndex);

                  var $tmpLi, slideLeftPosition = 0;
                  // 진행 방향이 왼쪽이면
                  if (dir == "left") {
                      slideLeftPosition = listsWidth;
                      // 마지막 항목을 떼어다 맨 앞에 추가
                      $list.find("li:last").prependTo($list);
                      $list.css('left', -slideLeftPosition);
                      $list.animate({ left: 0 }, options.motionSpeed, function() {
                          // 마지막 항목을 떼어다 맨 앞에 추가
                          // $(this).css('left', 0).find("li:last").prependTo($list);
                          // Accessibility: 배너 링크 포커싱 받지 못하게
                          $(this).find("li:eq(" + visibleLisCnt + ") a").attr("tabindex", "-1");
                          // Accessibility: 현재 보이는 배너들 포커싱 받도록
                          $list.find("li:lt(" + visibleLisCnt + ") a").attr("tabindex", "0");
                      });
                      // 진행 방향이 오른쪽이면
                  } else {
                      slideLeftPosition = -listsWidth;
                      $list.animate({
                          left: slideLeftPosition
                      }, options.motionSpeed, function() {
                          // 처음 항목을 떼어다가 맨 뒤에 추가
                          $(this).css('left', 0).find("li:first").appendTo($list);
                          // Accessibility: 배너 링크 포커싱 받지 못하게
                          $(this).find("li:last > a").attr("tabindex", "-1");
                          // Accessibility: 현재 보이는 배너들 포커싱 받도록
                          $list.find("li:lt(" + visibleLisCnt + ") a").attr("tabindex", "0");
                      });
                  }
              }

              function onStart() {
                  clearInterval(timer);
                  timer = setInterval(function() {
                      if (!pause) {
                          (dir == "right") ? onBtnRClick(): onBtnLClick();
                      }
                  }, speed);
              }

              function onStop() {
                  clearInterval(timer);
              }

              function ActiveAnchor(index) {
                  index = index - visibleLisCnt;
                  if (index >= $anchors.length) index = 0;
                  $anchors.eq(index).addClass("current");
              }

              function unActiveAnchor(index) {
                  index = index - visibleLisCnt;
                  if (index >= $anchors.length) index = 0;
                  $anchors.eq(index).removeClass("current");
              }

              function ActivateFocus(idx) {
                  // 현재 보이는 배너들 포커싱 받도록
                  for (var i = idx; i < (idx + visibleLisCnt); i++) {
                      $bannerAnchors.eq(i).attr("tabindex", "0");
                  }
              }
          });
      }
  })(jQuery);
