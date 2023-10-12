import React from 'react'

const HomeTools: React.FC = () => {
	const tools = [
		{
			title: "Moisturizer",
		},
		{
			title: "Primer",
		},
		{
			title: "Bronzer",
		},
		{
			title: "Contouring stick",
		},
		{
			title: "Eyeshadow palette",
		},
		{
			title: "Eyeliner",
		},

		{
			title: "Mascara",
		},
		{
			title: "Cream blush",
		},
		{
			title: "Highlighter",
		}
	]

	return (
		<section className="home-tools">
			<div className="container">
				<div className="home-tools-wrapper">
					<h2 className="home-tools__title">
						What will you need for the course?
					</h2>

					<div className="home-tools-items-wrapper">
						{tools.map((tool, index) => (
							<div className="home-tools-item" key={`home-tools-item-${index}`}>
								<h3 className="home-tools-item__title">{tool.title}</h3>
							</div>
						))}

					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeTools