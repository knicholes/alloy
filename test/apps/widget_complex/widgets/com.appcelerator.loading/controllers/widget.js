function onReady(args) {
	args || (args = {});

	for (var k in args) {
		$.loading[k] = args[k];	
	}

	if (Ti.Platform.osname === 'mobileweb') {
	    $.loading.duration = 100;
	} 
	$.loading.start();
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady,
	setOpacity: function(opacity) {
		$.loading.opacity = opacity;		
	}
});