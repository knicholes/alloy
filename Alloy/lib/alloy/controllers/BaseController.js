var Alloy = require('alloy'), 
	Backbone = Alloy.Backbone,
	_ = Alloy._;

var Controller = function() {
	var fixArgs = Array.prototype.slice.call(arguments);

	if (this.__init) { this.__init(); }
	if (this.onInit) { this.onInit.apply(this, fixArgs); }

	// future lifecycle event
	// if (this.__create) { this.__create(); }
	// if (this.onCreate) { this.onCreate.apply(this, fixArgs); }

	if (this.__layout) { this.__layout(); }
	if (this.onReady) { this.onReady.apply(this, fixArgs); }
}
Controller.extend = Backbone.Model.extend;
_.extend(Controller.prototype, Backbone.Events, {
	__roots: [],
	__iamalloy: true,
	setParent: function(parent) {
		if (parent.__iamalloy) {
			this.parent = parent.parent;
		} else {
			this.parent = parent;
		}

		for (var i = 0, l = this.__roots.length; i < l; i++) {
			if (this.__roots[i].__iamalloy) {
				this.__roots[i].setParent(this.parent);
			} else {
				this.parent.add(this.__roots[i]);
			}
		}
	},
	addRoot: function(view) {
		this.__roots.push(view);
	},
	getRoots: function() {
		return this.__roots;
	},
	getRoot: function(index) {
		return this.__roots[index || 0];
	}
});
module.exports = Controller;
