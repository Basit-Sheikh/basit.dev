$(document).ready(function() {
	
	jQuery(window).scroll(function(){
		var fromtop = jQuery(window).scrollTop();
		jQuery(".bg").css({"background-position-y": fromtop+"px"});
	});

	$('#slides').superslides({
		animation_speed: 'slow',
		play: 0,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.    Innovator.    Creator."],
		//strings: ["Software Engineer.", "Innovator.", "Creator."],
		typeSpeed: 70,
		loop: true,
		autoPlay: 20,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		items:4,
		loop:true,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause: true,
		slideSpeed : 2000,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }	    
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var firstTimeCounting = false;

	$(window).scroll(function() {
		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
		}
		if(!firstTimeCounting && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());
				element.countup(endVal);
			})
			firstTimeCounting = true;
		}
	});
});
















