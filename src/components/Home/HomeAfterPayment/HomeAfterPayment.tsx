import React from 'react'

import HomeAfterPaymentImage from '../../../assets/images/home-after-payment.png'

const HomeAfterPayment: React.FC = () => {
	return (
		<section className='home-after-payment'>
			<div className="container">
				<div className="home-after-payment-wrapper">
					<div className="home-after-payment-text">
						<h2 className="home-after-payment-text__title">
							What happens after you pay?
						</h2>
						<p className="home-after-payment-text__description">
							After the payment, you get access to the full course as well as your own dashboard on the 2Jam Learning Management System!
						</p>
					</div>

					<div className="home-after-payment-image">
						<img src={HomeAfterPaymentImage} alt="" className="home-after-payment-image__image" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAfterPayment