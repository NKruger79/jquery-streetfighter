$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		// alert('mouse entered .ryu div');
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		// alert('mouse left');
	})
	.mousedown(function() {
		// console.log('mousedown')
		// play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// show hadouken and animate it to the right of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '620px');
			}
		);
	})
	.mouseup(function() {
		// console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = .05;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}