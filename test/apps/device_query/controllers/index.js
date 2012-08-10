function onReady(args) {
	$.win.open();
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});