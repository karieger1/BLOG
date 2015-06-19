var Backbone = require('backbone');  //models and collections are built using backbone!
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		username: "",
		password: "",
		// email: "",
		// numPosts: null,
		// blogId: ""
	},

	//validate stuff here
	
		validate: function(model){
		if(validator.isNull(model.user)){
			return 'You must enter an email address.'
		}
		else if(!validator.isEmail(model.user)){
			return 'Enter a valid email address.'
		}
		else if(validator.isNull(model.password)){
			return 'Enter a password.'
		}		
		else if(model.user !== 'blah@blah.com'){
			return 'Nope.'
		}
		else if( model.password !== 'blah'){
			return 'Nope.'
		}

	}
})