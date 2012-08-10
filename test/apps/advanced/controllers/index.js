function onReady(args) {
	$.win.open();
}

function openDialog(e) {
	var name = e.source.title;
	var controller = new (Alloy.getController(name))({
		win: $.win
	});	
	controller.openDialog();
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});