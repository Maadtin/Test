import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Error404 from '../components/Error404'
import Carta from '../components/Carta'
import Horarios from "../components/Horarios";

const Routes = () => (
	 <Switch>
		 <Route exact path="/" component={Home} />
		 <Route path="/carta" component={Carta} />
		 <Route path="/horarios" component={Horarios} />
		 <Route path="/about" component={About} />
		 <Route path="/contact" component={Contact} />
		 <Route component={Error404} />
	 </Switch>
);

export default Routes