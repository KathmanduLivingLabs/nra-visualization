var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('react-dropdown')


var Drop = React.createClass({
    getInitialState: function(){
        return {
            options: this.props.options,
            value: 0,
            selectedRelation: this.props.options[0].osmID
        };
    },
    returnWardNumber: function(option) {
        return option.number !=0 ? ("- Ward No. " + option.number) : ""
    },
 	handleChange: function(e) {
        // var selectedVar = (this.state.options[e.target.value]);
        // console.log("Selected Relation:", this.state.options[e.target.value].osmID)
        this.setState({
            value: e.target.value,
            selectedRelation: this.state.options[e.target.value].osmID
        },this.props.handler(this.state.options[e.target.value].osmID));  
	},
    componentWillMount: function (){
        console.log(this.props.options)
    },
    render: function() {
        return (
        	<div className="clearfix">
                            <div className="row-fluid filter-title">
                                {this.props.title}
                            </div>
                            <select onChange={this.handleChange} value={this.state.value}>
                                {this.state.options.map(function(option, i){
                                        return <option value={i} key={i} >{option.name.toUpperCase()} {this.returnWardNumber(option).toUpperCase()}
                                               </option>;
                                }.bind(this))}
                            </select> 			
            </div>
        );
    }
});
 
module.exports = Drop;