/* 
* Magnify
* 
* TODO:
* Check if we can get touchmove to work with it..
* Click to zoom?
* Test test test!
*/

(function (window) {
    'use strict';
  
    function debounce(fn, wait) {
      var timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          fn.apply(this, arguments)
        }, (wait || 1));
      }
    }
    
    var PREFIXES = ['', 'Moz', 'webkit', 'Webkit', 'ms'];
    function applyStyle(prop, value, el) {
      var first = prop[0];
      var trail = prop.slice(1);
  
      PREFIXES.forEach(function (prefix) {
        var name = prefix ? (prefix + first.toUpperCase()) : first.toLowerCase();
        name += trail;
  
        el.style[name] = value;
      });
    }
  
    var magnifyEl = document.querySelector('.js-magnify'),
      imageEl = magnifyEl.querySelector('.js-magnifyImage'),
      glassEl = magnifyEl.querySelector('.js-magnifyGlass'),
      imageUrl = imageEl.getAttribute('src'),
  
      containerHeight,
      containerWidth,
    
      originalWidth = 0,
      originalHeight = 0,
      imageWidth,
      imageHeight,
      lensWidth,
      lensHeight,
  
      magnifyImage,
      magnifyX,
      magnifyY,
      
      backgroundPos,
  
      rx,
      ry,
      px,
      py,
    
      isActive = false,
      activeClass = 'is-active';
  
    
    function initMagnify() {
      glassEl.style.backgroundImage = 'url(' + imageUrl + ')';
  
      magnifyImage = new Image();
  
      magnifyImage.addEventListener('load', function() {
        originalWidth = magnifyImage.naturalWidth;
        originalHeight = magnifyImage.naturalHeight;
        glassEl.style.backgroundSize = originalWidth;
  
        recaclMagnify();
        setUpMagnify();
      }, false);
  
      magnifyImage.src = imageUrl;
    }
  
  
    function recaclMagnify() {
      containerWidth = magnifyEl.offsetWidth;
      containerHeight = magnifyEl.offsetHeight;
      imageWidth = imageEl.offsetWidth;
      imageHeight = imageEl.offsetHeight;
      lensWidth = glassEl.offsetWidth;
      lensHeight = glassEl.offsetHeight;
    }
  
  
    function setUpMagnify() {
      magnifyEl.addEventListener('mousemove', function (e) {
        window.requestAnimationFrame(function () {
          magnifyX = e.pageX - magnifyEl.offsetLeft;
          magnifyY = e.pageY - magnifyEl.offsetTop;
  
          if (magnifyX < containerWidth && magnifyY < containerHeight && magnifyX > 0 && magnifyY > 0) {
            glassEl.classList.add(activeClass);
            isActive = true;
          } else {
            glassEl.classList.remove(activeClass);
            isActive = false;
          }
  
          if (isActive) {
            rx = Math.round(magnifyX / imageWidth * originalWidth) * -1;
            ry = Math.round(magnifyY / imageHeight * originalHeight) * -1;
  
            backgroundPos = (rx + lensWidth) + 'px ' + (ry + (lensWidth / 2)) + 'px';
  
            px = magnifyX - lensWidth / 2;
            py = magnifyY - lensHeight / 2;
  
            glassEl.style.backgroundPosition = backgroundPos;
            applyStyle('transform', 'translate(' + px + 'px, ' + py + 'px)', glassEl);
          }
        });
      }, false);
    }
  
    window.addEventListener('resize', debounce(function () {
      recaclMagnify();
    }, 500));
  
    initMagnify();
  
  }(this));