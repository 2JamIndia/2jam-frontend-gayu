import React from 'react'
import { motion } from "framer-motion";

import Logo from "../../../assets/images/logo.svg";

import MainImage from "../../../assets/images/main.png"

const HomeMain: React.FC = () => {
	return (
		<section className="home-main">
			<div className="container">
				<div className="home-main-wrapper">
					<div className="home-main-text">
						<motion.div
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
							className="home-main-text-logo"
						>
							<img
								src={Logo}
								alt="2Jam"
								className="home-main-text-logo__image"
							/>
						</motion.div>

						<motion.h1
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
							className="home-main-text__title"
						>
							Learn make-up <br />
							from scratch with <span>Gayu</span>
						</motion.h1>

						<motion.p
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
							className="home-main-text__description"
						>
							In this course, you’ll learn how to do Clean Girl Make-up - a look that’s great for beginners and is very versatile for all ages, skins, and outfits. It's a glowy, natural look that requires few products. It's light on the pockets and on the skin.
						</motion.p>
					</div>

					<motion.img
						src={MainImage}
						alt=""
						className="home-main__image"
						initial={{
							opacity: 0,
							y: -25,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: .7 },
						}}
						viewport={{ once: true }}
					/>

					<div className="home-main-service">
						<div className="home-main-service-block">
							<h3 className="home-main-service-block__title">
								Онлайн
							</h3>

							<p className="home-main-service-block__subtitle">
								курс можно проходить с любого устройства, у которого есть доступ в интернет
							</p>
						</div>

						<div className="home-main-service-block">
							<h3 className="home-main-service-block__title">
								Навсегда
							</h3>

							<p className="home-main-service-block__subtitle">
								курс не сгорит, не пропадёт, не убежит, а всегда будет ждать в вашем личном кабинете
							</p>
						</div>


						<div className="home-main-service-block">
							<h3 className="home-main-service-block__title">
								24/7
							</h3>

							<p className="home-main-service-block__subtitle">
								курс заранее записан и доступен в любое время дня и ночи, не нужно подстраиваться под чей-то график. Учитесь тогда, когда удобно вам
							</p>
						</div>


						<div className="home-main-service-block">
							<h3 className="home-main-service-block__title">
								Практические видео
							</h3>

							<p className="home-main-service-block__subtitle">
								самый быстрый формат обучения, минимум теории, максимум практики. Повторяйте за мастером, и у вас всё получится
							</p>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default HomeMain