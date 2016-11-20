document.addEventListener("turbolinks:load", function(){
"use strict";

  //on button click, show previous entries and shrink buttons
  $(document).on('click','.button-box .button',function(event){

    //remove '-btn' from the end of the button id and use that to target the view id
    var selected = '#' + $(event.target).attr("id");
    selected = selected.substring(0, selected.indexOf('-btn'));
    var notSelected = '#' + $(event.target).siblings('.button').attr('id');
    notSelected = notSelected.substring(0, notSelected.indexOf('-btn'));

    //if the pressed button's view is hidden, show that view only and shrink the buttons
    if ( $(selected).hasClass('disappear') ) {

      $(selected).removeClass('disappear');
      $(notSelected).addClass('disappear');
      $('.button-box').addClass('shrink');

    //if the pressed button's view is not hidden, hide both views and re-expand the buttons
    } else {
      $('.entry-view').addClass('disappear');
      $('.button-box').removeClass('shrink');
    }

  });

});