import React from "react";
import projectImage from '../images/code.jpeg'

const Project = () => {
	return (
		<div className="projects">
			<div className="project">
				<a href="">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>DOAN Website</h2>

							<div className="date">
								{" "}
								<p>JavaScript, Laravel</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={projectImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

			<div className="project">
				<a href="">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>Twitter Clone</h2>

							<div className="date">
								{" "}
								<p>React, Material UI, Firebase</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={projectImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>


			<div className="project">
				<a href="">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>Quote Generator</h2>

							<div className="date">
								{" "}
								<p>React, Bootstrap</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={projectImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

			<div className="project">
				<a href="">
					<div className="project__card">
						<div className="project__cardHeader">
							<h2>WhatsApp Clone</h2>

							<div className="date">
								{" "}
								<p>React, Material UI, Firebase</p>
							</div>
						</div>

						<div className="project__cardBody">
							<img src={projectImage} loading="lazy" alt="" />
						</div>
					</div>
				</a>
			</div>

		</div>
	);
};

export default Project;
