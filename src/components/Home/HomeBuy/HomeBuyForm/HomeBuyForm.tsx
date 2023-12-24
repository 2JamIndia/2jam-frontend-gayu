import React from 'react'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { RenderInput } from '../../../'

import validate from './validate'

const HomeBuyForm: React.FC<InjectedFormProps> = ({ handleSubmit, invalid, submitting, pristine }) => {
	const { isSend } = useTypedSelector(({ register }) => register)

	return (
		<div className='home-buy-form-wrapper'>
			<div className="home-buy-form-steps">
				<div className="home-buy-form-steps-item active">
					<span className="home-buy-form-steps-item__number">1</span>
					<span className="home-buy-form-steps-item__title">
						Email
					</span>
				</div>
				<div className="home-buy-form-steps-line"></div>
				<div className="home-buy-form-steps-item">
					<span className="home-buy-form-steps-item__number">2</span>
					<span className="home-buy-form-steps-item__title">Payment</span>
				</div>
				<div className="home-buy-form-steps-line"></div>
				<div className="home-buy-form-steps-item">
					<span className="home-buy-form-steps-item__number">3</span>
					<span className="home-buy-form-steps-item__title">
						New skills
					</span>
				</div>
			</div>

			<form onSubmit={handleSubmit} className='home-buy-form'>
				<h3 className='home-buy-form__title'>
					Create an account and start learning
				</h3>

				<div className="home-buy-form-input">
					<Field
						component={RenderInput}
						type="text"
						name="email"
						label="Email"
					/>
				</div>

				{/* <div className="home-buy-form-input">
					<Field
						component={RenderInput}
						type="password"
						name="password"
						label="Password"
					/>
				</div> */}

				<button className={`btn ${invalid || submitting || pristine || isSend ? "disabled" : ""} home-buy-form__btn`} disabled={invalid || submitting || pristine || isSend}>
					Buy course

					{isSend ? <span className="loader"></span> : null}
				</button>
			</form>
		</div>
	)
}

export default reduxForm<{}>({
	form: "register-form",
	validate,
})(HomeBuyForm);