function onReady(args) {
	$.bottom.b.addEventListener('click',function(){
		$.middle.t.text = "You clicked me";
	});
}

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});