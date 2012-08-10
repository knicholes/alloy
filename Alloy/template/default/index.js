function onReady(args) {
	$.index.open();
}

function doClick(e) {  
    alert($.label.text);
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});
