import React from 'react'

import { VideoPlayer } from '../../../'

import Lesson1Image from '../../../../assets/images/lessons/lesson1_gayu.jpg'

const HomeLessonsVideo: React.FC = () => {
	return (
		<div className="home-lessons-video">
			<VideoPlayer
				url={`${process.env.REACT_APP_IMAGE_DOMEN}/all/intro-gayu/playlist.m3u8`}
				play={false}
				image={Lesson1Image}
				setPlay={() => { }}
			/>
		</div>
	)
}

export default HomeLessonsVideo