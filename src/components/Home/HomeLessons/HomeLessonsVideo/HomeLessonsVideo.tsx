import React from 'react'
import { motion } from "framer-motion";

import { VideoPlayer } from '../../../'

import Lesson1Image from '../../../../assets/images/lessons/lesson1_gayu.jpg'

const HomeLessonsVideo: React.FC = () => {
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
			className="home-lessons-video"
		>
			<VideoPlayer
				url={`${process.env.REACT_APP_IMAGE_DOMEN}/all/intro-gayu/playlist.m3u8`}
				image={Lesson1Image}
			/>
		</motion.div>
	)
}

export default HomeLessonsVideo