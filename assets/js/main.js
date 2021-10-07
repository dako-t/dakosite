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

    hashNavigation: {
      watchState: true,
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
  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  // Modal Form
  //let sendButton = document.querySelector(".form__btn");

  function send() {
    var name = document.forms["contact"]["nameValue"].value;
    var phone = document.forms["contact"]["phoneValue"].value;
    var mail = document.forms["contact"]["mailValue"].value;
    var demand = document.forms["contact"]["demandValue"].value;

    if (name == "") {
      alert("PLEASE COMPLETE THIS REQUIRED FIELD.");
      name.focus();
      return false;
    } else if (phone == "") {
      alert("y");
      phone.focus();
      return false;
    } else if (mail == "") {
      alert("PLEASE COMPLETE THIS REQUIRED FIELD.");
      mail.focus();
      return false;
    } else if (demand == "") {
      alert("PLEASE COMPLETE THIS REQUIRED FIELD.");
      demand.focus();
      return false;
    }
    // else
    //   $.ajax({
    //     url:
    //       "https://script.google.com/macros/s/AKfycbyk6J7USI69zbwgWpldg8yKMlaix2p8BgqVhpTyjw/exec",
    //     data: {
    //       name: name,
    //       phone: phone,
    //       mail: mail,
    //       demand: demand,
    //     },
    //     success: function (response) {
    //       if (response == "成功") {
    //         alert("成功送出");
    //       }
    //     },
    //     beforeSend: function (response) {
    //       $(".loading").show();
    //     },
    //     complete: function (response) {
    //       $(".loading").hide();
    //     },
    //   });
  }

  // sendButton.addEventListener("click", send);

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

  $(".back__btn").click(function () {
    history.back();
  });
});
