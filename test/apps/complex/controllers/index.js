function onReady(args) {
	$.index.open();
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});