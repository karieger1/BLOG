var Backbone = require('backbone');
Backbone.$ = require('jquery');
var UserModel = require('../models/usermodel');

module.exports = Backbone.Collection.extend({
	model: UserModel
});