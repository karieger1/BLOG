var React = require('react');

module.exports = React.createClass({
	componentWillMount: function () {
	    this.props.user.on('change', function() {
	    	console.log('user changed nav');
	    	console.log(this);
	    	this.forceUpdate();
	    }, this);
	},
	render: function() {
		console.log('render nav', this.props.user);
		var links = [];
		var userDropdown = null;
		if(!this.props.user.id) {
			links.push(<li key="register"><a href="#register">Register</a></li>);
			links.push(<li key="login"><a href="#login">Log in</a></li>);
		}
		else {
			userDropdown = (
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.user.get('username')} <span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><a href="#admin">Admin</a></li>
							<li><a href="#" onClick={this.onLogOut}>Log out</a></li>
						</ul>
					</li>
				</ul>
			);
		}
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Aarons Blog</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							{links}
							{/*<li><a href="#">Link</a></li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" className="divider"></li>
									<li><a href="#">Separated link</a></li>
									<li role="separator" className="divider"></li>
									<li><a href="#">One more separated link</a></li>
								</ul>
							</li>*/}
						</ul>
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Search" />
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
						{userDropdown}
					</div>
				</div>
			</nav>
		);
	},

	onLogOut: function() {
		this.props.user.clear();
	}
});