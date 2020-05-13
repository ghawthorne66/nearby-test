import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const GoogleMap = ({ text }) => <div></div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.114647,
      lng: -115.172813
    },
    zoom: 11
  }

  render() {
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCixT0iG2HZkTOLWBd2EKAWEpFK27dn8P0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <GoogleMap
            lat={36.114647}
            lng={-115.172813}
            text='My Marker'
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap