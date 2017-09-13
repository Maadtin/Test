import React from 'react'
import { Helmet } from 'react-helmet'
import Map from '../components/Map'

const Contact = () => (
	<div className="Contacto section">
		<Helmet>
			<title>Contacto</title>
			<meta name="description" content="Descripción de Contacto"/>
		</Helmet>
		<h1>Contacto</h1>
		<div className="App-location">
			<span className="subtitle centered">Localización del Local</span>
			<div className="App-Map">
				<Map lat={41.385197} lng={2.180433} zoom={17} />
			</div>
		</div>
	</div>
);



export default Contact