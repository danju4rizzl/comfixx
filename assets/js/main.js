$(document).ready(function () {
  AOS.init();
});

$(document).ready(function () {
  var typed = new Typed("#typed", {
    strings: ["", "Freelancer", "Web Designer", "Front-End Dev", "Web Developer", "Remote Work"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: false
  });

});



//BTT
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var showScrollButton = 600;

  if (wScroll > showScrollButton) {
    $("#backToTop").slideDown();
  } else {
    $("#backToTop").slideUp();
  }
});

$("#backToTop").click(function () {
  $("body,html").animate({
      scrollTop: 0
    },
    1000
  );
  return false;
});

$(document).ready(function () {
  $(".navigation__list .navigation__link, .scrollDown__link, .goToContact").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate({
          scrollTop: targetOffset
        }, 1000);
        return false;
      }
    }
  });
});




$(function () {
  $(".project__item").hover(
    function () {
      // over
      $(this)
        .find(".project__info")
        .addClass("project__ShowInfo");
      $(this)
        .find(".project__img")
        .addClass("project__MoveImg");
      $(this)
        .find(".btn-main--project")
        .attr("data-target", "#projectModal");
      $(this)
        .find(".btn-main--project")
        .attr("data-toggle", "modal");
    },
    function () {
      // out
      $(this)
        .find(".project__info")
        .removeClass("project__ShowInfo");
      $(this)
        .find(".project__img")
        .removeClass("project__MoveImg");
      $(this)
        .find(".btn-main--project")
        .removeAttr("data-target");
      $(this)
        .find(".btn-main--project")
        .removeAttr("data-toggle");
    }
  );
});


$(window).scroll(function () {
  var bars = document.querySelectorAll(".skill__bar");
  var percentages = document.querySelectorAll(".skillbar__percent");

  var wScroll = $(this).scrollTop();
  var skill = 1200;

  if (wScroll > skill) {
    $(bars).addClass("skill__grow");
  } else {
    $(bars).removeClass("skill__grow");
  };
});


$(document).ready(function () {
  var selector = $('.count');
  var replay = 'replay'

  function isScrolledIntoView(el) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elTop = el.offset().top;
    var elBottom = elTop + el.height();
    return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
  }

  function animate_numbers(element) {
    if (isScrolledIntoView(element)) {
      element.addClass('started').css('visibility', 'visible')
      var startnum = element.text();
      if (element.text() % 1 === 0 && $.isNumeric(element.text())) {
        var step = function () {
          element.text(Math.ceil(this.Counter));
        }
      } else if (element.text() % 1 !== 0 && $.isNumeric(element.text())) {
        var step = function () {
          element.text(this.Counter.toFixed(2));
        }
      }
      jQuery({
        Counter: 0
      }).animate({
        Counter: element.text()
      }, {
        duration: 2000,
        complete: function () {
          element.text($.trim(startnum)).addClass('finished').removeClass('started');
        },
        step: step
      });
    }
  }

  selector.each(function () {
    $(this).css('visibility', 'hidden');
    animate_numbers($(this));
  });

  $(document).on("scroll", function () {
    selector.not('.finished, .started').each(function () {
      animate_numbers($(this));
    });
    selector.each(function () {
      if (!isScrolledIntoView($(this)) && $(this).hasClass(replay)) {
        $(this).removeClass('finished');
      }
    });
  });
});


$(document).ready(function () {
  $('.modal__display').slick({
    infinite: true,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  });

});

$(document).ready(function () {
  $('#mobileSlider').slick({
    infinite: true,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  });

});

//* Particles-Config JS

//*/