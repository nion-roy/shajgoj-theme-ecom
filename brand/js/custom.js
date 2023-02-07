$(function () {
  $("[data-btn]").click(button);
});

function button() {
  $(this).parent().find("[data-spinner]").addClass("active");
  setTimeout(() => {
    $(this).parent().find("[data-spinner]").removeClass("active");
  }, 5000);
}
