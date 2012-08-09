function openDialog() {
	var duration = 500;
	var animation = Ti.UI.createAnimation({
		duration: 500,
		opacity: 0.5
	});

	$.cover.opacity = 0;
	$.dialog.opacity = 0;
	$.referenceWin.add($.cover);
	$.referenceWin.add($.dialog);
	$.cover.animate({
		duration: duration,
		opacity: 0.5
	});
	$.dialog.animate({
		duration: duration,
		opacity: 1.0
	});
}

function Controller() {
	// TODO: fix arguments
	_.extend(this, new (Alloy.getController('BaseDialog'))(arguments[0]));
	this.openDialog = openDialog;
	$ = this;
}

module.exports = Controller;