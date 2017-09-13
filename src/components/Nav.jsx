import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => (
	 <div className="menu">
		 <NavLink exact to="/" className="menu__logo"><img src="https://irp-cdn.multiscreensite.com/b10a7388/dms3rep/multi/mobile/terra-500x260.png" alt=""/></NavLink>
		 <div className="menu__trigger">
				<span className="item"></span>
				<span className="item"></span>
				<span className="item"></span>
		 </div>
		 <ul className="menu__container">
			 <li className="menu__item"><NavLink className="menu__link" exact to="/">Inicio</NavLink></li>
			 <li className="menu__item"><NavLink className="menu__link" exact to="/carta">La carta</NavLink></li>
			 <li className="menu__item"><NavLink className="menu__link" to="/horarios">Horarios</NavLink></li>
			 <li className="menu__item"><NavLink className="menu__link" to="/about">Nosotros</NavLink></li>
			 <li className="menu__item"><NavLink className="menu__link" to="/contact">Contacto</NavLink></li>
		 </ul>
	 </div>
);

export default Nav