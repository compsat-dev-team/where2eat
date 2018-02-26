$(document).on("scroll", function(){
  if ($(document).scrollTop() > 100) {
    $('header').addClass("shrink");
    // $('img').attr("src","where2eat-logo-long.svg");
  }
  else {
    $('header').removeClass("shrink");
    // $('img').attr("src","where2eat-logo.svg");
  }
});
