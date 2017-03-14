var React = require('react');
var ReactDOM = require('react-dom')
var L = require('leaflet')
var Sidebar = require('./Sidebar.js')


var markerLayer;

var Multi = React.createClass({
    getInitialState: function() {
        var maxWindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 300;
        return {
            large:false,
            height: "90vh",
            isLoading: false,
            customOptions: { 'maxWidth': '600' }
        }
    },

    rendermap: function() {
        var map = this.map = L.map(ReactDOM.findDOMNode(this)).setView([28.207, 83.992], 7);
        L.tileLayer('https://api.mapbox.com/styles/v1/arkoblog/ciy2j6jja00g52sqdi7u4114x/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJrb2Jsb2ciLCJhIjoiY2l5MmczdzJyMDAxODJxcDY5NHMyeHpkMyJ9.la6WiYXrUzF1Iy4aST9tnA', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors <br> Website developed by <a target = "_blank" href="http://kathmandulivinglabs.org">Kathmandu Living Labs</a>'
        }).addTo(map);

        L.control.scale().addTo(map);
        var sidebar = L.control.sidebar('sidebar',{ position: 'right' }).addTo(map);
        this.setState({large: !this.state.large})

         sidebar.open('home')
    },
    addMarkers: function(data) {
        markerLayer = new L.featureGroup;
        data.features.map(function(d, i) {
            var marker = new L.marker([d.geometry.coordinates[1], d.geometry.coordinates[0]],{title : d.properties.tags.name || d.properties.tags.amenity }).addTo(markerLayer)
                            $('body').on('click', '#button' + d.properties.id, function(){this.onEditClick(d)}.bind(this));
        }.bind(this));

        markerLayer.addTo(this.map);

    },

    updateMarkers: function(data) {
        // this.map.removeLayer(markerLayer)
        // this.addMarkers(data)
    },


    componentDidMount: function() {
        this.rendermap();

        // this.addMarkers(this.props.data);
    },


    componentDidUpdate: function() {
        // this.updateMarkers(this.props.data);
    },

    render: function() {
        return (
                        
                        <div>

                        <Sidebar large={this.state.large} />

                        <div id="map" className = "sidebar-map" style={{height:this.state.height}}>
                        </div>
                        </div> 
        )

    }
})


module.exports = {
    Multi:Multi,
}