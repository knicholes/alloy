var app = new (Alloy.getModel('modelTab')); 

function onReady(args) {
	// persist all changes
	app.on('change', function() { app.save(); });

	// Change label when 'count' changes on model
	app.on('change:count', function(model) {
		$.label.text = 'model: ' + JSON.stringify(model.attributes);
	});

	// fetch model from Ti.App.Properties adapter
	app.fetch();
}

function create(e) { app.save(app.defaults); }
function destroy(e) { app.destroy(); }
function increment(e) { app.set({'count':app.get('count')+1}); }

module.exports = Alloy.getController('BaseController').extend({
	onReady: onReady
});

