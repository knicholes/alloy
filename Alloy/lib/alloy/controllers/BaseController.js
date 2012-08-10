var Alloy = require('alloy'), 
	Backbone = Alloy.Backbone,
	_ = Alloy._;

var Controller = function(args, thisRef) {
	// collection of top-level elements
	this.__roots = [];

	// If this instance has a parent, use an instance of the parent
	// as the base for this instance. This allows us to execute the 
	// lifecycle functions of the parent then those of the current
	// instance, rather than just overwriting the parent's lifecycle.
	if (this.__parent) {
		var instance = new this.__parent.prototype.constructor(args, this);
		_.defaults(this, instance);
	} 

	// Execute the sequence of lifecycle functions 
	if (this.__init) { this.__init(); }
	if (this.onInit) { this.onInit.call(this, args); }
	if (this.__layout) { this.__layout(this); }
	if (this.onReady) { this.onReady.call(this, args); }

	// If a reference to a subclass has been passed in, pass it to 
	// __final() so that the $ variable will reference the subclass,
	// not the parent. 
	if (thisRef) {
		if (this.__final) { this.__final(thisRef); }
	}
}
// Controller.extend = Backbone.Model.extend;
Controller.extend = function(protoOpts, classOpts, skipParent) {
	// don't change the reference to the parent "class". This is 
	// done in the component.js. It allows extension of a class 
	// definition without changing the inheritance chain.
	if (!skipParent) {
		protoOpts.__parent = this;
	}

	// Levergae Backbone's extend() method to give Alloy controllers
	// inheritance.
	return Backbone.Model.extend.call(this, protoOpts, classOpts);
}
_.extend(
	Controller.prototype, 

	// Give Alloy controllers Backbone eventing (on, off, trigger)
	Backbone.Events, 

	// Set other properties commons to all controllers.
	{
		// Identifies Alloy controllers
		__iamalloy: true,

		// Establishing this controllers position in a view hierarchy
		setParent: function(parent) {
			// If it's an Alloy controller, use its parent. Otherwise,
			// use the given parent.
			if (parent.__iamalloy) {
				this.parent = parent.parent;
			} else {
				this.parent = parent;
			}

			// Iterate through all top-level elements. If one of these 
			// elements is an Alloy component itself, call setParent 
			// again recursively. If not, add the element to the parent.
			for (var i = 0, l = this.__roots.length; i < l; i++) {
				if (this.__roots[i].__iamalloy) {
					this.__roots[i].setParent(this.parent);
				} else {
					this.parent.add(this.__roots[i]);
				}
			}
		},

		// Add a top-level element to the controller
		addRoot: function(view) {
			this.__roots.push(view);
		},

		// Return an array of all top-level controllers
		getRoots: function() {
			return this.__roots;
		},

		// Return the first top-level element
		getRoot: function(index) {
			return this.__roots[index || 0];
		}
	}
);
module.exports = Controller;
