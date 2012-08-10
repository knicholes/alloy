var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	A$ = Alloy.A,
	$ = {};

<%= controllerCode %>

var __obj = _.isFunction(module.exports.extend) ? module.exports : Alloy.getController('BaseController');
module.exports = __obj.extend({
	__init: function() {
		$ = this;
	},
	__layout: function($) {
		<%= viewCode %>
	},
	__final: function(thisRef) {
		$ = thisRef || $;
	}
}, {}, true);