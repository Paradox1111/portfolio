import React from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav>
					<Row>
						<Col>
							<Link to="/">Projects</Link>
						</Col>
						<Col>
							<Link to="/skills">Skills</Link>
						</Col>
						<Col>
							<Link to="/contact">Contact</Link>
						</Col>
					</Row>
				</nav>
			</header>
			<main>
				<Switch>
					<Route path="/" />
					<Route path="/skills" />
					<Route path="/contact" />
				</Switch>
			</main>
		</div>
	);
}

export default App;
