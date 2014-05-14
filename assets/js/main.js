var scrolled = false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#site-nav').outerHeight();

// on scroll let interval function know user has scrolled
$(window).scroll(function(event) {
  scrolled = true;
});

// run hasScrolled() and reset didScroll status
var scrollIntervalId = setInterval(function() {
  if (scrolled) {
    hasScrolled();
    scrolled = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // make sure user scrolls more than specified distance
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  var dropdownHeight = $('.site-nav__dropdown').height();

  //hide full menu if it's toggled on
  if (st > lastScrollTop && st > dropdownHeight) {
    if ( $('.site-nav__dropdown').css('display') != 'hidden') {
      $('.site-nav__dropdown').hide();
    }
  }

  // make sure user's scrolled down past navbar
  if (st > lastScrollTop && st > navbarHeight + dropdownHeight) {
    $('#site-nav').removeClass('js-nav-down').addClass('js-nav-up');
  } else {
    // user is scrolling up now
    if (st + $(window).height() < $(document).height()) {
      $('#site-nav').removeClass('js-nav-up').addClass('js-nav-down');
    }
  }

  lastScrollTop = st;
}

$(document).ready(function() {

  // add some animation stuff
  $('#home-text').addClass('animated fadeInDown');

  //if('#site-nav').hasClass('site-nav__clear')
  //  clearInterval(scrollIntervalId);

  $('#site-nav').click(function(e) {
    e.preventDefault();

    if ($('body').scrollTop() !== 0)
      $('html, body').animate({ scrollTop: 0 }, "fast");

    $('.site-nav__dropdown').slideToggle(300);
  });

  event.stopPropagation();
});
