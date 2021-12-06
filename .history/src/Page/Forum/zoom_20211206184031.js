let zoomer = function (){
    document.querySelector('#img-zoomer-box')
      .addEventListener('mousemove', function(e) {
  
      let original = document.querySelector('#img-1'),
          magnified = document.querySelector('#img-2'),
          style = magnified.style,
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          imgWidth = original.offsetWidth,
          imgHeight = original.offsetHeight,
          xperc = ((x/imgWidth) * 100),
          yperc = ((y/imgHeight) * 100);
  
      //lets user scroll past right edge of image
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      };
  
      //lets user scroll past bottom edge of image
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      };
  
      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';
  
      style.left = (x - 180) + 'px';
      style.top = (y - 180) + 'px';
  
    }, false);
  }();
  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
      img.width * zoom + "px " + img.height * zoom + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /* Set the position of the magnifier glass: */
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  /* Execute the magnify function: */
  magnify("myimage", 3);
  /* Specify the id of the image, and the strength of the magnifier glass: */
  