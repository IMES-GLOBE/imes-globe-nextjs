// INDEX.HTML
$('#nov').hide();
$('#noscre').hide();
$('.tvlogo.b').hide();
$('.closestories').hide();
$('.the-feeds').hide();
$('.stories-holder').css('right','-100%');
$('.mainwebsite.aa').css('opacity','0');
$('.mainwebsite.ab').css('opacity','0');
$('.mainwebsite.aa').css('transition','0.7s');
$('.mainwebsite.ab').css('transition','0.7s');
$('.frenchImes').css('transition','0.7s');
$('.englishImes').css('transition','0.7s');
$('.mainwebsite.ma').css('opacity','0');
$('.mainwebsite.mb').css('opacity','0');
$('.mainwebsite.mc').css('opacity','0');
$('.mainwebsite.md').css('opacity','0');
$('.mainwebsite.me').css('opacity','0');
$('.mainwebsite.ma').css('font-size','25px');
$('.mainwebsite.mb').css('font-size','25px');
$('.mainwebsite.mc').css('font-size','25px');
$('.mainwebsite.md').css('font-size','25px');
$('.mainwebsite.me').css('font-size','25px');




$('.new-options-holder.a').click(function () {
  $('.schools').css('display','flex');
  $('.schools-background').css('display','flex');
  $('.schools').css('opacity','1');
  $('.schools-background').css('opacity','1');
});

$('.schools-background').click(function () {
  $('.schools').css('opacity','0');
  $('.schools-background').css('opacity','0');
  setTimeout(function () {
    $('.schools').css('display','none');
    $('.schools-background').css('display','none');
  },700);
});

$('.back-out-from-school').click(function () {
  $('.schools').css('opacity','0');
  $('.schools-background').css('opacity','0');
  setTimeout(function () {
    $('.schools').css('display','none');
    $('.schools-background').css('display','none');
  },700);
});


$(window).on('load', function () {

  // Profile settings intervals begin
  setInterval(function () {
    setTimeout(function () {
      $('.frenchImes').css('height','100%');
      $('.englishImes').css('height','0%');
    },00);
    setTimeout(function () {
      $('.mainwebsite.aa').css('opacity','1');
    },700);
    setTimeout(function () {
      $('.mainwebsite.aa').css('opacity','0');
    },6000);
    setTimeout(function () {
      $('.frenchImes').css('height','0%');
      $('.englishImes').css('height','100%');
    },6700);
    setTimeout(function () {
      $('.mainwebsite.ab').css('opacity','1');
    },7400);
    setTimeout(function () {
      $('.mainwebsite.ab').css('opacity','0');
    },13400);
  },14000);
  // END OF Profile settings intervals



  // next next animation intervals begin
  setInterval(function () {
    setTimeout(function () {
      $('.imgbg1').css('height','100%');
      $('.imgbg5').css('height','0%');
      $('.mainwebsite.me').css('opacity','0');
      setTimeout(() => {
        $('.mainwebsite.ma').css('opacity','1');
        $('.mainwebsite.mb').css('opacity','0');
        $('.mainwebsite.mc').css('opacity','0');
        $('.mainwebsite.md').css('opacity','0');
      }, 1000);
    },00);
    setTimeout(function () {
      $('.imgbg1').css('height','0%');
      $('.imgbg2').css('height','100%');
        $('.mainwebsite.ma').css('opacity','0');
      setTimeout(() => {
        $('.mainwebsite.mb').css('opacity','1');
        $('.mainwebsite.mc').css('opacity','0');
        $('.mainwebsite.md').css('opacity','0');
        $('.mainwebsite.me').css('opacity','0');
      }, 1000);
    },6700);
    setTimeout(function () {
      $('.imgbg2').css('height','0%');
      $('.imgbg3').css('height','100%');
      $('.mainwebsite.mb').css('opacity','0');
      setTimeout(() => {
        $('.mainwebsite.ma').css('opacity','0');
        $('.mainwebsite.mc').css('opacity','1');
        $('.mainwebsite.md').css('opacity','0');
        $('.mainwebsite.me').css('opacity','0');
      }, 1000);
    },12700);
    setTimeout(function () {
      $('.imgbg3').css('height','0%');
      $('.imgbg4').css('height','100%');
      $('.mainwebsite.mc').css('opacity','0');
      setTimeout(() => {
        $('.mainwebsite.ma').css('opacity','0');
        $('.mainwebsite.mb').css('opacity','0');
        $('.mainwebsite.mc').css('opacity','0');
        $('.mainwebsite.md').css('opacity','1');
        $('.mainwebsite.me').css('opacity','0');
      }, 1000);
    },18700);
    setTimeout(function () {
      $('.imgbg4').css('height','0%');
      $('.imgbg5').css('height','100%');
      $('.mainwebsite.md').css('opacity','0');
      setTimeout(() => {
        $('.mainwebsite.ma').css('opacity','0');
        $('.mainwebsite.mb').css('opacity','0');
        $('.mainwebsite.mc').css('opacity','0');
        $('.mainwebsite.md').css('opacity','0');
        $('.mainwebsite.me').css('opacity','1');
      }, 1000);
    },24700);
  }, 30700);


  // END OF next animation settings intervals
});
