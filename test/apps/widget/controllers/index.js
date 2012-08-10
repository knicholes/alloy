function onReady(args) {
	$.w.setText("Press a button to see something happen");
	$.index.open();
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});