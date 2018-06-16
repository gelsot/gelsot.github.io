//@prepros-prepend vendor/jquery.js
//@prepros-prepend vendor/TweenMax.js
//@prepros-prepend vendor/TextPlugin.js
$(document).ready(function(){
	const $span1 = $('.flipper_container aside:nth-child(1) span:nth-child(1)');
	const $span2 = $('.flipper_container aside:nth-child(1) span:nth-child(2)');
	const $span3 = $('.flipper_container aside:nth-child(3) span:nth-child(1)');
	const $span4 = $('.flipper_container aside:nth-child(3) span:nth-child(2)');
	const logo = $('#logo_container svg');
	const spanSpeed = 1.5;
	const angel = $("h1[data-name='Angel']");
	const davcev = $("h1[data-name='Davcev']");
	const welcome = $("h4[data-name='Welcome']");
	const dotCom = $("h4[data-name='Com']");
	const copy = $('footer p');
	const download = $('.download');
	const flipper = $('.flipper_container');

	let introAnimation = new TimelineMax();

	introAnimation
		.from($('section'), 1.5, {
			backgroundColor: '#000000'
		})
		.from($('#logo_container svg'), 0.5, {
			scaleY: 0,
			ease: Expo.easeOut,
			delay: 0.5
		})
		.staggerFrom($('.col_l .block:nth-child(2) small, .col_l .block:nth-child(2) a'), 1, {
			x: -20,
			autoAlpha: 0,
			ease: Back.easeOut
		}, 0.2, "-=0.2")
		.staggerFrom($('.social_media_wrapper a'), 0.3, {
			x: -20,
			autoAlpha: 0,
			ease: Back.easeOut
		}, 0.04, '-=0.7')
		.from($('.col_l .block:nth-child(3) p'), 0.5, {
			y: 30,
			autoAlpha: 0,
			ease: Back.easeOut
		}, "-=0.3")
		.from(welcome, 1, {
			x: 40,
			autoAlpha: 0,
			ease: Linear.easeOut
		}, "-=0.4")
		.from(angel, 0.6, {
			x: 40,
			autoAlpha: 0,
			ease: Linear.easeIn
		}, "-=0.7")
		.from(davcev, 1, {
			x: -40,
			autoAlpha: 0,
			ease: Linear.easeOut
		}, "-=1")
		.from(dotCom, 0.5, {
			x: 20,
			autoAlpha: 0,
			ease: Linear.easeOut
		}, "-=0.7")
		.from(flipper, 0.5, {
			y: -20,
			autoAlpha: 0,
			ease: Quint.easeOut
		}, "-=0.3")
		.from(copy, 0.5, {
			x: -20,
			autoAlpha: 0,
			ease: Linear.easeOut
		}, "-=0.3")
		.from(download, 0.6, {
			scaleY: 0,
			ease: Back.easeOut
		}, "-=0.2")


	$(window).on('load', ()=> {
		setTimeout(() => {
			introAnimation.play();
		}, 1000);
	})
	

	logo.on('mouseenter', function() {
		TweenMax.to($('#logo_letter'), 1, {
			scale: 0.8,
			transformOrigin: 'center',
			ease: Elastic.easeOut
		})
	}).on('mouseleave', function() {
		TweenMax.to($('#logo_letter'), 1, {
			scale: 1,
			transformOrigin: 'center',
			ease: Elastic.easeOut
		})
	})

	TweenMax.to($span1, spanSpeed, {
		y: 6,
		yoyo: true,
		repeat: -1,
		ease: Quint.easeInOut
	})

	TweenMax.to($span2, spanSpeed, {
		y: 3,
		yoyo: true,
		repeat: -1,
		ease: Quint.easeInOut
	})

	TweenMax.to($span3, spanSpeed, {
		y: -3,
		yoyo: true,
		repeat: -1,
		ease: Quint.easeInOut
	})

	TweenMax.to($span4, spanSpeed, {
		y: -6,
		yoyo: true,
		repeat: -1,
		ease: Quint.easeInOut
	})

	const h = $('.flipper').height();
	let tl = new TimelineMax({
		repeat: -1
	})

	tl.staggerFrom($('.flipper div label'), 1, {
		scaleY: 0,
		repeat: 1,
		yoyo: true,
		ease: Quint.easeOut
	}, 2)

})