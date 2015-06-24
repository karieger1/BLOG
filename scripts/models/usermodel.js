var parseSettings = require('../config/parse');
var Backbone = require('backparse')(parseSettings);

module.exports = Backbone.Model.extend({
	defaults: {
		username: '',
		password: '',
		email: ''
	},
	parseClassName: '_User',
	idAttribute: 'objectId',
	isUser: true,
	save: function(key, val, options) {
		this.unset('confirmPassword');
		return Backbone.Model.prototype.save.call(this, key, val, options);
	}
});

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