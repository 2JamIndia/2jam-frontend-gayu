import React from 'react'
import { motion } from "framer-motion";

import SkillImage1 from '../../../assets/images/skills/skill-1.svg'
import SkillImage2 from '../../../assets/images/skills/skill-2.svg'
import SkillImage3 from '../../../assets/images/skills/skill-3.svg'
import SkillImage4 from '../../../assets/images/skills/skill-4.svg'
import SkillImage5 from '../../../assets/images/skills/skill-5.svg'
import SkillImage6 from '../../../assets/images/skills/skill-6.svg'

const HomeSkills: React.FC = () => {
	return (
		<section className="home-skills" id={"home-skills"}>
			<div className="container">
				<div className="home-skills-wrapper">
					<div className="home-skills-blocks">
						<motion.h2
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
							className="home-skills-blocks__title"
						>
							Чтобы сделать <br /> качественный макияж нужно:
						</motion.h2>

						<div className="home-skills-blocks-wrapper">
							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Уметь правильно подобрать тональное средство
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage1}")` }}></div>
							</div>

							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Знать, как нанести и растушевать тени, чтобы получить «чистый» результат и выразительный взгляд
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage2}")` }}></div>
							</div>

							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Разбираться в необходимых продуктах
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage3}")` }}></div>
							</div>

							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Уметь работать скульптором, румянами и бронзером
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage4}")` }}></div>
							</div>

							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Уметь подбирать подходящую помаду
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage5}")` }}></div>
							</div>

							<div className="home-skills-blocks-block">
								<h3 className="home-skills-blocks-block__title">
									Знать, как подчеркнуть свои достоинства и скрыть недостатки
								</h3>

								<div className="home-skills-blocks-block-image" style={{ backgroundImage: `url("${SkillImage6}")` }}></div>
							</div>

							{/* <motion.div
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
							className="home-skills-blocks-block w50"
						>
							<h3 className="home-skills-blocks-block__title">
								Разбираться в необходимых продуктах
							</h3>

							<div className="home-skills-blocks-block-image">
								<img src={SkillImage1} alt="" className='home-skills-blocks-block-image__image' />
							</div>
						</motion.div>

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
							className="home-skills-blocks-block w50"
						>
							<h3 className="home-skills-blocks-block__title">
								How to find out what types of products work for you?
							</h3>

							<img src={SkillImage2} alt="" className='home-skills-blocks-block__image skill2' />
						</motion.div>

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
							className="home-skills-blocks-block w33"
						>
							<h3 className="home-skills-blocks-block__title">
								The basics of Skincare
							</h3>
							<div className="home-skills-blocks-block-image-bg" style={{ backgroundImage: `url("${SkillImage3}")` }}></div>
						</motion.div>

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
							className="home-skills-blocks-block w33"
						>
							<h3 className="home-skills-blocks-block__title">
								Techniques, tips, and tricks for make-up application
							</h3>

							<div className="home-skills-blocks-block-image">
								<img src={SkillImage4} alt="" className='home-skills-blocks-block-image__image' />
							</div>
						</motion.div>

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
							className="home-skills-blocks-block w33"
						>
							<h3 className="home-skills-blocks-block__title">
								How to accessorise for particular looks
							</h3>

							<div className="home-skills-blocks-block-image">
								<img src={SkillImage5} alt="" className='home-skills-blocks-block-image__image' />
							</div>
						</motion.div> */}
						</div>
					</div>

					<div className="home-skills-message">
						<h3 className="home-skills-message__title">
							Всему этому вы <br /> научитесь на курсе
						</h3>

						<p className="home-skills-message__subtitle">
							Вам не придётся долго и нудно искать эту информацию в интернете
						</p>

						<a href="/" className="btn home-skills-message__btn">Купить курс</a>
					</div>

					{/* <div className="home-skills-items-wrapper">
						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								Types of products
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								How to find out what types of products work for you?
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								The basics of Skincare
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								Techniques, tips, and tricks for make-up application
							</h3>
						</div>

						<div className="home-skills-item">
							<h3 className="home-skills-item__title">
								How to accessorise for particular looks
							</h3>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default HomeSkills