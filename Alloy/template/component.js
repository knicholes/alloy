var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	A$ = Alloy.A,
	$;

<%= controllerCode %>

if (_.isFunction(module.exports.extend)) {
	module.exports = module.exports.extend({
		__init: function() {
			$ = this;
		},
		__layout: function($) {
			// if (this.__parent && this.__parent.prototype.__layout) {
			// 	this.__parent.prototype.__layout($);
			// }
			<%= viewCode %>
		}
	});
}