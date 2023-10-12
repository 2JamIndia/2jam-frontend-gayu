import React from 'react'
import { Link as LinkScroll } from "react-scroll";

interface HeaderMediaProps {
	state: boolean
	setState: () => void
}

const HeaderMedia: React.FC<HeaderMediaProps> = ({ state, setState }) => {
	const PopupRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (state) {
			document.addEventListener("mousedown", togglePopup);
			document.addEventListener("touchstart", togglePopup);
		}

		return () => {
			document.removeEventListener("mousedown", togglePopup);
			document.removeEventListener("touchstart", togglePopup);
		};
	}, [PopupRef, state]);

	const togglePopup = (e: any) => {
		if (PopupRef.current && !PopupRef.current.contains(e.target)) {
			if (setState) setState();
		}
	};

	return (
		<div className={`header-media-nav ${state ? "active" : ""}`} ref={PopupRef}>
			<a href="https://2jam.in/go/login" className="header-media-nav__link">Login</a>

			<LinkScroll
				to="home-about"
				spy={true}
				smooth={true}
				offset={-100}
				duration={700}
				className="header-media-nav__link"
			>
				About
			</LinkScroll>

			<LinkScroll
				to="home-lessons"
				spy={true}
				smooth={true}
				offset={-100}
				duration={700}
				className="header-media-nav__link"
			>
				Lessons
			</LinkScroll>

			<LinkScroll
				to="home-works"
				spy={true}
				smooth={true}
				offset={-100}
				duration={700}
				className="header-media-nav__link"
			>
				Works
			</LinkScroll>

			<LinkScroll
				to="home-faq"
				spy={true}
				smooth={true}
				offset={-100}
				duration={700}
				className="header-media-nav__link"
			>
				FAQ
			</LinkScroll>
		</div>
	)
}

export default HeaderMedia