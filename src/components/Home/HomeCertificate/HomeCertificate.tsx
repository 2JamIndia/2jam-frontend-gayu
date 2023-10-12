import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

import CertificateImage from '../../../assets/images/certificate.jpg'

const HomeCertificate: React.FC = () => {
	const cardX = useMotionValue(0);
	const cardY = useMotionValue(0);

	const rotateX = useTransform(cardY, [-1600, 1600], [10, -10]);
	const rotateY = useTransform(cardX, [-1600, 1600], [-10, 10]);

	const handleMouseMove = (event: any) => {
		const offsetX = event.clientX - window.innerWidth / 2;
		const offsetY = event.clientY - window.innerHeight / 2

		cardX.set(offsetX);
		cardY.set(offsetY);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			className="home-certificate"
		>
			<div className="container">
				<div className="home-certificate-wrapper">
					<h2 className="home-certificate__title">
						Once you're finished with the course, you'll be a proud owner of this certificate!
					</h2>

					<motion.div
						style={{
							margin: "auto",
							width: "100%",
							height: "100%",
							transformStyle: "preserve-3d",
							perspective: 800,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							rotateX,
							rotateY
						}}
						transition={{ velocity: 0 }}
					>
						<motion.div
							key="card"
							style={{
								transformStyle: "preserve-3d",
								perspective: 800,
								rotateX,
								rotateY
							}}
							transition={{ velocity: 0 }}
							className='home-certificate-image'
						>
							<img src={CertificateImage} alt="" className="home-certificate-image__image" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}

export default HomeCertificate