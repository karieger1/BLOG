var React = require("react");
var BlogPostModel = require("../models/blogpostmodel");
var validator = require('validator');


module.exports = React.createClass({
	render: function() {
		return (
			<div className = blogsubmission>
				<form onSubmit={this.postSubmitted}>
					Title <input type="text" placeholder="Title your blog"/>
					Body <textarea name="body" placeholder="Write your stuff here..."/>
					Category 
					<select ref="Select a category">
						<option value="cats">Cats</option>
						<option value="kittens">Kittens</option>
						<option value="kitties">Kitties</option>
						<option value="catz">Catz</option>
					</select>
				</form>
			</div>
		);	
	}
//aaaand no idea where to go from here
