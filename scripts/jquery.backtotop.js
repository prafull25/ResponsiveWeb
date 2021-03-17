var coverHeight = $('#cover-image').height();
$(window).scroll(function(){
    if($(window).scrollTop() > coverHeight)
       $('#backtotop').addClass('visible');
     else {
       $('#backtotop').removeClass('visible');
     }
})

// check on refresh
if($(window).scrollTop() > coverHeight)
   $('#backtotop').addClass('visible');
 else {
   $('#backtotop').removeClass('visible');
 }
