function onReady(args) {
	$.index.open();
}

function doClick(e) {  
    alert($.t.text);
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});
