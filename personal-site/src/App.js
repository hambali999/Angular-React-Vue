import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/resume" component={Resume} />
					
				</Switch>
			</div>
		</Router>
	);
}

export default App;