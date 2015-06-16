var React = require("React");
var CommentModel = require ("../models/commentmodel.js");
var CommentCollection = require ("../collections/commentcollection.js");


module.exports = React.createClass({
	render: function() {
		var multiplecomments = this.props.allComments.map(function(CommentModel) {
			return (<div key={CommentModel.cid}>{CommentModel.get("text")}</div>)

		});

		return (<div>{multiplecomments}</div>)
	}
});