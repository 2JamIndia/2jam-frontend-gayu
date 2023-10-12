import React from 'react'

import { HomeFaqItem } from '../../'

const HomeFaq: React.FC = () => {
	const items = [
		{
			title: "Will there be a tutor on the course?",
			description: "While Gayu will be teaching the course, you can take the course at your pace and methodology."
		},
		{
			title: "How long will the course be available to me?",
			description: "This course has no time limit, you can return to the material and review it at any time."
		},
		{
			title: "Where can I direct any questions?",
			description: "If you have any questions about the lesson during the course, you can write to us on the support mail, and we can arrange an online consult with our team if need be."
		}
	]

	return (
		<section className='home-faq' id='home-faq'>
			<div className="container">
				<div className="home-faq-wrapper">
					<h2 className="home-faq__title">
						FAQ
					</h2>

					{items.map((item, index) => (
						<HomeFaqItem {...item} key={`home-faq-${index}`} />
					))}
				</div>
			</div>
		</section>
	)
}

export default HomeFaq