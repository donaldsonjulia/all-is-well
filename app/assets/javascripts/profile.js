(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){
    $(event.target).toggleClass('active').parent().parent().next('aside').slideToggle();

    if ( $(event.target).hasClass('active') ) {
      $(event.target).parent().parent().next('aside').css('display','flex');
      $(event.target).parent().parent().css('background', 'rgba(35, 188, 158, 0.4)').css('border-bottom','none');
    } else {
      $(event.target).parent().parent().css('background', 'rgb(107, 213, 192)').css('border-bottom','0.25px solid rgb(35, 188, 158)');
    }
  });





})(jQuery);


// $('#mydiv').slideToggle('slow', function() {
//      var height = $('#mydiv').height();
//      if($(this).is(':visible')){
//          $(window).scrollTo(height);
//      }
// });
