var React = require('react');
var Backbone = require("backbone");
Backbone.$ = require("jquery");
var BlogList = require("./components/bloglistcomponent");
var BlogPostForm = require("./components/blogpostformcomponent");
var BlogPostCollection = require("./collections/blogpostcollection");
var CommentCollection = require("./collections/commentcollection");
var CommentForm = require("./components/commentformcomponent");
var LoginForm = require("./components/loginformcomponent");
var Counter = require("./components/countercomponent");
var comments = new CommentCollection();

var blogPosts = new BlogPostCollection([
	{
		title: 'Breaking news! React is awesome :)',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'react',
		createdAt: new Date('2015-06-16T08:13:00')
	},
	{
		title: 'The Iron Yard opens a campus in London',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'the iron yard',
		createdAt: new Date('2015-06-15T15:24:00')
	},
	{
		title: 'I\'m out of titles',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'dispair',
		createdAt: new Date('2015-06-16T10:04:00')
	},
	{
		title: 'Title 1',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'react',
		createdAt: new Date('2015-06-16T08:13:00')
	},
	{
		title: 'Title 2',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'the iron yard',
		createdAt: new Date('2015-06-15T15:24:00')
	},
	{
		title: 'Title 3',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'dispair',
		createdAt: new Date('2015-06-16T10:04:00')
	}
]);

var allCategories = ['react', 'javascript', 'html', 'css'];

function newPost(postModel) {
	console.log('newPost was run');
	blogPosts.add(postModel);
}

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"home": "home",
		"post": "post",
	},

	login: function() {
		React.render(

			<LoginForm blogPosts={blogPosts} />,//this needs to match variable name
			document.getElementById('container')
		);
	},

	home: function() {
		React.render(
			<div>
				<BlogListComponent posts={blogPosts} number={7} />
			</div>,
			document.getElementById('container')
		);
	},

	post: function() {
		React.render(
			<BlogFormComponent allCategories={allCategories} newPost={newPost} />,
			document.getElementById('container')
		);
	}
});


var myApp = new App(); //instantiate the router
Backbone.history.start(); //start listening for change events