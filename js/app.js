"use strict";
window.onload = function() {
	animationLogo();
	animateRobot();
}

function animateRobot() {
	var t = new TimelineMax({yoyo: true, repeat: -1});

	t.to("#android-robot",0.5,{rotation: "-65"})
	.to("#android-robot",0.5,{rotation: "-10"})
}

function animationLogo(){
	TweenMax.fromTo(".react-logo",1, {
    // from
	    css: {
	      y: "-20px",
	    }
	  },{
	    // to
	    css: {
	      y: "20px",
	    },

	    // option to repeat animation forever
	    repeat: -1,

	    // option to reverse the animation and rerun
	    yoyo: true,

	    // change easing type
	    ease: Power2.easeInOut,
	  }
	);
}


function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // Get the section pointed to by the link

    var selectorCurr =  link.getAttribute("href");
    // console.log(selectorCurr);
    var section = document.querySelector(selectorCurr);
    var sectionTop = section.offsetTop;
    // console.log(sectionTop);
    var sectionBottom = sectionTop + window.innerHeight;

    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = document.querySelector(element).offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {

  	(function(_i){
  		var link = links[_i];
  		link.addEventListener('click', function(e){
  			e.preventDefault();
  			var href = this.getAttribute('href');
  			scrollToElement(href);
  		});

  	})(i);
  }
}

// Use the onscroll callback to update slider.
window.onscroll = function() {
  // ...
  updateSliderControl();
  addSmoothScrolling();
}