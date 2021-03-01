import React from "react"
import { Link } from "gatsby"

export default function CardOrari(props) {
	const index = props.index % 2 == 0

	return (
		<div className="max-w-4xl my-10 mx-auto bg-white rounded-lg shadow-md transform transition hover:scale-105 duration-400">
			<div className={"flex mt-2 " + (index ? "text-right" : "")}>
				<div className={"max-w-sm md:max-w-md lg:max-w-lg max-h-full hidden sm:block " + (index ? "order-first" : "order-last ml-auto")}>
					<img src="https://picsum.photos/800/500" alt="gym image" className="rounded-lg inset-0 w-full h-full object-cover" />
				</div>
				<div className={"inline-block my-4 mx-8 " + (index ? "ml-auto" : "")}>
					<p className="text-2xl font-bold text-green-700 hover:text-green-600">{props.name}</p>
					<ul className="mt-4 items-center jusitfy-between text-base text-gray-700 pt-4 lg:pt-0">
						{props.orari.map((orario, i) => {
							return (
								<li className="my-1" key={i}>
									<div className="flex text-left">
										<div className="w-28">
											<p>{orario.day}:</p>
										</div>
										<p className="font-bold pl-8">{orario.hour}</p>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)

}