import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="container">
				<div className="menu">
					<ul className="left-menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/resume">Resume</Link>
						</li>
						
					</ul>

					

					<ul className="right-menu">
						<li>
							<a href="https://github.com/alexkimeu0">
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/alexkimeu0">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/alexkimeu0/">
								<i className="fab fa-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://medium.com/@alexkimeu0">
								<i className="fab fa-medium"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
