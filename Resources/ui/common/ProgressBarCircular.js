function ProgressBarCircular() {

	var pb = require("/ui/lib/CircularProgressBar");
	var self = Ti.UI.createView({
		backgroundColor : "#65b2e1"
	});

	var backButton = Ti.UI.createButton({
		title : "Back",
		top : 15,
		left : 5
	});
	self.add(backButton);

	backButton.addEventListener('click', function(e) {
		win.close();
	});

	var circleProgress = new pb({
		percent : 0,
		size : 66,
		margin : 4,
		backgroundColor : '#65b2e1',
		progressColor : '#fff',
		progressOpacity : 1.0,
		bgProgressOpacity : 0.9,
		topper : {
			color : '#65b2e1',
			size : 56
		},
		font : {
			visible : false,
			color : '#900',
			size : 12,
			shadowColor : '#900',
			shadowRadius : 1,
			shadowOffset : {
				x : 0,
				y : 1
			}
		}
	});
	self.add(circleProgress);

	btnStartCircular = Ti.UI.createButton({
		title : "Start",
		bottom : 60
	});
	self.add(btnStartCircular);

	var interval,
	    val = 0;

	btnStartCircular.addEventListener('click', function() {
		clearInterval(interval);
		val = 0;
		if (interval) {
			clearInterval(interval);
		}
		interval = setInterval(function() {
			// Ti.API.info('INTERVAL FIRED value ' + val);
			if (val >= 1.01) {
				clearInterval(interval);

				return;
			}
			circleProgress.setProgress(val);

			val += 0.01;

		}, 10);
	});

	self.addEventListener('setWin', function(e) {
		win = e.win;
	});

	return self;

}

module.exports = ProgressBarCircular;
