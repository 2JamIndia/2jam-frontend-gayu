import React from "react";
import { Helmet } from "react-helmet";

import { PolicyBlock } from "../components/";

const RefundPolicy: React.FC = () => {
	const documentContent = [
		{
			title: "",
			content: [
				{
					type: "text",
					text: "We want you to be satisfied, so all suitable courses purchased on 2Jam can be refunded within 30 days, provided that the request complies with the recommendations of our refund policy.",
				},
				{
					type: "text",
					text: "Certain restrictions may apply, and some purchases may only be refunded by credit card.",
				},
				{
					type: "text",
					text: "How to send a refund request. Write to our support email <a href='mailto:hello@2jam.in'>hello@2jam.in</a>",
				},
			],
		},
	];

	return (
		<>
			<Helmet>
				<title>Refund Policy - 2Jam</title>
			</Helmet>
			<section className="policy">
				<div className="container">
					<div className="policy-wrapper">
						<h2 className="title__mb policy__title">
							Refund Policy
						</h2>
						<div className="policy-block-wrapper">
							{documentContent.map((item, index) => (
								<PolicyBlock
									{...item}
									blockIndex={index}
									key={`policy-block-${index}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RefundPolicy;
