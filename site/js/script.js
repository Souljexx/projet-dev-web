$(document).ready(function() {
	$('figure').click(function() {
		var bg = $('img',this).attr('src');
		$('#lightbox #image').css('background-image','url('+bg+')');
		$('#lightbox').fadeIn();
	});
	$('#lightbox').click(function() {
		$('#lightbox').fadeOut();
	});
});

onkeydown = onkeyup = function (e) {
	e = e || event ;
	e.which = e.which || e.keyCode;
	if(e.which == 27) $('#lightbox').fadeOut();
}

function changeSlide(direction){
	var currentImg = $('.active');
	var nextImg = currentImg.next();
	var previousImg = currentImg.prev();
		
	if(direction == 'next'){
		if(nextImg.length)
			nextImg.addClass('active');
		else
			$('.slider img').first().addClass('active');
	} else {
		if(previousImg.length)
			previousImg.addClass('active');
		else
			$('.slider img').last().addClass('active');
			
	}
	currentImg.removeClass('active');
}
