$(function () {
  // Opening animation

  var $pt = document.querySelector(".page-transition");

  var $frame1 = document.querySelector(".page-transition__1");
  var $frame2 = document.querySelector(".page-transition__2");
  var $frame3 = document.querySelector(".page-transition__3");

  var $frame4 = document.querySelectorAll(".page-transition__4");
  var $slide__img = document.querySelectorAll(".swiper-slide__link");

  var $card = document.querySelectorAll(".card");
  var $cardShow = document.querySelectorAll(".card-show");

  var $sBtn = document.querySelectorAll(".swiper-button-white");
  var $logo = document.querySelector(".transition__logo");

  var tl = new TimelineMax();

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
    0
  );

  tl.staggerFromTo(
    $cardShow,
    1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.3,
    0.6
  );

  // tl.staggerFromTo(
  //   $slide__img,
  //   1,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //   },
  //   0.3,
  //   0
  // );

  tl.set($frame4, {
    scaleX: 0,
  });

  tl.set($slide__img, {
    opacity: 1,
  });

  // tl.fromTo(
  //   $sBtn,
  //   0.5,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     ease: Power2.easeInOut,
  //   },
  //   5
  // );
});
