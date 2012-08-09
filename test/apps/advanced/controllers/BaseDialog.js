function onReady() {
	var args = arguments[0] || {};
	$.referenceWin = args.win;
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
	onReady: onReady,

	// custom functions
	openDialog: openDialog,
	closeDialog: closeDialog
});