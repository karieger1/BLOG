var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults:  {
		title:" ",
		body: " ",
		category: null,
		username: null,
		createdAt: null
	},

});