// import moment from "moment";
import { Dispatch } from "redux";
import { SubmissionError } from "redux-form";
import moment from "moment";

import $api from "../../http/";

import {
	RegisterActions,
	RegisterActionTypes,
} from "../types/register/IRegister";

export const sendRegister = (data: { email: string, password: string }) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_SEND_REGISTER,
			payload: true,
		});

		let parseRef = JSON.parse(localStorage.getItem("ref") as string)
		let ref = ""

		if (parseRef && Object.keys(parseRef).length) {
			ref = moment().subtract(1, "days").isBefore(moment(parseRef.date, "DD.MM.YYYY, HH:mm")) ? parseRef.ref : ""
		}

		return $api
			.post(`/register`, { ...data, courseId: "651da50154946fa97401edaf", ref })
			.then(({ data }) => {
				window.location.href = data.payment_url

				// localStorage.setItem("accessToken", data.accessToken);

				// if (data.number) {
				// 	document.location.href = `https://hobjob.ru/payment/course/${data.number}`;
				// } else {
				// 	document.location.href = "https://hobjob.ru/go/training"
				// }
			})
			.catch(({ response }) => {
				dispatch({
					type: RegisterActionTypes.SET_SEND_REGISTER,
					payload: false,
				});

				if (response) {
					throw new SubmissionError({
						[response.data.fieldError]: response.data.message,
					});
				}
			});
	};
};
