import React from 'react'

const HomeSalary: React.FC = () => {
	return (
		<section className="home-salary">
			<div className="container">
				<div className="home-salary-wrapper">
					<h2 className="home__title home-salary__title">
						How much can you earn?
					</h2>

					<div className="home-salary-text">
						<span className='home-salary-text__subtitle'>from</span>

						<h3 className="home-salary-text__price">
							5000₹
						</h3>

						<p className="home-salary-text__description">
							Professional make-up artists, as well as intermediate artists can earn anywhere between 5,000-50,000 per gig! The key is to enjoy yourself and to display your works.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeSalary