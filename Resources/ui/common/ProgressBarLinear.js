function ProgressBarLinear() {
	var view = Ti.UI.createView();

	var backButton = Ti.UI.createButton({
		title : "Back",
		top : 10,
		left : 5
	});
	view.add(backButton);

	backButton.addEventListener('click', function(e) {
		win.close();
	});

	function progress(ev) {
		self.children[0].show();

		self.children[0].children[0].width = 0;

		self.children[1].show();

		self.children[1].text = 'Progress';

		self.children[2].hide();

		var val = Math.round(ev * 100);

		if (val <= 100) {
			self.children[1].text = val.toString().replace(".", "") + '%';

			self.children[0].children[0].width = Math.round((self.children[0].width - 2) * ev);
		}

	}

	var self = Ti.UI.createView({
		backgroundColor : '#232323',

		top : 40
	});

	var progressBackgroundView = Ti.UI.createView({
		width : 300,
		height : 27,
		left : ((Ti.Platform.displayCaps.platformWidth - 300) / 2),
		top : (Ti.Platform.displayCaps.platformHeight / 2),
		visible : false,
		backgroundImage : 'assets/images/bg_bar.png'
	});
	self.add(progressBackgroundView);

	var progressView = Ti.UI.createImageView({
		width : 0,
		height : 25,
		left : 1,
		top : 1,
		backgroundColor : "#4ba818",
		borderRadius : 3
	});
	progressBackgroundView.add(progressView);

	var lblSending = Ti.UI.createLabel({
		width : 'auto',
		right : ((Ti.Platform.displayCaps.platformWidth - 300) / 2),
		top : ((Ti.Platform.displayCaps.platformHeight / 2) + 30),
		text : '',
		height : 20,
		font : {
			fontFamily : 'Arial',
			fontSize : 14,
			fontWeight : 'bold'
		},
		color : '#fff',
		textAlign : 'right',
		visible : false
	});
	self.add(lblSending);

	var btnChoosePhoto = Ti.UI.createButton({
		width : 220,
		height : 35,
		title : 'Start',
		font : {
			fontFamily : 'Arial'
		},
		color : '#000000',
		top : (Ti.Platform.displayCaps.platformHeight / 2),
		visible : true
	});

	var interval,
	    val = 0;
	btnChoosePhoto.addEventListener('click', function(e) {

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

			progress(val);

			val += 0.01;

		}, 100);

	});
	self.add(btnChoosePhoto);
	view.add(self);

	view.addEventListener('setWin', function(e) {
		win = e.win;
	});

	return view;

}

module.exports = ProgressBarLinear;
