var Backbone = require('backbone');
Backbone.$ = require('jquery');
var CommentModel = require("../models/commentmodel");

module.exports = Backbone.Collection.extend({
	model: CommentModel
});