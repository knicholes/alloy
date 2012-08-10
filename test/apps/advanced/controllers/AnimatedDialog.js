function openDialog() {
	var duration = 500;

	// Animate in the dialog
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

module.exports = Alloy.getController('BaseDialog').extend({
	// alloy lifecycle functions
	onInit: function(args) { Ti.API.info('- AnimatedDialog onInit'); },
	onReady: function(args) { Ti.API.info('- AnimatedDialog onReady'); },

	// Override BaseDialog's openDialog method with AnimatedDialog's
	// animated version.
	openDialog: openDialog
});