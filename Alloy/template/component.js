var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	A$ = Alloy.A,
	$ = {};

<%= controllerCode %>

module.exports = module.exports.extend({
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