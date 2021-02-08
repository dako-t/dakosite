$(function () {
  // Opening animation

  var $pt = document.querySelector(".page-transition");

  var $frame1 = document.querySelector(".page-transition__1");
  var $frame2 = document.querySelector(".page-transition__2");
  var $frame3 = document.querySelector(".page-transition__3");

  var $frame4 = document.querySelectorAll(".page-transition__4");
  var $slide__img = document.querySelectorAll(".swiper-slide__link");

  var $card = document.querySelectorAll(".card");

  var $sBtn = document.querySelectorAll(".swiper-button-white");
  var $logo = document.querySelector(".transition__logo");

  var tl = new TimelineMax();

  tl.fromTo(
    $frame2,
    2,
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power4.easeInOut,
    }
  );

  tl.fromTo(
    $frame3,
    2,
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power4.easeInOut,
    },
    0.2
  );

  tl.fromTo(
    $logo,
    2,
    {
      xPercent: -100,
      autoAlpha: 0,
    },
    {
      xPercent: 0,
      autoAlpha: 1,
      ease: Power4.easeInOut,
    },
    0.5
  );

  tl.set($frame2, {
    scaleX: 0,
  });

  tl.set($frame1, {
    autoAlpha: 0,
  });

  tl.to($frame3, 2, {
    scaleX: 0,
    transformOrigin: "right",
    ease: Power4.easeInOut,
  });

  tl.to(
    $logo,
    0.2,
    {
      autoAlpha: 0,
    },
    "-=1"
  );

  tl.staggerFromTo(
    $card,
    1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.3,
    4
  );

  tl.fromTo(
    $frame4,
    0.6,
    {
      scaleX: 1,
    },
    {
      scaleX: 0,
      transformOrigin: "right",
      ease: Power2.easeInOut,
    },
    3.4
  );

  tl.set($frame4, {
    scaleX: 0,
  });

  tl.to($pt, 0, {
    display: "none",
  });
});
