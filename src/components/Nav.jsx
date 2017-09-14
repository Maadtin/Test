import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {

	constructor (...props) {
		super (...props);

		this.state = { top: 0 };

		this.handleResize = this.handleResize.bind(this);

	}

	handleResize () {
		this.setState({
			top: this.refs.menuu.clientHeight
		})
	}


	triggerMenu () {
		this.refs.trigger.classList.toggle('is-active');
		this.refs.menuContainer.classList.toggle('is-showing');
	}

	componentDidMount () {
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		this.setState({
			top: this.refs.menuu.clientHeight
		})
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleResize);
	}

	changeMenu (e) {
		if (e.target.classList.contains('menu__item') || e.target.classList.contains('menu__link')) {
			this.triggerMenu();
		}
	}

	render () {
		return (
			 <div className="menu" ref="menuu">
				 <NavLink exact to="/" className="menu__logo"><img src="https://irp-cdn.multiscreensite.com/b10a7388/dms3rep/multi/mobile/terra-500x260.png" alt=""/></NavLink>
				 <button className="hamburger hamburger--slider" type="button" ref="trigger" onClick={this.triggerMenu.bind(this)}>
					  <span className="hamburger-box">
						 <span className="hamburger-inner"></span>
					  </span>
				 </button>
				 <ul className="menu__container" ref="menuContainer" onClick={this.changeMenu.bind(this)} style={{top: this.state.top}}>
					 <li className="menu__item"><NavLink className="menu__link" exact to="/">Inicio</NavLink></li>
					 <li className="menu__item"><NavLink className="menu__link" exact to="/carta">La carta</NavLink></li>
					 <li className="menu__item"><NavLink className="menu__link" to="/horarios">Horarios</NavLink></li>
					 <li className="menu__item"><NavLink className="menu__link" to="/about">Nosotros</NavLink></li>
					 <li className="menu__item"><NavLink className="menu__link" to="/contact">Contacto</NavLink></li>
				 </ul>
			 </div>
		)
	}
}