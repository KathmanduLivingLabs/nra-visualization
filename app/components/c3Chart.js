var React = require('react');
var ReactDOM = require('react-dom');
var d3 = require('d3');
var c3 = require('c3');

// const columns = [
//   ['My Numbers', 30, 200, 100, 400, 150, 250],
//   ['Your Numbers', 50, 20, 10, 40, 15, 25]
// ];
var chartHeight=screen.height*0.15;

var LineAreaBar = React.createClass({
  componentWillMount: function() {
    this._updateChart();
  },
  componentDidMount: function() {
    this._updateChart();
  },
  componentDidUpdate: function() {
    this._updateChart();
  },
  _updateChart: function() {
    var labels= this.props.columns[0]
    // console.log("MyColumns", this.props.columns[0])
     c3.generate({
      bindto: '#'+ this.props.id,
      data: {
        columns: [this.props.columns[1]],
        type: this.props.chartType,
        colors: {
            yaxis: '#29BF9A'
        },
        labels: {
           format: function (v, id, i, j) { return labels[i]==""? "" : labels[i] + " / "+v + "%"},
//             format: {
//                 data1: d3.format('$'),
// //                data1: function (v, id, i, j) { return "Format for data1"; },
//             }
        }
      },
      axis: {
        x:{
            show:false
          },
        y:{
            show:false
          },
        rotated:true
      },
      legend: {
          show: false
      },
    tooltip: {
        show: false
    },
      size: {
        height:chartHeight
      }
    });
  },
  render() {
    return <div id={this.props.id} ref="refName" ></div>;    
  }
});

var Scatter = React.createClass({
  componentDidMount: function() {
    this._updateChart();
  },
  componentDidUpdate: function() {
    this._updateChart();
  },
  _updateChart: function() {
    console.log("MyColumns", this.props.columns)
     chart = c3.generate({
      bindto: '#'+this.props.id,
      data: {
        x: this.props.columns[0][0],
        columns: this.props.columns,
        type: 'scatter',
        labels:{
//            format: function (v, id, i, j) { return "Default Format"; },
            format: function(v,id,i,j){
               return d3.round(v,2);
//                data1: function (v, id, i, j) { return "Format for data1"; },
            }
        }
      },
      point: {
         r: 10
      },
      axis: {
          x: {
              label: this.props.columns[0][0],
              tick: {
                  fit: false
              }
          },
          y: {
              label: this.props.columns[1][0]
          }
      }
    });
  },
  render() {
    return <div id={this.props.id} ></div>;    
  }
});


module.exports={
  LineAreaBar : LineAreaBar,
  Scatter: Scatter
};