function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

      function quad(timeFraction) {
return Math.pow(timeFraction, 10);
}

let quadEaseOut = makeEaseOut(quad);

var triger = true;
  function mobileMenu() {
      
      if (triger){
    var x=document.createElement("button");
    x.setAttribute("class","mobile-right");
    x.setAttribute("onclick","mobileMenu()");
    document.body.appendChild(x);
    
    if (document.documentElement.clientWidth >= 400)
    animate({
        duration: 2000,
        timing: quadEaseOut,
        draw: function(progress) {
          document.getElementsByClassName("mobile-menu_left")[0].style.left = -400 + progress * 400 + "px";
          document.getElementsByClassName("mobile-right")[0].style.opacity = progress * 1;
          document.getElementsByClassName("mobile-navigation")[0].style.transform = "rotate(" + progress * 90 + "deg)";
        }
      });
      else {
      animate({
        duration: 2000,
        timing: quadEaseOut,
        draw: function(progress) {
          document.getElementsByClassName("mobile-menu_left")[0].style.left = -100 + progress * 100 + "vw";
          document.getElementsByClassName("mobile-navigation")[0].style.transform = "rotate(" + progress * 90 + "deg)";
        }
      });
      document.getElementsByClassName("mobile-navigation")[0].style.zIndex = 50;
    }
    
  } else {
        animate({
            duration: 2000,
            timing: quadEaseOut,
            draw: function(progress) {
              document.getElementsByClassName("mobile-menu_left")[0].style.left = progress * -400 + "px";
              document.getElementsByClassName("mobile-right")[0].style.opacity = 1 + -progress;
              document.getElementsByClassName("mobile-navigation")[0].style.transform = "rotate(" + (90 + -progress * 90) + "deg)";
            }
          });
          setTimeout(del , 1500);
                    function del(){
                        x = document.getElementsByClassName('mobile-right')[0];
                        x.parentNode.removeChild(x);
                    }
    }

    triger = !triger;
  }