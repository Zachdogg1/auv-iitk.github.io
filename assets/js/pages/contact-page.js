$(document).ready(function() {
  $('#nav a').eq(8).css({
    "color": "white"
  });
  $(window).on('resize load', function() {
    if ($(window).width() < 750) {
      $('#contactus').css({
        "fontSize": "35px"
      });
      $('.contactdetails').css({
        "padding-left": "0% !important"
      });
      $('#sidebar').css({
        "padding-left": "0% !important"
      });
      $('.col-md-5').css({
        "margin-left": "0% !important"
      });
      $('h1').css({
        "font-size": "30px"
      });
      $('.contactblocks').css({
        "height": "auto"
      })

    }
    if ($(window).width() < 390) {
      $('.icons').css({
        "padding-top": "4%"
      });
      $('.socialicons').css({
        "text-indent": "15%"
      });
      $('.auvcontact').css({
        "padding-left": "12% !important"
      });
    } else {
      $('.contactblocks').css({
        "height": "300px"
      })
    }
  });
});

$(document).ready(function() {
  $('.faicon').hover(function() {
      $(this).css({
        "color": "blue"
      });
    },
    function() {
      $(this).css({
        "color": "cornflowerblue"
      });
    });

});
