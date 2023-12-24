import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { FooterEmail } from '../../components/'

import Logo from "../../assets/images/logo.svg";
import Love from "../../assets/images/love.jpg";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<p className="footer__title">
				Create, learn, love, 2Jam <img src={Love} alt="" />
			</p>

			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-block">
						<Link to="/" className="footer-block-logo">
							<img
								src={Logo}
								alt="2Jam"
								className="footer-block-logo__image"
							/>
						</Link>

						<nav className="footer-block-menu">
							<div className="footer-block-menu-block">
								<LinkScroll
									to="home-about"
									spy={true}
									smooth={true}
									offset={-100}
									duration={700}
									className="footer-block-menu-block__link"
								>
									About
								</LinkScroll>

								<LinkScroll
									to="home-lessons"
									spy={true}
									smooth={true}
									offset={-100}
									duration={700}
									className="footer-block-menu-block__link"
								>
									Lessons
								</LinkScroll>

								<LinkScroll
									to="home-works"
									spy={true}
									smooth={true}
									offset={-100}
									duration={700}
									className="footer-block-menu-block__link"
								>
									Works
								</LinkScroll>

								<LinkScroll
									to="home-faq"
									spy={true}
									smooth={true}
									offset={-100}
									duration={700}
									className="footer-block-menu-block__link"
								>
									FAQ
								</LinkScroll>

								<Link
									to="/refund-policy"
									className="footer-block-menu-block__link"
								>
									Refund Policy
								</Link>
							</div>

							<div className="footer-block-menu-block">
								<LinkScroll
									to="home-buy"
									spy={true}
									smooth={true}
									offset={window.innerWidth > 600 ? -100 : 300}
									duration={700}
									className="footer-block-menu-block__link start"
								>
									Start learning

									<svg viewBox="0 0 144 115" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M82.5517 102.338L120.207 64.7653C108.828 65.5957 93.3103 65.8033 8.06897 65.8033C3.72414 65.8033 0 62.0668 0 57.7076C0 53.3484 3.51724 49.6119 8.06897 49.6119C85.8621 49.6119 107.793 49.6119 120.414 50.4422L82.5517 12.87C80.8965 11.2094 80.069 9.34116 80.069 7.47293C80.069 3.52888 83.7931 0 87.7241 0C89.5862 0 91.2414 0.622748 92.8965 2.2834L139.862 49.1968C142.552 51.8953 144 54.8014 144 57.5C144 60.4061 142.552 63.3123 139.862 66.0108L93.1034 112.717C91.6552 114.17 89.7931 115 87.931 115C84 115 80.2759 111.471 80.2759 107.527C80.2759 105.866 80.8965 103.998 82.5517 102.338Z" />
									</svg>
								</LinkScroll>

								<a
									href=""
									className="footer-block-menu-block__link"
								>
									Login
								</a>
							</div>
						</nav>
					</div>

					<div className="footer-block">
						<FooterEmail title="Support" email="hello@2jam.in" />
					</div>

					<div className="footer-block">
						<a href="https://www.instagram.com/2jam.in" className="footer-block-social">
							<svg
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="5"
									y="5"
									width="90"
									height="90"
									rx="20"
									stroke="#EB84F8"
									strokeWidth="10"
								/>
								<path
									d="M38.4737 0.105732C31.575 0.398878 23.5623 1.00471 18.5202 1.57146C13.439 2.15775 9.9213 3.81891 6.6967 7.16077C5.016 8.91964 4.27336 10.014 3.27667 12.1052C2.29952 14.1963 1.83048 16.2483 1.45917 20.0396C-0.162905 36.4362 -0.436508 54.0836 0.657902 70.2652C1.30282 79.5677 1.75231 83.359 2.45586 85.5869C3.37438 88.5184 4.52742 90.4336 6.6967 92.7201C9.9213 96.062 13.4195 97.7232 18.5202 98.3095C21.7448 98.6808 29.4839 99.3061 34.7605 99.6188C40.3107 99.9511 59.502 99.9511 65.0522 99.6188C74.5306 99.0521 82.0742 98.3681 84.3021 97.8795C87.683 97.1173 90.419 95.5539 93.0964 92.8569C96.3015 89.6128 97.8063 86.3687 98.373 81.4438C100.542 62.448 100.542 37.4525 98.373 18.4566C97.9431 14.6848 96.9073 11.812 95.0507 9.19324C94.0736 7.82523 91.748 5.53869 90.3995 4.62017C88.9142 3.60393 86.3541 2.48998 84.5757 2.07958C82.211 1.51283 75.1559 0.86791 65.5408 0.301163C60.9091 0.0275602 43.3008 -0.109241 38.4737 0.105732ZM67.1824 19.2188C73.827 20.9777 78.9668 26.1175 80.7257 32.7621C81.1556 34.3842 81.1556 34.6383 81.2143 49.1196C81.2924 65.1254 81.2729 65.6921 80.198 68.7409C78.1656 74.5451 73.2407 79.04 67.1628 80.6621C65.5798 81.092 65.2672 81.092 50.8249 81.1507C34.8191 81.2288 34.2524 81.2093 31.2037 80.1344C25.3603 78.0824 20.8263 73.1185 19.2824 67.0211C18.8329 65.2817 18.8329 65.2231 18.8329 49.9405C18.8329 34.6578 18.8329 34.5992 19.2824 32.8598C21.1781 25.3749 27.3341 19.9028 35.0536 18.8084C35.3859 18.7693 42.3627 18.7302 50.5903 18.7498C65.3649 18.7889 65.5603 18.7889 67.1824 19.2188Z"
									fill="#EB84F8"
								/>
								<path
									d="M34.858 25.2381C30.1872 26.1566 26.1809 30.2215 25.2819 34.951C24.852 37.257 24.852 62.7411 25.2819 64.9495C26.005 68.6041 28.6042 72.0045 31.8484 73.5484C34.7017 74.8969 34.0763 74.8578 50.0039 74.8578C65.9314 74.8578 65.3061 74.8969 68.1593 73.5484C71.4426 71.985 73.9441 68.7018 74.7063 64.9495C75.1557 62.7216 75.1753 37.1984 74.7258 34.9314C73.7487 30.0652 69.801 26.1175 64.9934 25.2185C62.8241 24.8081 36.9491 24.8277 34.858 25.2381ZM67.9053 30.1825C68.3352 30.3779 68.9802 30.886 69.3124 31.2769C71.7553 34.2474 68.8824 38.6251 65.2083 37.5502C62.8241 36.8662 61.6515 34.2279 62.7264 32.0195C63.6449 30.1238 65.951 29.303 67.9053 30.1825ZM54.0297 34.306C59.834 35.7913 64.3289 40.4035 65.7556 46.3641C66.166 47.9862 66.205 51.5234 65.8533 53.1651C64.5048 59.3602 59.7754 64.1873 53.5802 65.7117C51.8018 66.1416 48.2059 66.1416 46.4275 65.7117C40.4473 64.246 35.9329 59.8488 34.3499 53.9468C33.8027 51.9339 33.7636 48.3184 34.2326 46.3641C35.5225 41.107 39.2552 36.788 44.1019 34.9119C45.4113 34.4233 46.0757 34.2474 48.4404 33.837C49.4176 33.6611 52.5445 33.9347 54.0297 34.306Z"
									fill="#EB84F8"
								/>
								<path
									d="M48.7141 40.1689C43.6916 40.9116 40.1934 44.9179 40.1934 49.9405C40.1934 55.4711 44.4733 59.7706 50.004 59.7511C55.5542 59.7315 59.8146 55.4907 59.8146 49.9405C59.8146 47.3412 58.896 44.9765 57.1763 43.1199C55.2024 41.0093 51.5869 39.739 48.7141 40.1689Z"
									fill="#EB84F8"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
