import React from 'react'
import { motion } from "framer-motion";

import HomeForWhoImage from "../../../assets/images/for-who-image.jpg";

const HomeForWho: React.FC = () => {
	return (
		<section className="home-forwho" id='home-about'>
			<div className="container">
				<div className="home-forwho-wrapper">
					<div className="home-forwho-text">
						<h2 className="home-forwho-text__title">
							Кому подойдет этот курс
						</h2>

						<div className="home-forwho-text-item-wrapper">
							<div className="home-forwho-text-item">
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M15.5653 1.63311C20.3971 1.74513 25.6473 -0.439163 29.4871 2.46991C33.5978 5.58419 35.5088 11.1781 34.8839 16.2688C34.3074 20.9646 29.8906 23.7785 26.4666 27.0739C23.1259 30.2893 20.1901 34.3232 15.5653 34.8625C10.5169 35.4512 4.47831 34.2108 1.75687 29.9554C-0.829471 25.9112 3.80686 21.0552 3.67418 16.2688C3.53298 11.1751 -2.24784 5.77767 0.976634 1.80895C4.1476 -2.0939 10.511 1.51593 15.5653 1.63311Z" fill="#EB84F8" />
								</svg>

								<p className="home-forwho-text-item__text">
									Тем кто не знает, чем отличается бронзер от скульптора, и вообще не разбирается в косметике
								</p>
							</div>

							<div className="home-forwho-text-item">
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M15.5653 1.63311C20.3971 1.74513 25.6473 -0.439163 29.4871 2.46991C33.5978 5.58419 35.5088 11.1781 34.8839 16.2688C34.3074 20.9646 29.8906 23.7785 26.4666 27.0739C23.1259 30.2893 20.1901 34.3232 15.5653 34.8625C10.5169 35.4512 4.47831 34.2108 1.75687 29.9554C-0.829471 25.9112 3.80686 21.0552 3.67418 16.2688C3.53298 11.1751 -2.24784 5.77767 0.976634 1.80895C4.1476 -2.0939 10.511 1.51593 15.5653 1.63311Z" fill="#EB84F8" />
								</svg>

								<p className="home-forwho-text-item__text">
									Тем кто хочет научится делать макияж для съемок
								</p>
							</div>

							<div className="home-forwho-text-item">
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M15.5653 1.63311C20.3971 1.74513 25.6473 -0.439163 29.4871 2.46991C33.5978 5.58419 35.5088 11.1781 34.8839 16.2688C34.3074 20.9646 29.8906 23.7785 26.4666 27.0739C23.1259 30.2893 20.1901 34.3232 15.5653 34.8625C10.5169 35.4512 4.47831 34.2108 1.75687 29.9554C-0.829471 25.9112 3.80686 21.0552 3.67418 16.2688C3.53298 11.1751 -2.24784 5.77767 0.976634 1.80895C4.1476 -2.0939 10.511 1.51593 15.5653 1.63311Z" fill="#EB84F8" />
								</svg>

								<p className="home-forwho-text-item__text">
									Тем кто хочет научиться легко и быстро делать макияж для повседневной жизни
								</p>
							</div>

							<div className="home-forwho-text-item">
								<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M15.5653 1.63311C20.3971 1.74513 25.6473 -0.439163 29.4871 2.46991C33.5978 5.58419 35.5088 11.1781 34.8839 16.2688C34.3074 20.9646 29.8906 23.7785 26.4666 27.0739C23.1259 30.2893 20.1901 34.3232 15.5653 34.8625C10.5169 35.4512 4.47831 34.2108 1.75687 29.9554C-0.829471 25.9112 3.80686 21.0552 3.67418 16.2688C3.53298 11.1751 -2.24784 5.77767 0.976634 1.80895C4.1476 -2.0939 10.511 1.51593 15.5653 1.63311Z" fill="#EB84F8" />
								</svg>

								<p className="home-forwho-text-item__text">
									Тем кто умеет делать макияж, но хочет найти новые идеи и лайфкахи
								</p>
							</div>
						</div>
					</div>

					<img src={HomeForWhoImage} alt="" className="home-forwho__image" />

					{/* <motion.p
						initial={{
							opacity: 0,
							y: -15,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: .7 },
						}}
						viewport={{ once: true }}
						className="home-forwho__subtitle"
					>
						Who is it for?
					</motion.p>

					<motion.h3
						className="home-forwho__title"
						initial={{
							opacity: 0,
							y: -20,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: .7 },
						}}
						viewport={{ once: true }}
					>
						This course is designed for people ranging from beginners to people who have experience with make-up. It's stylish, versatile, and it's meant to bring out the best of your natural features.
					</motion.h3>
					{/* <h3 className="home-forwho__title">
						This course is designed for people ranging from beginners to people who have experience with make-up. It's stylish, versatile, and it's meant to bring out the best of your natural features.
					</h3> */}
				</div>
			</div>
		</section>
	)
}

export default HomeForWho