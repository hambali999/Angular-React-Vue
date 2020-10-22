import React from "react";
import ItemExperience from "./ItemExperience";
import ItemEducation from "./ItemEducation";

import "./Resume.css";

const Resume = () => {

	return (
		<div className="container">
			<div className="resume">
				<div className="experience">
					<h2>EXPERIENCE</h2>
					<div class="timeline">
						<ItemExperience  />
					</div>
				</div>
				<div className="education">
					<h2>EDUCATION</h2>
					<div class="timeline">
						<ItemEducation />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
