function onReady(args) {
	Ti.API.info('bottom controller is executing');
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});