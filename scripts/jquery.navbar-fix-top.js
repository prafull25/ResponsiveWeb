// mainNavbar
var nav = $('#mainNavbar');
var fixedTop = "fixed-top";
var headerHeight = $('#header').height() + 50;

$(window).scroll(function(){
  if($(window).scrollTop() > headerHeight)
  {
    nav.addClass(fixedTop);
  }
  else {
    nav.removeClass(fixedTop);
  }
})


// check on refresh
if($(window).scrollTop() > headerHeight)
{
  nav.addClass(fixedTop);
}
else {
  nav.removeClass(fixedTop);
}
