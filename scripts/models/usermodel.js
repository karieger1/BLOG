var Backbone = require('backbone');  //models and collections are built using backbone!
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		username: "",
		password: "",
		email: "",
		numPosts: null,
		blogId: ""
	},

	//validate stuff here
	validate: function(model) {
		if(validator.isNull(model.username)) {
			return "you must enter an email address"
		
		} else if {
			(!validator.isEmail(model.username)) {
				return "that's an email address?"
		
		} else if {
			(validator.isNull(model.password)) {
				return "you must enter a password"
		
		} else if {
			(model.username !== "karieger1@gmail.com" && model.password !== "password") {
				return "incorrect username and/or password"
			
		} else {
				return "success"
		}
	
	}
})