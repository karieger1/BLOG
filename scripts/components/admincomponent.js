var React = require('react');
var UserCollection = require('../collections/UserCollection');

module.exports = React.createClass({
	componentWillMount: function() {
		console.log('componentWillMount');
		var collection = new UserCollection();
		collection.fetch();
		console.log(collection);
	},
	render: function() {
		return (
			<div>
				
			</div>
		);
	}
});

//----below is stuff added in class-----
componentWillMount: function()

getInitialState: function()

<form onSubmit={this.onAddPost}>

onAddPost: function(e) {
	e.preventDefault();
	var post = new PostModel({
		title: this.refs.title.getDOMNode.value,
		body: this.refs.body.getDOMNode.value
	});

	if(post.isValid()) {
		post.save();
	}
	else {
		this.setState({errors: {generic: post.validationError}});
	}
	
}