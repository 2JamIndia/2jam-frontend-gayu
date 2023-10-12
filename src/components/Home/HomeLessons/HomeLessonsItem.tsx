import React from 'react'

interface HomeLessonsItemProps {
	image: string
	number: number
	title: string
	description: string
}

const HomeLessonsItem: React.FC<HomeLessonsItemProps> = ({ image, number, title, description }) => {
	return (
		<div className="home-lessons-item">
			<div className="home-lessons-item-cover" style={{ backgroundImage: `url("${image}")` }}>
				{/* {number !== 1 ? (
					<>
						<div className="home-lessons-item-cover-icon">
							<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="50" cy="50" r="50" fill="white" />
								<path d="M47.7572 32.1877C44.2289 32.8196 40.8585 35.5185 39.3314 38.9283C38.5546 40.653 38.4098 41.5877 38.3308 45.2082L38.2518 48.5127L37.3566 48.6575C36.277 48.8286 35.6714 49.2236 35.2765 50.053C35 50.6191 35 50.7639 35 58.5841C35 66.0488 35.0263 66.5622 35.2501 67.0625C35.5266 67.6681 36.0796 68.2079 36.6457 68.4317C36.9353 68.537 40.3583 68.5765 50.2191 68.5502L63.3843 68.5107L63.8583 68.1947C64.1084 68.0236 64.4639 67.6681 64.635 67.418L64.951 66.944L64.9905 58.9132C65.0168 53.3311 64.9905 50.7113 64.8852 50.369C64.5824 49.3157 63.4633 48.5653 62.1731 48.5653H61.7518L61.686 45.2345C61.607 41.5746 61.4885 40.7583 60.7644 39.0863C59.2373 35.5712 55.9196 32.8723 52.2597 32.1877C50.9432 31.9376 49.1263 31.9376 47.7572 32.1877ZM52.523 37.4275C54.195 38.1121 55.63 39.6129 56.3409 41.4166C56.6174 42.1143 56.6437 42.4435 56.6964 45.3793L56.749 48.5653L50.0611 48.539L43.36 48.4995L43.3205 46.1956C43.2546 42.3776 43.5311 41.1138 44.7686 39.5076C45.6244 38.4149 47.2832 37.3353 48.5602 37.072C48.7445 37.0325 49.5081 37.0194 50.2717 37.0325C51.4171 37.072 51.7989 37.1379 52.523 37.4275Z" fill="black" />
							</svg>
						</div>

						<div className="home-lessons-item-cover-plaecholder"></div>
					</>
				) : (
					null
				)} */}

				<div className="home-lessons-item-cover-icon">
					<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50" cy="50" r="50" fill="white" />
						<path d="M47.7572 32.1877C44.2289 32.8196 40.8585 35.5185 39.3314 38.9283C38.5546 40.653 38.4098 41.5877 38.3308 45.2082L38.2518 48.5127L37.3566 48.6575C36.277 48.8286 35.6714 49.2236 35.2765 50.053C35 50.6191 35 50.7639 35 58.5841C35 66.0488 35.0263 66.5622 35.2501 67.0625C35.5266 67.6681 36.0796 68.2079 36.6457 68.4317C36.9353 68.537 40.3583 68.5765 50.2191 68.5502L63.3843 68.5107L63.8583 68.1947C64.1084 68.0236 64.4639 67.6681 64.635 67.418L64.951 66.944L64.9905 58.9132C65.0168 53.3311 64.9905 50.7113 64.8852 50.369C64.5824 49.3157 63.4633 48.5653 62.1731 48.5653H61.7518L61.686 45.2345C61.607 41.5746 61.4885 40.7583 60.7644 39.0863C59.2373 35.5712 55.9196 32.8723 52.2597 32.1877C50.9432 31.9376 49.1263 31.9376 47.7572 32.1877ZM52.523 37.4275C54.195 38.1121 55.63 39.6129 56.3409 41.4166C56.6174 42.1143 56.6437 42.4435 56.6964 45.3793L56.749 48.5653L50.0611 48.539L43.36 48.4995L43.3205 46.1956C43.2546 42.3776 43.5311 41.1138 44.7686 39.5076C45.6244 38.4149 47.2832 37.3353 48.5602 37.072C48.7445 37.0325 49.5081 37.0194 50.2717 37.0325C51.4171 37.072 51.7989 37.1379 52.523 37.4275Z" fill="black" />
					</svg>
				</div>

				<div className="home-lessons-item-cover-plaecholder"></div>
			</div>

			<div className="home-lessons-item-text">
				<div className="home-lessons-item-text-block">
					<p className="home-lessons-item-text-block__subtitle">
						Lesson {number}
					</p>

					<h3 className="home-lessons-item-text-block__title">
						{title}
					</h3>
				</div>

				<div className="home-lessons-item-text-block">
					<p className="home-lessons-item-text-block__description">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomeLessonsItem