function ApplicationWindow() {

	var StartView = require('ui/common/StartView');
	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff'
	});
	var startView = new StartView();
	self.add(startView);

	return self;
}

module.exports = ApplicationWindow;
