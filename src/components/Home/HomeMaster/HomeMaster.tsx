import React from "react";

import MasterAvatarImage from "../../../assets/images/master_avatar.jpg";

import newindiaexpress from "../../../assets/images/magazine/newindiaexpress.jpg";
import grazia from "../../../assets/images/magazine/grazia.jpg";
import verve from "../../../assets/images/magazine/verve.jpg";
import homegrown from "../../../assets/images/magazine/homegrown.jpg";

const HomeMaster: React.FC = () => {
	const magazines = [
		{
			link: "https://www.newindianexpress.com/cities/kochi/2020/nov/07/inked-in-style-2220312.html",
			image: newindiaexpress
		},
		{
			link: "https://www.grazia.co.in/beauty-and-health/this-models-fantastical-beauty-looks-are-creating-a-storm-on-the-internet-5338-1.html",
			image: grazia
		},
		{
			link: "https://www.vervemagazine.in/fashion-and-beauty/a-hybrid-silhouette-continues-the-saris-modern-evolution",
			image: verve
		},
		{
			link: "https://homegrown.co.in/homegrown-voices/gayatri-mohan-s-photo-shoot-is-reimagining-90s-cartoons-through-the-art-of-self-portraiture",
			image: homegrown
		}
	]

	return (
		<>
			<section className="home-master">
				<div className="container">
					<div className="home-master-wrapper">
						<h2 className="home-master__title">
							Кто вас будет обучать
						</h2>

						<div className="home-master-top">
							<div className="home-master-top-title">
								<div
									className="home-master-top-title-avatar"
									style={{
										backgroundImage: `url('${MasterAvatarImage}')`,
									}}
								></div>

								<span className="home-master-top-title__name">Gayu</span>
								<span className="home-master-top-title__subscribers">95k+ <br /> instagram followers</span>
							</div>

							<div className="home-master-top-description">
								<p className="home-master-top-description__text">
									Но ключевые особенности структуры проекта своевременно верифицированы. Мы вынуждены отталкиваться от того, что семантический разбор внешних противодействий способствует повышению качества модели развития.
								</p>
							</div>

							<div className="home-master-top-magazine">
								<h3 className="home-master-top-magazine__title">
									Обо мне в медиа
								</h3>

								<div className="home-master-top-magazine-block-wrapper">
									{magazines.map((magazine, index) => (
										<a href={magazine.link} target="__blank" className="home-master-top-magazine-block" key={`home-master-top-magazine-block-${index}`}>
											<img src={magazine.image} alt="" className="home-master-top-magazine-block__logo" />
										</a>
									))}
								</div>
							</div>
						</div>

						{/* {master.worksImage.length ||
							master.worksVideo.length ? (
							<CoursePageMasterWorks />
						) : null} */}
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeMaster;
