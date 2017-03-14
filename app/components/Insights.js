var React = require('react');
var ReactRouter = require('react-router');
var Link=ReactRouter.Link;
var Chart = require('./c3Chart.js')

require("../styles/styles.css")


// Load Components
// var Nav = require('./Nav')

// var MyMap = require('./Maps')

require("../styles/styles.css")

var Insights = React.createClass({
	getInitialState: function() {
		return {
			chartData1: [["Construction Completed","Under Construction","Not Started Yet"],["yaxis",21,57,22]],
			chartData: [["Yes","No"],["yaxis",80,20]]
		}
	},
	render: function(){
		return(
				<div className="row-fluid ">
					<div className="col-md-2 col-lg-2 col-sm-6">
						<div className="row-fluid bar-header">Surveys Submitted</div>
						<div className="row-fluid total-surveys">7823</div>

					</div>
					<div className="col-md-4 col-lg-4 col-sm-12 ">
						<div className="row-fluid bar-header">status of construction</div>
						<div className="row-fluid "><Chart.LineAreaBar columns={this.state.chartData1} id = "chart1"  chartType="bar" /></div>
					</div>
					<div className="col-md-4 col-lg-4 col-sm-12">
						<div className="row-fluid bar-header">Applied for Installments?</div>
						<div className="row-fluid "><Chart.LineAreaBar columns={this.state.chartData} id = "chart2"  chartType="bar" /></div>
					</div>
				</div>
			)
	}
})

module.exports = Insights;