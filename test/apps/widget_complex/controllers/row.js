function onReady(args) {
	args || (args = {});
	$.thumbnail.image = args.image;
	$.title.text = args.title || '';
	$.authors.text = args.authors || '';
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});