import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { HeaderMedia } from '../'

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
	const [stateMedia, setStateMedia] = React.useState<boolean>(false)

	const toggleStateMedia = () => {
		setStateMedia(!stateMedia)
	}

	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header-wrapper">
						<Link to="/" className="header-logo">
							<img
								src={Logo}
								alt="2Jam"
								className="header-logo__image"
							/>
						</Link>

						<nav className="header-nav main">
							<LinkScroll
								to="home-about"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}
								className="header-nav__link"
							>
								About
							</LinkScroll>

							<LinkScroll
								to="home-lessons"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}
								className="header-nav__link"
							>
								Lessons
							</LinkScroll>

							<LinkScroll
								to="home-works"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}
								className="header-nav__link"
							>
								Works
							</LinkScroll>

							<LinkScroll
								to="home-faq"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}
								className="header-nav__link"
							>
								FAQ
							</LinkScroll>
						</nav>

						<nav className="header-nav">
							<div className="header-media">
								<button className="header-media__btn" onClick={toggleStateMedia}>
									Menu

									<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 1H15M0 5.5H15M0 10H15" stroke="black" />
									</svg>
								</button>

								<HeaderMedia state={stateMedia} setState={toggleStateMedia} />
							</div>

							<a href="https://2jam.in/go/login" className="header-nav__link login">Login</a>


							<LinkScroll
								to="home-buy"
								spy={true}
								smooth={true}
								offset={-100}
								duration={700}
								className="header-nav__btn"
							>
								Start learning

								<svg viewBox="0 0 144 115" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M82.5517 102.338L120.207 64.7653C108.828 65.5957 93.3103 65.8033 8.06897 65.8033C3.72414 65.8033 0 62.0668 0 57.7076C0 53.3484 3.51724 49.6119 8.06897 49.6119C85.8621 49.6119 107.793 49.6119 120.414 50.4422L82.5517 12.87C80.8965 11.2094 80.069 9.34116 80.069 7.47293C80.069 3.52888 83.7931 0 87.7241 0C89.5862 0 91.2414 0.622748 92.8965 2.2834L139.862 49.1968C142.552 51.8953 144 54.8014 144 57.5C144 60.4061 142.552 63.3123 139.862 66.0108L93.1034 112.717C91.6552 114.17 89.7931 115 87.931 115C84 115 80.2759 111.471 80.2759 107.527C80.2759 105.866 80.8965 103.998 82.5517 102.338Z" />
								</svg>
							</LinkScroll>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
