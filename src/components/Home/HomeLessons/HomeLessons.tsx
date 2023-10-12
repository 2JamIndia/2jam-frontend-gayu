import React from 'react'

import { HomeLessonsVideo, HomeLessonsItem } from '../../'

import Lesson2Image from '../../../assets/images/lessons/lesson2_gayu.jpg'
import Lesson3Image from '../../../assets/images/lessons/lesson3_gayu.jpg'
import Lesson4Image from '../../../assets/images/lessons/lesson4_gayu.jpg'
import Lesson5Image from '../../../assets/images/lessons/lesson5_gayu.jpg'
import Lesson6Image from '../../../assets/images/lessons/lesson6_gayu.jpg'
import Lesson7Image from '../../../assets/images/lessons/lesson7_gayu.jpg'
import Lesson8Image from '../../../assets/images/lessons/lesson8_gayu.jpg'
import Lesson9Image from '../../../assets/images/lessons/lesson9_gayu.jpg'
import Lesson10Image from '../../../assets/images/lessons/lesson10_gayu.jpg'
import Lesson11Image from '../../../assets/images/lessons/lesson11_gayu.jpg'
import Lesson12Image from '../../../assets/images/lessons/lesson12_gayu.jpg'
import Lesson13Image from '../../../assets/images/lessons/lesson13_gayu.jpg'
import Lesson14Image from '../../../assets/images/lessons/lesson14_gayu.jpg'

const HomeLessons: React.FC = () => {
	const lessonsClosed = [
		{
			image: Lesson2Image,
			title: "Things you'll need",
			description: "Things you'll need, and a general primer on this course!"
		},
		{
			image: Lesson3Image,
			title: "A note on skincare",
			description: "Importance of skin care, types of skin, moisturizer sunscreen"
		},
		{
			image: Lesson4Image,
			title: "Base",
			description: "Sunscreen, Moisturizer, Primer: What are these products and why do you need them?"
		},
		{
			image: Lesson5Image,
			title: "Concealer and Foundation",
			description: "I’ll go into when and why to use these, and if you need foundation at all!"
		},
		{
			image: Lesson6Image,
			title: "Bronzer",
			description: "What is Bronzer, what kind of bronzer would work for you?"
		},
		{
			image: Lesson7Image,
			title: "Contouring",
			description: "How to contour for your specific face shape, using lighting!"
		},
		{
			image: Lesson8Image,
			title: "Eyes",
			description: "This is one my favourite parts of the course. Here I’ll show you the little things you can do to accentuate the look with your eyes based on your features."
		},
		{
			image: Lesson9Image,
			title: "Brows",
			description: "How i do my brows, and what products you could try based on the look you want to achieve!"
		},
		{
			image: Lesson10Image,
			title: "Eyeliner",
			description: "Adding eyeliner to your look could give it an additional dimension, but it’s not always necessary!"
		},
		{
			image: Lesson11Image,
			title: "Blush",
			description: "Adding blush, and how you can do it with different products."
		},
		{
			image: Lesson12Image,
			title: "Highlighting",
			description: "I talk about my preference for highlighting as well as how it’s changed over the years."
		},
		{
			image: Lesson13Image,
			title: "Lipstick",
			description: "My other favourite part of this course is experimenting with lipstick -  a nice little splash of colour for this glowy look."
		},
		{
			image: Lesson14Image,
			title: "Accessories",
			description: "Here, I talk about how i like to accessorise and style myself for this look!"
		}
	]

	return (
		<section className="home-lessons" id='home-lessons'>
			<div className="container">
				<div className="home-lessons-wrapper">
					<HomeLessonsVideo />

					<div className="home-lessons-items-wrapper">
						{lessonsClosed.map((lesson, index) => (
							<HomeLessonsItem {...lesson} number={index + 1} key={`home-lessons-item-${index}`} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeLessons