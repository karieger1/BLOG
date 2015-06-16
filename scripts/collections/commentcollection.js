var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var CommentModel = require("../models/commentmodel");

module.exports = Backbone.Collection.extend({
	model: CommentModel
});