$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
});

$(function() {
  $("button#darker").click(function() {
    $("body").removeClass();
    $("body").addClass("darker-background");
  });
});

$(function() {
  $("button#brighter").click(function() {
    $("body").addClass("og-background");
  });
});

$(function() {
  $("div#highlight").click(function() {
    $("box").removeClass();
    $("div#highlight").addClass("box");
  });
});
