var React = require('react');
var ReactRouter = require('react-router');
var Link=ReactRouter.Link;
var Nav = require('../components/Nav.js')
var Maps = require('../components/Maps.js')
var Insights = require('../components/Insights.js')
var Chart = require('./c3Chart.js')


require('leaflet-sidebar-v2')
require('../styles/leaflet-sidebar.css')

// Load Components
// var Nav = require('./Nav')

// var MyMap = require('./Maps')

require("../styles/styles.css")

var Sidebar = React.createClass({
	getInitialState: function() {
		return {
			chartData: [["a","b","c","d","e","f"],["yaxis",62.28452945,57.92606443,75.47298675,197.0648713,78.8836633,113.04584]]
		}
	},
	render: function(){
		return(

			 <div id="sidebar" className="sidebar collapsed ">
			        <div className="sidebar-tabs ">
			            <ul role="tablist">
			                <li><a href="#home" role="tab"><i className="fa fa-area-chart"></i></a></li>
			            </ul>


			        </div>

			        <div className="sidebar-content">
			            <div className="sidebar-pane" id="home">
			                <h1 className="sidebar-header pull-right">
			                    <span className="sidebar-close"><i className="fa fa-remove"></i></span>
			                </h1>
								<Insights large= {this.props.large} />
			            </div>

			            <div className="sidebar-pane" id="profile">
			                <h1 className="sidebar-header">Profile<span className="sidebar-close"><i className="fa fa-caret-left"></i></span></h1>
			            </div>

			            <div className="sidebar-pane" id="messages">
			                <h1 className="sidebar-header">Messages<span className="sidebar-close"><i className="fa fa-caret-left"></i></span></h1>
			            </div>

			            <div className="sidebar-pane" id="settings">
			                <h1 className="sidebar-header">Settings<span className="sidebar-close"><i className="fa fa-caret-left"></i></span></h1>
			            </div>
			        </div>
			</div>
			)
				
	}
})

module.exports = Sidebar;