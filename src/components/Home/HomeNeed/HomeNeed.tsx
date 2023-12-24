import React from 'react'

const HomeNeed: React.FC = () => {
	const items: string[] = [
		"Наносить правильно тени",
		"Грамотно подводить глаза",
		"Уметь подчёркивать свои преймущества и знать как скрыть недостатки ",
		"Использовать сложную палитру цветов и оттенков",
	]

	return (
		<section className="home-need">
			<div className="container">
				<div className="home-need-wrapper">
					<h2 className="home-need__title">
						Чтобы сделать макияж нужно:
					</h2>

					<div className="home-need-block-wrapper">
						{items.map((item, index) => (
							<div className="home-need-block" key={`home-need-block-${index}`}>
								<p className="home-need-block__number">
									{index + 1}
								</p>

								<h3 className="home-need-block__title">
									{item}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeNeed