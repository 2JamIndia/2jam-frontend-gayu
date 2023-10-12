import React from 'react'

import WorkImage1 from '../../../assets/images/works/work-1.jpg'
import WorkImage2 from '../../../assets/images/works/work-2.jpg'
import WorkImage3 from '../../../assets/images/works/work-3.jpg'
import WorkImage4 from '../../../assets/images/works/work-4.jpg'
import WorkImage5 from '../../../assets/images/works/work-5.jpg'
import WorkImage6 from '../../../assets/images/works/work-6.jpg'
import WorkImage7 from '../../../assets/images/works/work-7.jpg'
import WorkImage8 from '../../../assets/images/works/work-8.jpg'
import WorkImage9 from '../../../assets/images/works/work-9.jpg'
import WorkImage10 from '../../../assets/images/works/work-10.jpg'
import WorkImage11 from '../../../assets/images/works/work-11.jpg'
import WorkImage12 from '../../../assets/images/works/work-12.jpg'
import WorkImage13 from '../../../assets/images/works/work-13.jpg'
import WorkImage14 from '../../../assets/images/works/work-14.jpg'
import WorkImage15 from '../../../assets/images/works/work-15.jpg'
import WorkImage16 from '../../../assets/images/works/work-16.jpg'
import WorkImage17 from '../../../assets/images/works/work-17.jpg'
import WorkImage18 from '../../../assets/images/works/work-18.jpg'
import WorkImage19 from '../../../assets/images/works/work-19.jpg'
import WorkImage20 from '../../../assets/images/works/work-20.jpg'
import WorkImage21 from '../../../assets/images/works/work-21.jpg'
import WorkImage22 from '../../../assets/images/works/work-22.jpg'
import WorkImage24 from '../../../assets/images/works/work-24.jpg'
import WorkImage25 from '../../../assets/images/works/work-25.jpg'
import WorkImage26 from '../../../assets/images/works/work-26.jpg'
import WorkImage27 from '../../../assets/images/works/work-27.jpg'
import WorkImage28 from '../../../assets/images/works/work-28.jpg'

const HomeWorks: React.FC = () => {
	const [isMore, setIsMore] = React.useState<boolean>(false)

	const images = [
		WorkImage1,
		WorkImage2,
		WorkImage3,
		WorkImage4,
		WorkImage5,
		WorkImage6,
		WorkImage7,
		WorkImage8,
		WorkImage9,
		WorkImage10,
		WorkImage11,
		WorkImage12,
		WorkImage13,
		WorkImage14,
		WorkImage15,
		WorkImage16,
		WorkImage17,
		WorkImage18,
		WorkImage19,
		WorkImage20,
		WorkImage21,
		WorkImage22,
		WorkImage24,
		WorkImage25,
		WorkImage26,
		WorkImage27,
		WorkImage28,
	]

	return (
		<section className='home-works' id='home-works'>
			<h2 className="home-works__title">
				My work
			</h2>

			<div className={`home-works-images-wrapper ${isMore ? "" : "short"}`}>
				{images.map((image, index) => (
					!isMore ? index <= 9 ? (
						<div className="home-works-image" key={`home-works-image-${index}`} style={{ backgroundImage: `url("${image}")` }}></div>
					) : null : (
						<div className="home-works-image" key={`home-works-image-${index}`} style={{ backgroundImage: `url("${image}")` }}></div>
					)
				))}

				{!isMore ? (
					<button className="btn home-works-images__btn" onClick={() => setIsMore(true)}>
						More works
					</button>
				) : null}
			</div>
		</section>
	)
}

export default HomeWorks