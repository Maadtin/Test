import React from 'react'
import Helmet from 'react-helmet'
import horariosJSON from '../data/horarios.json'


export default class Horarios extends React.Component{

	constructor () {
		super ();

		this.state = {
			data: horariosJSON
		}
	}

	componentDidMount () {
		let data = this.state.data;

		console.log(data.horarios.map(el => el.metaTitulo))
	}

	render () {
		return (
			 <div className="section horarios">
				 {/*<Helmet>*/}
				 {/*<title>Horarios</title>*/}
				 {/*</Helmet>*/}
				 {/*<div className="horarios__container">*/}
				 {/*<h1>Horarios de funcionamiento</h1>*/}
				 {/*<div className="horarios__table container">*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia lunes">Lunes</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia martes">Martes</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia miercoles">Miércoles</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia jueves">Jueves</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia viernes">Viernes</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia sabado">Sábados</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*<section className="horarios__section ">*/}
				 {/*<p className="horarios__dia domingo">Domingos</p>*/}
				 {/*<p className="horarios__hora small">9h a 21h</p>*/}
				 {/*</section>*/}
				 {/*</div>*/}
				 {/*</div>*/}
			 </div>
		)
	}
}

