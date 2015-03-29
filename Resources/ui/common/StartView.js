function StartView() {

	var self = Ti.UI.createView();

	var progressButton1 = Ti.UI.createButton({
		title : "Progress Bar Linear",
		top : 50
	});
	self.add(progressButton1);

	progressButton1.addEventListener('click', function(e) {
		var ProgressBarLinear = require('/ui/common/ProgressBarLinear');

		var progressBarLinear = new ProgressBarLinear();

		var win = Ti.UI.createWindow({
			width : "100%",
			height : "100%",
			backgroundColor : "white"
		});
		win.add(progressBarLinear);

		progressBarLinear.fireEvent('setWin', {
			win : win
		});

		win.open();

	});

	var progressButton2 = Ti.UI.createButton({
		title : "Progress Bar Circular",
		top : 200
	});
	self.add(progressButton2);

	progressButton2.addEventListener('click', function(e) {
		var ProgressBarCircular = require('/ui/common/ProgressBarCircular');

		var progressBarCircular = new ProgressBarCircular();

		var win = Ti.UI.createWindow({
			width : "100%",
			height : "100%",
			backgroundColor : "white"
		});
		win.add(progressBarCircular);

		progressBarCircular.fireEvent('setWin', {
			win : win
		});

		win.open();

	});

	return self;

}

module.exports = StartView;
