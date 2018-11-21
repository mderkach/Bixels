document.addEventListener('DOMContentLoaded', function(){
  // set login page content to viewport height
  var header = document.querySelector('header').clientHeight;
  var container = document.querySelector('.main-info__wrapper');
  var container1 = document.querySelector('.side-info__wrapper');
  var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  function appendHeight() {
    if (window.innerWidth > 991) {
      container.style.height = viewportHeight - header + "px";
      container1.style.height = viewportHeight - header + "px";
    } else {
      container.style.height = "auto";
      container1.style.height = "auto";
    }
  }
  window.addEventListener("resize", function () {
    appendHeight();
  });
  appendHeight();
  
});
