import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => (
	 <div className="App-Navigation-Container">
		 <NavLink exact to="/" className="App-logo"><img src="https://irp-cdn.multiscreensite.com/b10a7388/dms3rep/multi/mobile/terra-500x260.png" alt=""/></NavLink>
		 <ul className="App-Navigation">
			 <li className="App-ListItem"><NavLink className="App-Link" exact to="/">Inicio</NavLink></li>
			 <li className="App-ListItem"><NavLink className="App-Link" exact to="/carta">La carta</NavLink></li>
			 <li className="App-ListItem"><NavLink className="App-Link" to="/horarios">Horarios</NavLink></li>
			 <li className="App-ListItem"><NavLink className="App-Link" to="/about">Nosotros</NavLink></li>
			 <li className="App-ListItem"><NavLink className="App-Link" to="/contact">Contacto</NavLink></li>
		 </ul>
	 </div>
);

export default Nav