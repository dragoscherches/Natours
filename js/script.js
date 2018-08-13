//FOR NAVIGATION TO CLOSE

var elements = document.getElementsByClassName("navigation__link");
var navToggle = document.getElementById('navi-toggle');

Array.prototype.slice.call(elements)
  .forEach(function (el) {
      el.addEventListener('click', function (e) {
          navToggle.checked = false
      })
  });

//FOR SMOOTH SCROLLING 

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/ 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
    
}


var button = document.getElementById('btn-tours');
var btnFooter = document.getElementById('footer__item');

button.addEventListener("click", function(){
    smoothScroll("#section-tours", 1000);
});

btnFooter.addEventListener("click", function(){
    smoothScroll("#header", 1000);
});



