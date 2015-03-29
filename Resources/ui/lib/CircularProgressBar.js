function circularProgressBar(options) {
		var opts = options;
		if (opts.percent == null || opts.percent > 1 || opts.percent < 0)
			opts.percent = 1;
		if (opts.size == null)
			opts.size = 46;
		if (opts.margin == null)
			opts.margin = 4;
		if (opts.backgroundColor == null)
			opts.backgroundColor = 'transparent';
		if (opts.progressColor == null)
			opts.progressColor = '#4ba818';
		if (opts.topper == null)
			opts.topper = {};
		if (opts.topper.color == null)
			opts.topper.color = 'transparent';
		if (opts.topper.size == null)
			opts.topper.size = 36;
		if (opts.font == null)
			opts.font = {};
		if (opts.font.visible == null)
			opts.font.visible = true;
		if (opts.font.size == null)
			opts.font.size = 12;
		if (opts.font.color == null)
			opts.font.color = '#900';
		if (opts.font.shadowColor == null)
			opts.font.shadowColor = '#aaa';
		if (opts.font.shadowRadius == null)
			opts.font.shadowRadius = 1;
		if (opts.font.shadowOffset == null)
			opts.font.shadowOffset = {};
		if (opts.font.shadowOffset.x == null)
			opts.font.shadowOffset.x = 0;
		if (opts.font.shadowOffset.y == null)
			opts.font.shadowOffset.y = 1;
		if (opts.progressOpacity == null) 
			opts.progressOpcaity = 1.0;
		if (opts.bgProgressOpacity == null)
			opts.bgProgressOpacity == 1.0;

		var mainHolder = Ti.UI.createView({
			left : options.left,
			right : options.right,
			top : options.top,
			bottom : options.bottom,
			width : opts.size + opts.margin,
			height : opts.size + opts.margin,
			borderRadius : (opts.size + opts.margin) / 2,
			backgroundColor : opts.backgroundColor
		});

		var holder = Ti.UI.createView({
			width : opts.size,
			height : opts.size,
			borderRadius : opts.size / 2
		});

		var layer1 = Ti.UI.createView({
			width : opts.size,
			height : opts.size,
			borderRadius : opts.size / 2,
			backgroundColor : opts.progressColor,
			opacity : opts.progressOpacity
		});

		var layer2 = Ti.UI.createView({
			left : 0,
			width : opts.size / 2,
			height : opts.size,
			anchorPoint : {
				x : 1,
				y : 0.5
			},
			backgroundColor : opts.backgroundColor,
			opacity : opts.bgProgressOpacity
		});

		var layer3 = Ti.UI.createView({
			right : 0,
			width : opts.size / 2,
			height : opts.size,
			anchorPoint : {
				x : 0,
				y : 0.5
			},
			backgroundColor : opts.backgroundColor,
			opacity : opts.bgProgressOpacity
		});

		var layer4 = Ti.UI.createView({
			right : 0,
			width : opts.size / 2,
			height : opts.size,
			anchorPoint : {
				x : 0,
				y : 0.5
			},
			backgroundColor : opts.progressColor,
			opacity : opts.progressOpacity
		});

		var topper = Ti.UI.createView({
			width : opts.topper.size,
			height : opts.topper.size,
			borderRadius : opts.topper.size / 2,
			backgroundColor : opts.topper.color
		});

		var percentText = Ti.UI.createLabel({
			visible : opts.font.visible,
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			color : opts.font.color,
			font : {
				fontSize : opts.font.size
			},
			shadowColor : opts.font.shadowColor,
			shadowRadius : opts.font.shadowRadius,
			shadowOffset : {
				x : opts.font.shadowOffset.x,
				y : opts.font.shadowOffset.y
			},
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
			text : (opts.percent * 100) + '%'
		});

		mainHolder.add(holder);
		topper.add(percentText);
		holder.add(layer1);
		holder.add(layer2);
		holder.add(layer3);
		holder.add(layer4);
		holder.add(topper);

		var percent = opts.percent;
		var angle = 360 * percent;
		layer2.visible = (angle > 180) ? false : true;
		layer4.visible = (angle > 180) ? true : false;
		layer3.transform = Ti.UI.create2DMatrix().rotate(angle);

		function setProgress(argument) {
			var percent = argument;
			var angle = 360 * percent;
			layer2.visible = (angle > 180) ? false : true;
			layer4.visible = (angle > 180) ? true : false;
			layer3.transform = Ti.UI.create2DMatrix().rotate(angle);
			percentText.text = Math.round(percent * 100) + '%';
		}


		mainHolder.setProgress = setProgress;

		return mainHolder;
	}
	
	module.exports = circularProgressBar;