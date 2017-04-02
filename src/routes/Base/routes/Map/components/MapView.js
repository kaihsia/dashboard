import React from 'react'
import ReactDOM from 'react-dom'
import './Map.scss'
import ReactMapboxGl, { ScaleControl, ZoomControl, Cluster, Marker } from "react-mapbox-gl";

// DUMMY COORDS
const markerCoord = [
  [-122.403779, 37.781743],
  [-22.403779, 67.781743],
  [-22.403779, 67.781743],
  [-42.403779, 77.781743]
];
const center = [ -122.403779, 37.781743 ];

const markerStyles = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#51D5A0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #C9C9C9'
};

const clusterStyles = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498'
};

export default class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.onMarkerClick.bind(this);
    this.clusterMarker.bind(this);
  }

  // Click Handler
  onMarkerClick(coords) {
    console.log(coords);
  }

  // Cluster Factory
  clusterMarker = (coordinates, pointCount) => (
    <Marker coordinates={coordinates} key={coordinates.toString()} style={clusterStyles}>
      { pointCount }
    </Marker>
  );


  render() {
      const { incidents } = this.props
      // console.log(incidents);

    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
        zoom={[4]}
        center={center}
        containerStyle={{
          height: "100vh",
          width: "100%"
        }}>
          <ScaleControl/>
          <ZoomControl/>
          <Cluster ClusterMarkerFactory={this.clusterMarker} clusterThreshold={8}>
            {
              incidents.map((incident, key) => (
                <Marker
                  key={key}
                  style={markerStyles}
                  className="test"
                  coordinates={[incident.longitude, incident.latitude ]}
                  onclick={this.onMarkerClick}>
                  {incident.address}
                  {incident.description}
                </Marker>
              ))
            }
          </Cluster>
      </ReactMapboxGl>
    )
  }
}
