var start = document.getElementById('start')
var stop = document.getElementById('stop')
var reset = document.getElementById('reset')

var Interval 

function Stopwatch(duration,display) {
	if (!isNaN(duration)) {
	var timer = duration, minutes, seconds;

	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes
		seconds = seconds < 10 ? "0" + seconds : seconds

		$(display).html(`${minutes}m : ${seconds}s`) 
		
		function countUp() {timer++}
		start.onclick = function() {
			clearInterval(Interval)
			Interval = setInterval(countUp,1000)           
		}

		stop.onclick = function() {
			clearInterval(Interval)
		}

		reset.onclick = function() {
			clearInterval(Interval)
			timer = 0
		}
		
		},1000)
	}
}

Stopwatch(0,'#display')
