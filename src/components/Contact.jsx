import React from 'react'
import { Helmet } from 'react-helmet'
import Map from '../components/Map'

const Contact = () => (
	<div className="contacto section">
		<Helmet>
			<title>Contacto</title>
			<meta name="description" content="Descripción de Contacto"/>
		</Helmet>
		<h1>Contacto</h1>
		<div className="contacto__map-container">
			<span className="contacto__titutlo">Localización del Local</span>
			<div className="contacto__mapa">
				<Map lat={41.385197} lng={2.180433} zoom={17} />
			</div>
		</div>
	</div>
);



export default Contact