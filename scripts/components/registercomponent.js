var React = require('react');
var validator = require('validator');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
	render: function() {
		var genericError = null;
		if(this.state.errors.generic) {
			genericError = (<div className="alert alert-danger" role="alert">{this.state.errors.generic}</div>);
		}
		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<h1>Register</h1>
					{genericError}
					<form onSubmit={this.onRegister}>
						<div className={'form-group' + (this.state.errors.email ? ' has-error' : '')}>
							<label>Email address</label>
							<input type="text" className="form-control" placeholder="Email" ref="email" />
							<p className="help-block">{this.state.errors.email}</p>
						</div>
						<div className={'form-group' + (this.state.errors.password ? ' has-error' : '')}>
							<label>Password</label>
							<input type="password" className="form-control" placeholder="Password" ref="password" />
							<p className="help-block">{this.state.errors.password}</p>
						</div>
						<div className={'form-group' + (this.state.errors.confirmPassword ? ' has-error' : '')}>
							<label>Confirm Password</label>
							<input type="password" className="form-control" placeholder="Confirm Password" ref="confirmPassword" />
							<p className="help-block">{this.state.errors.confirmPassword}</p>
						</div>
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
		);
	},
	hasError: function(errors) {
		for(var i in errors) {
			if(errors[i]) {
				return true;
			}
		}
		return false;
	},
	onRegister: function(e) {
		e.preventDefault();
		var self = this;
		var register = {
			email: this.refs.email.getDOMNode().value,
			username: this.refs.email.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			confirmPassword: this.refs.confirmPassword.getDOMNode().value
		};

		var errors = this.getInitialState().errors;

		if(!register.email) {
			errors.email = 'Please enter an email address.';
		}
		else if(!validator.isEmail(register.email)) {
			errors.email = 'This looks like an invalid email address.'
		}

		if(!register.password) {
			errors.password = 'Please enter a password.';
		}
		else if(!register.confirmPassword) {
			errors.confirmPassword = 'Please confirm your password.';
		}
		else if(register.password != register.confirmPassword) {
			errors.password = 'Passwords do not match.'
		}

		this.setState({errors: errors});

		if(!this.hasError(errors)) {
			this.props.user.save(register, {
				success: function(userModel) {
					self.props.router.navigate('/');
				},
				error: function(userModel, response) {
					self.setState({
						errors: {
							generic: response.responseJSON.error
						}
					});
				}
			});
		}
	}
});