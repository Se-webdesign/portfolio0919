$(function(){
	$(document).ready(function(){
		$('.slider').bxSlider({
				auto: true,
				pause: 5000,
		});
	});

	$('.btn').click(function() {
		$('.hide').fadeIn();
		$(".form").hide();
	})

	$('.menu-bar').click(function() {
		$('.menu-item').fadeIn();
		$('.menu-bar').hide();
		$('.back-video').hide();
	})

	$('.menu-item').click(function() {
		$('.menu-item').hide();
		$('.menu-bar').fadeIn();
		$('.back-video').fadeIn();
	})


});
