import React from 'react'

interface HomeFaqItemProps {
	title: string
	description: string
}

const HomeFaqItem: React.FC<HomeFaqItemProps> = ({ title, description }) => {
	return (
		<div className="home-faq-item">
			<h3 className="home-faq-item__title">
				{title}
			</h3>

			<p className="home-faq-item__description">
				{description}
			</p>
		</div>
	)
}

export default HomeFaqItem