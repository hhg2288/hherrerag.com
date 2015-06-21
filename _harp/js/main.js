(function() {
  var init, loopInterval, reset, setup;

  $(function() {
    $('.medium-box .title').fitText(1.0, {
      minFontSize: '24px',
      maxFontSize: '72px'
    });
    $('.medium-box .subtitle').fitText({
      minFontSize: '16px',
      maxFontSize: '48px'
    });
    setup();
  });

  setup = function() {
    var img;
    img = new Image();
    img.src = "assets/bg.png";
    img.onload = function() {
      $('#overlay').addClass("loaded");
      return init();
    };
  };

  init = function() {
    var tl;
    tl = new TimelineMax();
    return tl.to("#overlay", 0.5, {
      autoAlpha: 0
    }).from(".top-box .logo", 0.5, {
      opacity: 0,
      ease: Quad.easeInOut
    }, '+=1').from(".medium-box, .bottom-box", 1, {
      height: 0,
      "padding": "0",
      ease: Quad.easeInOut
    }, '+=.5').from(".line", 0.2, {
      opacity: 0
    }, "-=1").from(".line", 1.5, {
      width: 0,
      ease: Quad.easeInOut
    }, "-=0.75").from(".medium-box .title, .medium-box .subtitle", 1.5, {
      opacity: 0
    }, "-=1").staggerFrom(".bottom-box li", 0.5, {
      autoAlpha: 0,
      'transform': 'translateY(20px)'
    }, 0.2).eventCallback("onComplete", function() {
      reset();
      console.log("complete 1");
    });
  };

  reset = function() {
    console.log("RESET");
    $(".line").css("width", "70%");
    $(".medium-box, .bottom-box").css("height", "auto");
    $('#overlay').hide;
    loopInterval();
  };

  loopInterval = function() {
    var item, items, total;
    items = $('.medium-box .subtitle > span');
    total = items.length;
    item = 0;
    setInterval(function() {
      $(items[item]).removeClass("active");
      if (item >= total - 1) {
        item = 0;
        return $(items[item]).addClass("active");
      } else {
        $(items[item + 1]).addClass("active");
        return item++;
      }
    }, 2000);
  };

}).call(this);
