function onReady(args) {
	args || (args = {});
	$.id = $.row.id = args.id;
	$.name.text = args.name || '<no name>';
	$.score.text = args.score || 0;
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});
