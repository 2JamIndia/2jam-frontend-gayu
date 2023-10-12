import React from 'react'

import MainImage from "../../../assets/images/main.png"

const HomeMain: React.FC = () => {
	return (
		<section className="home-main">
			<div className="container">
				<div className="home-main-wrapper">
					<div className="home-main-text">
						<h1 className="home-main-text__title">
							Learn make-up <br />
							from scratch with Gayu
						</h1>

						<p className="home-main-text__description">
							In this course, you’ll learn how to do Clean Girl Make-up - a look that’s great for beginners and is very versatile for all ages, skins, and outfits. It's a glowy, natural look that requires few products. It's light on the pockets and on the skin.
						</p>
					</div>

					<img src={MainImage} alt="" className="home-main__image" />
				</div>
			</div>
		</section >
	)
}

export default HomeMain