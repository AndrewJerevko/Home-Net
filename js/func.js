$(document).ready(function () {
  $(".box").click(function () {
    $(".inbox").fadeToggle("slow");
    $(".inbox2").hide(3000);
    $(".inbox3").hide(3000);
    $(".inbox4").hide(3000);
    return false;
  });
    $(".box2").click(function () {
    $(".inbox2").fadeToggle("slow");
    $(".inbox").hide(3000);
    $(".inbox3").hide(3000);
    $(".inbox4").hide(3000);
    return false;
  });
    $(".box3").click(function () {
    $(".inbox3").fadeToggle("slow");
    $(".inbox").hide(3000);
    $(".inbox2").hide(3000);
    $(".inbox4").hide(3000);
    return false;
  });
    $(".box4").click(function () {
    $(".inbox4").fadeToggle("slow");
    $(".inbox").hide(3000);
    $(".inbox2").hide(3000);
    $(".inbox3").hide(3000);
    return false;
  });
});
