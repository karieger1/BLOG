var React = require('react');
var CommentForm = require('./components/commentform');
var CommentList = require("./components/commentlist");
var CommentCollection = require("./collections/commentcollection");
var comments = require("./components/commentcomponent");

React.render(
	<div>
		<CommentForm />
	</div>,
	document.getElementById('container')
);