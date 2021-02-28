import React from "react"
import { Link } from "gatsby"

export default function Square(props) {
	const index = props.index % 2 == 0

	return (
		<div className={"w-full max-w-sm px-4 my-1 py-3 mx-auto shadow-xl dark:bg-gray-800 transform transition hover:scale-105 picture-card duration-400  " + (index ? "bg-white" : "bg-green-300")}>
			<div className="text-right">
				<span className={"px-3 py-1 text-xs uppercase rounded-full text-militarygreen-300 " + (index ? "bg-green-100" : "bg-white")}>NEWS!</span>
			</div>

			<div>
				<h1 className={"mt-2 text-lg font-semibold  dark:text-white uppercase " + (index ? "text-gray-800" : "text-white")}>{props.square.title}</h1>
				<p className={"mt-2 text-sm " + (index ? "text-gray-800" : "text-white")}>{props.square.subtitle}</p>
			</div>

			<div className="mt-16 text-right cursor-pointer">
				<Link to={props.url} className={"px-4 py-1 transition ease-in duration-200 rounded-full focus:outline-none " + (index ? "	hover:bg-green-100 hover:text-white border-2 border-green-100" : "	hover:bg-white text-white hover:text-gray-800 border-2 border-white-100")}>
					Scopri di più!
				</Link>
			</div>
		</div>
	)

}