// loader

$(function () {
   $(".loader-container").fadeOut(2000).hide(1000);
});

// Email validatior
const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// modal

$(".modal-container").hide();

$(".display-modal").click(function () {
   $(".modal-container").addClass("show").fadeIn(500);
   $(".email-input").val("");
});

$(".modal-close, .modal-cancel").click(function () {
   $(".modal-container").removeClass("show").fadeOut(500);
});

$(".modal-accept").click(function () {
   if ($(".email-input").val().length < 1) {
      toastr.error("Please enter a valid email");
   } else if (emailTest.test($(".email-input").val())) {
      toastr.success("Subscribed Successfully");

      $(".email-input").val("");

      $(".modal-container").hide();
   } else {
      toastr.error("Invalid Email");
   }
});
