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
      <>
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

        <div id="nn-reviews"></div>

  
      <script
        src="https://s3.amazonaws.com/reviewcloud/widget/v2/reviews.min.js"
        data-key="4cbcb86c-04ae-4949-af96-cd39efb25ab9"
        data-type="full"
        data-count="5"
        />
        </>
      
    )
  }
}

export default SimpleMap