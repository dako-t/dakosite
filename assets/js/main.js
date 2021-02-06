$(function () {
  $(".bar").mCustomScrollbar({
    setWidth: false,
    theme: "rounded",
    //autoHideScrollbar: true,
    keyboard: {
      enable: true,
      scrollType: "stepless",
      scrollAmount: "auto",
    },
    callbacks: {
      whileScrolling: function () {
        if ($("#mCSB_1_container").css("top") == "0px") {
          $(".totop").fadeOut();
        } else {
          $(".totop").fadeIn();
        }
      },
    },
  });

  $(".totop").click(function () {
    $(".bar").mCustomScrollbar("scrollTo", {
      y: "0",
    });
  });

  // Get the modal
  var modal = document.getElementsByClassName("modal")[0];

  var modalContainer = document.getElementsByClassName("modal__container")[0];

  // Get the button that opens the modal
  var showBtn = document.getElementsByClassName("show__btn")[0];

  // Get the <span> element that closes the modal
  var hideBtn = document.getElementsByClassName("modal__hide")[0];

  // When the user clicks the button, open the modal
  showBtn.onclick = function () {
    modal.classList.remove("hide");
    modal.classList.remove("animate__fadeOut");
    modalContainer.classList.remove("animate__fadeOut");
    modalContainer.classList.add("animate__fadeInDown");
  };

  // When the user clicks on <span> (x), close the modal
  hideBtn.onclick = function () {
    setTimeout(function () {
      modal.classList.add("hide");
    }, 1000);
    modalContainer.classList.remove("animate__fadeInDown");
    modalContainer.classList.add("animate__fadeOut");
    modal.classList.add("animate__fadeOut");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      setTimeout(function () {
        modal.classList.add("hide");
      }, 1000);
      modalContainer.classList.remove("animate__fadeInDown");
      modalContainer.classList.add("animate__fadeOut");
      modal.classList.add("animate__fadeOut");
    }
  };

  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    centeredSlides: true,
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
      "@0.75": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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

  tl.staggerFromTo(
    $slide__img,
    1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.5,
    3.2
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

  tl.fromTo(
    $sBtn,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: Power2.easeInOut,
    },
    5
  );

  tl.to($pt, 0, {
    display: "none",
  });

  // Modal Form
  let sendButton = document.querySelector("button");

  function send() {
    let name = document.querySelector(".nameValue").value;
    let phone = document.querySelector(".phoneValue").value;
    let mail = document.querySelector(".mailValue").value;
    let demand = document.querySelector(".demandValue").value;

    if (name == "") {
      alert("請填入姓名");
      name.focus();
      return false;
    } else if (phone == "") {
      alert("請填入電話");
      phone.focus();
      return false;
    } else if (mail == "") {
      alert("請填入e-mail？");
      mail.focus();
      return false;
    } else if (demand == "") {
      alert("請填入您的需求或是資訊");
      demand.focus();
      return false;
    } else
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbyk6J7USI69zbwgWpldg8yKMlaix2p8BgqVhpTyjw/exec",
        data: {
          name: name,
          phone: phone,
          mail: mail,
          demand: demand,
        },
        success: function (response) {
          if (response == "成功") {
            alert("成功送出");
          }
        },
        beforeSend: function (response) {
          $(".loading").show();
        },
        complete: function (response) {
          $(".loading").hide();
        },
      });
  }

  sendButton.addEventListener("click", send);

  var modeBtn = document.querySelector(".switch__ipt");
  modeBtn.addEventListener("click", function () {
    if (document.body.className == "") {
      document.body.classList.add("invert");
      localStorage.setItem("bodyClass", "invert");
      localStorage.setItem("switchIpt", "checked");
    } else {
      localStorage.removeItem("bodyClass");
      localStorage.removeItem("switchIpt");
      document.body.classList.remove("invert");
    }
  });
  if (localStorage.getItem("bodyClass") != null) {
    document.body.className = localStorage.bodyClass;
    modeBtn.checked = "checked";
  }
});
