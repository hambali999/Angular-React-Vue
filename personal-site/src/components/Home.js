import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div class="overview">
			<div class="salut">
				<h1 class="name">Alex Kimeu</h1>
				<h3 className="tagline">...The Nerd Next Door...</h3>
			</div>
			<div class="about">
				<h1 class="title">Software Developer.</h1>
				<h3 class="intro">
					A gamer, footballer & a limitless learner passionate about learning
					tech concepts to improve problem solving abilities with tech. <br />
					Every day is a learning day.
					<br />
					Leo able...kesho stable.
					<br />
					🔥🔥🔥
				</h3>
			</div>

			<div className="cta">
				<a
					href="https://drive.google.com/file/d/1dddthwqXkJyI_e-WeieD_VKWLmxARPlj/view?usp=sharing"
					className="cv"
					download
				>
					Download CV
				</a>
				<a href="mailto:kimeualexis@gmail.com" className="email" target="_self">
					Email me
				</a>
			</div>
		</div>
	);
};

export default Home;
