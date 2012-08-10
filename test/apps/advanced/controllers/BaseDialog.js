function onReady(args) {
	Ti.API.info('- BaseDialog onReady');
	args || (args = {});
	this.referenceWin = args.win;
}

function openDialog() {
	if ($.referenceWin) {
		$.referenceWin.add($.cover);
		$.referenceWin.add($.dialog);
	}
}

function closeDialog() {
	if ($.referenceWin) {
		// remove dialog components
		$.referenceWin.remove($.cover);
		$.referenceWin.remove($.dialog);	

		// mark for garbage collection
		$.referenceWin = $.dialog = $.cover = null;
	}
}

module.exports = Alloy.getController('BaseController').extend({
	// alloy lifecycle functions
	onInit: function(args) { Ti.API.info('- BaseDialog onInit'); },
	onReady: onReady,

	// custom functions
	openDialog: openDialog,
	closeDialog: closeDialog
});