var React = require('react');
var ReactRouter = require('react-router');
var Link=ReactRouter.Link;
var Nav = require('../components/Nav.js')
var Maps = require('../components/Maps.js')
var Insights = require('../components/Insights.js')
var Chart = require('./c3Chart.js')


// Load Components
// var Nav = require('./Nav')

// var MyMap = require('./Maps')

require("../styles/styles.css")

var Root = React.createClass({
	getInitialState: function() {
		return {
			chartData: [["a","b","c","d","e","f"],["yaxis",62.28452945,57.92606443,75.47298675,197.0648713,78.8836633,113.04584]]
		}
	},
	render: function(){
		return(
				<div>

					<Nav/>


					<Maps.Multi/>
						<Insights/>
				</div>
			)
				
	}
})

module.exports = Root;