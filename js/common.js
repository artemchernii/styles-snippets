$(function () {
  //SVG Fallback
  if (!Modernizr.svg) {
    $("img[src*='svg']").attr('src', function () {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $('form').submit(function () {
    //Change
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      alert('Thank you!');
      setTimeout(function () {
        // Done Functions
        $(this).trigger('reset');
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if ($('html').hasClass('chrome')) {
      $.smoothScroll();
    }
  } catch (err) {}

  $('img, a').on('dragstart', function (event) {
    event.preventDefault();
  });
});

$(window).load(function () {
  $('.loader_inner').fadeOut();
  $('.loader').delay(900).fadeOut('slow');
});

window.onload = () => {
  // button wuth cursor gradient
  const btn = document.querySelector('.mouse-cursor-gradient-tracking');
  btn.addEventListener('mousemove', (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
  // button wuth cursor gradient
  // Comparison script
  function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName('img-comp-overlay');
    for (i = 0; i < x.length; i++) {
      /* Once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
    }

    function compareImages(img) {
      var slider,
        img,
        clicked = 0,
        w,
        h;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* Set the width of the img element to 50%: */
      img.style.width = w / 2 + 'px';
      /* Create slider: */
      slider = document.createElement('DIV');
      slider.setAttribute('class', 'img-comp-slider');
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);
      /* Position the slider in the middle: */
      slider.style.top = h / 2 - slider.offsetHeight / 2 + 'px';
      slider.style.left = w / 2 - slider.offsetWidth / 2 + 'px';
      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener('mousedown', slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener('mouseup', slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener('touchstart', slideReady);
      /* And released (for touch screens: */
      window.addEventListener('touchend', slideFinish);
      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener('mousemove', slideMove);
        window.addEventListener('touchmove', slideMove);
      }
      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked == 0) return false;
        /* Get the cursor's x position: */
        pos = getCursorPos(e);
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Execute a function that will resize the overlay image according to the cursor: */
        slide(pos);
      }
      function getCursorPos(e) {
        var a,
          x = 0;
        e = e.changedTouches ? e.changedTouches[0] : e;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Resize the image: */
        img.style.width = x + 'px';
        /* Position the slider: */
        slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + 'px';
      }
    }
  }
  initComparisons();
  // Comparison script
};
