import React from 'react'
import GoogleMap from 'google-map-react'

export default class Map extends React.Component {

	constructor(...props) {
		super(...props);

		this.state = {
			zoom: this.props.zoom,
			center: {lat: this.props.lat, lng: this.props.lng}
		}

	}

	render () {
		return (
			 <GoogleMap
				  bootstrapURLKeys={{
				  	key: 'AIzaSyDnSmYkvmuVWXEIvYWGkXRgbbYCpui4A4Y'
				  }}
				  defaultCenter ={this.state.center}
				  defaultZoom={this.state.zoom}

			 />
		)
	}
}


