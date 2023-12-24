import React from 'react'
import { useDispatch } from 'react-redux'

import { sendRegister } from '../../../redux/actions/register'

import { HomeBuyInfo, HomeBuyForm } from '../../'

const HomeBuy: React.FC = () => {
	const dispatch = useDispatch()

	const onSubmit = (data: any) => {
		return dispatch(sendRegister(data) as any)
	}

	return (
		<div className="home-buy" id="home-buy">
			<div className="container">
				<div className="home-buy-wrapper">
					<HomeBuyInfo />

					{/* <HomeBuyForm onSubmit={onSubmit} /> */}
				</div>
			</div>
		</div>
	)
}

export default HomeBuy