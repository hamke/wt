var postdate = new Date();
var post_y = document.getElementsByClassName("post-year");
var post_m = document.getElementsByClassName("post-month");
var post_mm = document.getElementsByClassName("post-month-digits");
var post_d = document.getElementsByClassName("post-date");
var post_dd = document.getElementsByClassName("post-date-digits");
var i;
for (i = 0; i < post_y.length; i++) {
  post_y[i].innerHTML = postdate.getFullYear();
}
for (i = 0; i < post_m.length; i++) {
  post_m[i].innerHTML = postdate.getMonth() + 1;
}
for (i = 0; i < post_mm.length; i++) {
  post_mm[i].innerHTML = ("0" + (postdate.getMonth() + 1)).slice(-2);
}
for (i = 0; i < post_d.length; i++) {
  post_d[i].innerHTML = postdate.getDate();
}
for (i = 0; i < post_dd.length; i++) {
  post_dd[i].innerHTML = ("0" + (postdate.getDate())).slice(-2);
}

$(document).ready(function() {
  var email_value = 'hello' + '@' + 'mkttalk' + '.com';
  $('#email-info').html(email_value);
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#chat-button').fadeIn();
      $('#back-to-top').fadeIn();
    } else {
      $('#chat-button').fadeOut();
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function() {
    // $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  // $('#back-to-top').tooltip('show');
});

$(document).on('click', function() {
  $('.collapse').collapse('hide');
});

$(document).ready(function() {
  $('.dropdown, .btn-group').hover(function() {
    var dropdownMenu = $(this).children('.dropdown-menu');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.parent().toggleClass('open');
    }
  });
});

(function($) {
  $(function() {
    $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
    $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() {
      $(this).tab('show');
    });
  });
})(jQuery);

// /**
//  * @param {string} url - The source image
//  * @param {number} aspectRatio - The aspect ratio
//  * @return {Promise<HTMLCanvasElement>} A Promise that resolves with the resulting image as a canvas element
//  */
// function crop(url, aspectRatio) {
//
//   // we return a Promise that gets resolved with our canvas element
//   return new Promise(resolve => {
//
//     // this image will hold our source image data
//     const inputImage = new Image();
//
//     // we want to wait for our image to load
//     inputImage.onload = () => {
//
//       // let's store the width and height of our image
//       const inputWidth = inputImage.naturalWidth;
//       const inputHeight = inputImage.naturalHeight;
//
//       // get the aspect ratio of the input image
//       const inputImageAspectRatio = inputWidth / inputHeight;
//
//       // if it's bigger than our target aspect ratio
//       let outputWidth = inputWidth;
//       let outputHeight = inputHeight;
//       if (inputImageAspectRatio > aspectRatio) {
//         outputWidth = inputHeight * aspectRatio;
//       } else if (inputImageAspectRatio < aspectRatio) {
//         outputHeight = inputWidth / aspectRatio;
//       }
//
//       // calculate the position to draw the image at
//       const outputX = (outputWidth - inputWidth) * .5;
//       const outputY = (outputHeight - inputHeight) * .5;
//
//       // create a canvas that will present the output image
//       const outputImage = document.createElement('canvas');
//
//       // set it to the same size as the image
//       outputImage.width = outputWidth;
//       outputImage.height = outputHeight;
//
//       // draw our image at position 0, 0 on the canvas
//       const ctx = outputImage.getContext('2d');
//       ctx.drawImage(inputImage, outputX, outputY);
//       resolve(outputImage);
//     };
//
//     // start loading our image
//     inputImage.src = url;
//   })
//
// }

// ! function() {
// 	function detectDevTool(allow) {
// 		if (isNaN(+allow)) allow = 100;
// 		var start = +new Date();
// 		debugger;
// 		var end = +new Date();
// 		if (isNaN(start) || isNaN(end) || end - start > allow) {
// 			alert('Sorry, Developer Tools are unavailable now.');
// 			window.location.href = 'https://www.google.com/';
// 		}
// 	}
// 	if (window.attachEvent) {
// 		if (document.readyState === "complete" || document.readyState === "interactive") {
// 			detectDevTool();
// 			window.attachEvent('onresize', detectDevTool);
// 			window.attachEvent('onmousemove', detectDevTool);
// 			window.attachEvent('onfocus', detectDevTool);
// 			window.attachEvent('onblur', detectDevTool);
// 		} else {
// 			setTimeout(argument.callee, 0);
// 		}
// 	} else {
// 		window.addEventListener('load', detectDevTool);
// 		window.addEventListener('resize', detectDevTool);
// 		window.addEventListener('mousemove', detectDevTool);
// 		window.addEventListener('focus', detectDevTool);
// 		window.addEventListener('blur', detectDevTool);
// 	}
// }();
