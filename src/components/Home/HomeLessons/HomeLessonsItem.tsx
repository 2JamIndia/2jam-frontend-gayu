import React from 'react'
import { motion } from "framer-motion";

interface HomeLessonsItemProps {
	image: string
	number: number
	title: string
	description: string
}

const HomeLessonsItem: React.FC<HomeLessonsItemProps> = ({ image, number, title, description }) => {
	return (
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
			className="home-lessons-item"
		>
			<div className="home-lessons-item-cover" style={{ backgroundImage: `url("${image}")` }}>
			</div>

			<div className="home-lessons-item-text">
				<div className="home-lessons-item-text-block">
					<p className="home-lessons-item-text-block__subtitle">
						Lesson {number}
					</p>

					<h3 className="home-lessons-item-text-block__title">
						{title}
					</h3>

					<p className="home-lessons-item-text-block__description">
						{description}
					</p>
				</div>
			</div>
		</motion.div>
	)
}

export default HomeLessonsItem