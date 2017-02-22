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
  $(".news").load("../index2.html .10");
    $(".inbox").hide();
    $(".inbox2").hide();
    $(".inbox3").hide();
    return false;
  });

  $(".contact").click(function(){
    $(".news").load("../index2.html #contact")
    return false;
  });

  $(".login").click(function () {
    $("#form")
      .css('display', 'block')
      .animate({
        opacity: 1,
        top: '-50px'
      }, 400);
    $(".login").hide();
    return false;
  });
  $("#form_close").click(function () {
    $("#form")
      .css('display', 'none')
      .animate({
        opacity: 0,
        top: '-50px'
      }, 400);
    $(".login").show();
    return false;
  });

  $("#sub_bot").click(function () {
    $("#subscribe")
      .css('display', 'block');
    $("#login")
      .css('display', 'none')
    return false;
  });
  $("#login_bot").click(function () {
    $("#login")
      .css('display', 'block');
    $("#subscribe")
      .css('display', 'none')
    return false;
  });
  (function () {
    var widget_id = 867427;
    _shcp = [{
      widget_id: widget_id
    }];
    var lang = (navigator.language || navigator.systemLanguage ||
        navigator.userLanguage || "en")
      .substr(0, 2).toLowerCase();
    var url = "widget.siteheart.com/widget/sh/" + widget_id + "/" + lang + "/widget.js";
    var hcc = document.createElement("script");
    hcc.type = "text/javascript";
    hcc.async = true;
    hcc.src = ("https:" == document.location.protocol ? "https" : "http") +
      "://" + url;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hcc, s.nextSibling);
  })();
});

