import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import Nav from './components/Nav'

class App extends React.Component {
	render () {
		return (
			 <Router>
				 <div className="wrapper">
						<Nav />
						<div className="wrapper__content row">
							<Routes />
						</div>
				 </div>
			 </Router>
		)
	}
}

export default App