import React from "react";
import { useDispatch } from "react-redux";
import {
	Route,
	Routes,
	Navigate,
	useLocation,
	useSearchParams,
} from "react-router-dom";
import { compose } from "redux";

import "moment/locale/ru";
import moment from "moment";

import { Header, Footer } from "./components/";

import { Home, Policy, PublicOffer } from "./pages/";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		YooMoneyCheckoutWidget?: any;
		_tmr?: any;
	}
}

const App: React.FC = () => {
	const [search] = useSearchParams();
	const { pathname } = useLocation();

	// const {userInfo} = useTypedSelector(({user}) => user);
	// const masters = useTypedSelector(({masters}) => masters.items);
	// const categories = useTypedSelector(({categories}) => categories.items);

	React.useEffect(() => {
		const ref = search.get("ref");

		if (ref) {
			localStorage.setItem(
				"ref",
				JSON.stringify({
					ref,
					date: moment().format("DD.MM.YYYY, HH:mm"),
				})
			);
		}

		let cords: any = ["scrollX", "scrollY"];

		// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
		window.addEventListener("unload", (e) =>
			cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
		);

		// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
		window.scroll(...cords.map((cord: any) => localStorage[cord]));
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<div className="wrapper">
				{pathname.indexOf("/payment") !== -1 ||
					pathname.indexOf("/login") !== -1 ||
					pathname.indexOf("/register") !== -1 ||
					pathname === "/go/password-recovery" ||
					pathname.indexOf("/go/password-recovery") !== -1 ||
					pathname.indexOf("/go/cabinet/subscribe/disable") !==
					-1 ? null : (
					<Header />
				)}

				<React.Suspense fallback={<></>}>
					<Routes>
						<Route path="/" element={<Home />} />

						{/* <Route path="/policy" element={<Policy />} /> */}

						{/* <Route path="/public-offer" element={<PublicOffer />} /> */}

						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</React.Suspense>

				{pathname.indexOf("/payment") !== -1 ||
					pathname.indexOf("/login") !== -1 ||
					pathname.indexOf("/register") !== -1 ||
					pathname === "/go/password-recovery" ||
					pathname.indexOf("/go/password-recovery") !== -1 ||
					pathname.indexOf("/go/cabinet/subscribe/disable") !==
					-1 ? null : (
					<Footer />
				)}
			</div>
		</>
	);
};

export default App;
