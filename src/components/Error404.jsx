import React from 'react';
import { Helmet } from 'react-helmet'

const Error404 = () => (
	<div className="Error404 section">
		<Helmet>
			<title>Error 404</title>
			<meta name="description" content="Descripción de Error"/>
		</Helmet>
		<h1>Error 404 - Página no encontrada</h1>
	</div>
)

export default Error404