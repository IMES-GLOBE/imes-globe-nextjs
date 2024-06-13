$('.fa.fa-user.bnd').hide();
$('.fa.fa-align-left.photo_or_info').hide();


$('.fa.fa-photo.photo_or_info').click(function () {
  $('.fa.fa-photo.photo_or_info').hide();
  $('.fa.fa-align-left.photo_or_info').show();
  $('.photo_or_').css('width','100%');
  $('.photo_or_').css('opacity','1');
  $('.edit_form').css('width','0%');
  $('.edit_form').css('opacity','0');
  $('.done').css('display','none');
});

$('.fa.fa-align-left.photo_or_info').click(function () {
  $('.fa.fa-photo.photo_or_info').show();
  $('.fa.fa-align-left.photo_or_info').hide();
  $('.edit_form').css('width','100%');
  $('.edit_form').css('opacity','1');
  $('.photo_or_').css('width','0%');
  $('.photo_or_').css('opacity','0');
  $('.done').css('display','flex');
});


// NAV
$('.fa.fa-user.bnd').click(function () {
  $('.fa.fa-user.bnd').hide();
  $('.fa.fa-paint-brush.bnd').show();
  $('.second_box').css('opacity','0');
  setTimeout(function () {
    $('.second_box').css('display','none');
    $('.students-div-display-contents').css('display','flex');
    $('.students-div-display-contents').css('opacity','1');
  },500);
});

$('.fa.fa-paint-brush.bnd').click(function () {
  $('.fa.fa-paint-brush.bnd').hide();
  $('.fa.fa-user.bnd').show();
  $('.students-div-display-contents').css('opacity','0');
  setTimeout(function () {
    $('.students-div-display-contents').css('display','none');
    $('.second_box').css('display','flex');
    $('.second_box').css('opacity','1');
  },500);
});



// NAV

$('.sett_dp').click(function () {
  $('.result').css('display','none');
  $('.fa.fa-user.bnd').hide();
  $('.fa.fa-paint-brush.bnd').show();
  $('.second_box').css('opacity','0');
  setTimeout(function () {
    $('.second_box').css('display','none');
    $('.students-div-display-contents').css('display','inline');
    $('.students-div-display-contents').css('opacity','1');
  },500);
});


$(window).on('load', function () {
  $('.gain.Leaders .value').text(1);
  $('.col-md-6.block').css('display','inherit');
  $('.col-md-6.block').css('opacity','1');
  $('.gain.studentss .value').text(1);
  setTimeout(function () {
    $('.cvc').css('display','flex');
    $('.cvc').css('opacity','1');
  },2000);

})

$('.students-div').click(function () {
  $('.students-div.active').removeClass('active');
  $(this).addClass('active');
  cabyou($(this));
  function cabyou(element) {
    var first_name = element.attr('first_name');
    var last_name = element.attr('last_name');
    var mainzone = element.attr('mainzone');
    var ministry = element.attr('ministry');
    var address = element.attr('address');
    var email = element.attr('email');
    var remark = element.attr('remark');
    var date = element.attr('date');
    var lastEdited = element.attr('lastEdited');
    var dp = element.attr('dp');
    var passcode = element.attr('passcode');
    var code = element.attr('code');
    $('#first_name').text(first_name);
    $('#last_name').text(last_name);
    $('#mainzone').text(mainzone);
    $('#ministry').text(ministry);
    $('#address').text(address);
    $('#email').text(email);
    $('#remark').text(remark);
    $('#date').text(date);
    $('#lastEdited').text(lastEdited);
    $('#code').text(code);
    $('.students-dp').css('background','url('+ dp +')no-repeat center');
    $('.students-dp').css('background-size','cover');
    $('.students-dp-forsettings').css('background','url('+ dp +')no-repeat center');
    $('.students-dp-forsettings').css('background-size','cover');
    $('.profile_pic_made_background').css('background','url('+ dp +')no-repeat center');
    $('.profile_pic_made_background').css('background-size','cover');

    $('.continue_button').click(function () {
      var checkpasscode = document.getElementById("input_button").value;
      if (checkpasscode == passcode) {
          $('.result').css('display','none');
          $('#check_lock').text('unlocked');
          $('.second_box_a').css('opacity','0');
          setTimeout(function () {
            $('.second_box_a').css('display','none');
            $('.second_box_b').css('display','flex');
            $('.second_box_b').css('opacity','1');
          },1600);
      } else {
        $('.result').css('display','none');
        setTimeout(function () {
          $('.result').css('display','inherit');
        },200);
      }
    });
  }

  $('.fa.fa-lock.bnd').click(function () {
    $('#check_lock').text('locked');
    $('.second_box_b').css('opacity','0');
    setTimeout(function () {
      $('.second_box_b').css('display','none');
      $('.second_box_a').css('display','flex');
      $('.second_box_a').css('opacity','1');
    },1600);
  });


  $('.students-div-background').css('display','flex');
  $('.students-div-background').css('opacity','1');
  $('.students-div-display').css('display','flex');
  $('.students-div-display').css('opacity','1');
  $('.profile_pic_made_background').css('display','flex');
  $('.profile_pic_made_background').css('opacity','0.7');

});

$('.back-out-from-students-display').click(function () {
  $('#check_lock').text('locked');
  $('.students-div-background').css('opacity','0');
  $('.students-div-display').css('opacity','0');
  $('.profile_pic_made_background').css('opacity','0');
  setTimeout(function () {
    $('.students-div-background').css('display','none');
    $('.students-div-display').css('display','none');
    $('.profile_pic_made_background').css('display','none');
  },700);
});



$('.gain.Leaders').click(function () {
  var value = $('.gain.Leaders .value').text();
  if (value == 0) {
    $('.gain.Leaders .value').text(1);
    $('.col-md-6.block').css('display','inherit');
    $('.col-md-6.block').css('opacity','1');
  } else if (value == 1) {
    $('.gain.Leaders .value').text(0);
    $('.col-md-6.block').css('opacity','0');
    setTimeout(function () {
      $('.col-md-6.block').css('display','none');
    },700);
  }
});


$('.gain.studentss').click(function () {
  var value = $('.gain.studentss .value').text();
  if (value == 0) {
    $('.gain.studentss .value').text(1);
    $('.cvc').css('display','flex');
    $('.cvc').css('opacity','1');
  } else if (value == 1) {
    $('.gain.studentss .value').text(0);
    $('.cvc').css('opacity','0');
    setTimeout(function () {
      $('.cvc').css('display','none');
    },700);
  }
});

//
// $('.second_box iframe').contents().find('.sett_dp').click(function () {
//   $('.fa.fa-user.bnd').hide();
//   $('.fa.fa-paint-brush.bnd').show();
//   $('.second_box').css('opacity','0');
//   setTimeout(function () {
//     $('.second_box').css('display','none');
//     $('.students-div-display-contents').css('display','inline');
//     $('.students-div-display-contents').css('opacity','1');
//   },500);
// });
