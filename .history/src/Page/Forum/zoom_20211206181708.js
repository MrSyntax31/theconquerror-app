// most efficient way to add HTML, faster than innerHTML
const parseHTML = htmlStr => {
    const range = document.createRange()
    range.selectNode(document.body) // required in Safari
    return range.createContextualFragment(htmlStr)
  }
  
  // pass this function any image element to add magnifying functionality
  const makeImgMagnifiable = img => {
    const magnifierFragment = parseHTML(`
      <div class="magnifier-container">
        <div class="magnifier">
          <img class="magnifier__img" src="${img.src}"/>
        </div>
      </div>
    `)
    
    // This preserves the original element reference instead of cloning it.
    img.parentElement.insertBefore(magnifierFragment, img)
    const magnifierContainerEl = document.querySelector('.magnifier-container')
    img.remove()
    magnifierContainerEl.appendChild(img)
    
    // query the DOM for the newly added elements
    const magnifierEl = magnifierContainerEl.querySelector('.magnifier')
    const magnifierImg = magnifierEl.querySelector('.magnifier__img')
    
    // set up the transform object to be mutated as mouse events occur
    const transform = {
      translate: [0, 0],
      scale: 1,
    }
    
    // shortcut function to set the transform css property
    const setTransformStyle = (el, {translate, scale}) => {
      const [xPercent, yRawPercent] = translate
      const yPercent = yRawPercent < 0 ? 0 : yRawPercent
      
      // make manual pixel adjustments to better center
      // the magnified area over the cursor.
      const [xOffset, yOffset] = [
        `calc(-${xPercent}% + 250px)`,
        `calc(-${yPercent}% + 70px)`,
      ]
  
      el.style = `
        transform: scale(${scale}) translate(${xOffset}, ${yOffset});
      `
    }
    
    // show magnified thumbnail on hover
    img.addEventListener('mousemove', event => {
      const [mouseX, mouseY] = [event.pageX + 90, event.pageY - 100]
      const {top, left, bottom, right} = img.getBoundingClientRect()
      transform.translate = [
        ((mouseX - left) / right) * 700,
        ((mouseY - top) / bottom) * 700,
      ]
      magnifierEl.style = `
        display: block;
        top: ${mouseY}px;
        left: ${mouseX}px;
      `
      setTransformStyle(magnifierImg, transform)
    })
    
    // zoom in/out with mouse wheel
    img.addEventListener('wheel', event => {
      event.preventDefault()
      const scrollingUp = event.deltaY < 0
      const {scale} = transform
      transform.scale = scrollingUp && scale < 3
        ? scale + 0.1
        : !scrollingUp && scale > 1
        ? scale - 0.1
        : scale
      setTransformStyle(magnifierImg, transform)
    })
    
    // reset after mouse leaves
    img.addEventListener('mouseleave', () => {
      magnifierEl.style = ''
      magnifierImg.style = ''
    })
    
    
  }
  
  const img = document.querySelector('.image-preview-js')
  makeImgMagnifiable(img)