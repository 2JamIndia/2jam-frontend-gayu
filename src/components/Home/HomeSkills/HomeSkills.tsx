import React from 'react'

const HomeSkills: React.FC = () => {
	return (
		<section className="home-skills" id={"home-skills"}>
			<div className="container">
				<div className="home-skills-wrapper">
					<div className="home-skills-text">
						<h2 className="home-skills-text__title">
							What will you learn to do as a result?
						</h2>

						<p className="home-skills-text__description">
							In this course, you will learn skills that will assist you beyond this simple look. This includes, but is not limited to:
						</p>
					</div>

					<div className="home-skills-items-wrapper">
						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								Types of products
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								How to find out what types of products work for you?
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								The basics of Skincare
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								Techniques, tips, and tricks for make-up application
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								How to accessorise for particular looks
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeSkills