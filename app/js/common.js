document.addEventListener('DOMContentLoaded', function () {
  // set login page content to viewport height
  var header = document.querySelector('header').clientHeight;
  var container = document.querySelector('.main-info__wrapper');
  var container1 = document.querySelector('.side-info__wrapper');
  if (typeof (container) != 'undefined' && container != null) {
    appendHeight();
  }
  function getVH() {
    var viewPortHeight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortHeight = window.innerHeight;
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      viewPortHeight = document.documentElement.clientHeight;
    }
    // older versions of IE
    else {
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewPortHeight;
  }
  function appendHeight() {
    if (window.innerWidth > 991) {
      container.style.height = getVH() - header + 'px';
      container1.style.height = getVH() - header + 'px';
    } else {
      container.style.height = 'auto';
      container1.style.height = 'auto';
    }
  }
  window.addEventListener('resize', function () {
    if (typeof (container) != 'undefined' && container != null) {
      appendHeight();
    }
  });

  // login page error show
  function toggleFormError() {
    var form = document.querySelector('.form__header');
    var login = form.querySelector('input[type=text]').checkValidity();
    var password = form.querySelector('input[type=password]').checkValidity();
    var errorMessage = document.querySelector('.invalid');
    if (typeof (form) != 'undefined' && form != null && login == false || password == false) {
      errorMessage.style.visibility = 'visible';
    } else {
      errorMessage.style.visibility = 'hidden';
    }
  }
  
});
$(function () {
  //video custom button
  var playButton = $('.btn__play');
  // Event listener for the play/pause button
  playButton.on('click', function () {
    var parentVideo = $(this).parent();
    var childVideo = parentVideo.children('video');

    if (childVideo.play == true) {
      childVideo.trigger('pause');
      $(this).css('visibility', 'visible');
    } else {
      childVideo.trigger('play');
      $(this).css('visibility', 'hidden');
    }
  });

});