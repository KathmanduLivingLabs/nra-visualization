var React = require('react');
var ReactRouter = require('react-router');
var Link=ReactRouter.Link;
var Nav = require('../components/Nav.js')

// Load Components
// var Nav = require('./Nav')

// var MyMap = require('./Maps')

require("../styles/styles.css")

var Nav = React.createClass({
	getInitialState: function() {
		return {
		}
	},
	render: function(){
		return(
			<nav className="navbar navbar-custom">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">KLL <strong>Collect</strong> | Dashboard</a>
					</div>
				</div>
			</nav>
			)
	}
})

module.exports = Nav;