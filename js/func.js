$(document).ready(function () {
  $('#btn1').click(function () {
    $(".news").load("../index2.html .1");
  });
    $('#btn2').click(function () {
    $(".news").load("../index2.html .2");
  });
    $('#btn3').click(function () {
    $(".news").load("../index2.html .3");
  });
    $('#btn4').click(function () {
    $(".news").load("../index2.html .4");
  });
    $('#btn5').click(function () {
    $(".news").load("../index2.html .5");
  });
    $('#btn6').click(function () {
    $(".news").load("../index2.html .6");
  });
    $('#btn7').click(function () {
    $(".news").load("../index2.html .7");
  });
    $('#btn8').click(function () {
    $(".news").load("../index2.html .8");
  });
    $('#btn9').click(function () {
    $(".news").load("../index2.html .9");
  });
    $('#btn10').click(function () {
    $(".news").load("../index2.html .10");
  });
    $('#btn11').click(function () {
    $(".news").load("../index2.html .11");
  });

  $(".ulli").click(function () {
    $(".ulli").show();
    return false;
  });

  $(".box").click(function () {
    $(".inbox").fadeToggle("slow");
    $(".inbox2").hide();
    $(".inbox3").hide();
    $(".inbox4").hide();
    return false;
  });
  $(".box2").click(function () {
    $(".inbox2").fadeToggle("slow");
    $(".inbox").hide();
    $(".inbox3").hide();
    $(".inbox4").hide();
    return false;
  });
  $(".box3").click(function () {
    $(".inbox3").fadeToggle("slow");
    $(".inbox").hide();
    $(".inbox2").hide();
    $(".inbox4").hide();
    return false;
  });
  $(".box4").click(function () {
    $(".inbox4").fadeToggle("slow");
    $(".inbox").hide();
    $(".inbox2").hide();
    $(".inbox3").hide();
    return false;
  });
});
