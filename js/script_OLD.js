$(document).ready(function() {
	
	$('#slides').superslides({
		animation: 'fade',
		animation_speed: 'slow',
		//pagination: false,
		play: 5000
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Innovator.", "Creator."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
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

	//don't begin the skill wheel animations until the scroll has reached the skills section
    var skillsTopOffset = $(".skillsSection").offset().top; //contains position of skills section in window

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

    });

	$(".counter").each(function() {
		var element = $(this);
		var endVal = parseInt(element.text());

		element.countup(endVal);
	})


});