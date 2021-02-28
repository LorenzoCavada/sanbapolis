import React from "react"

export default function News(props) {
	const date = new Date(props.news.date)

	return (
		<div className="max-w-4xl max-h-52 my-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md transform transition hover:scale-105 duration-400">
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-gray-600">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</span>
			</div>

			<div className="mt-2">
				<a href="#" className="text-2xl font-bold text-green-700 hover:text-green-600 hover:underline">{props.news.title}</a>
				<p className="mt-2 text-gray-600 truncate overflow-ellipsis overflow-hidden">{props.news.description}</p>
			</div>

			<div className="flex items-center justify-between mt-4">
				<a href="#" className="ml-auto text-green-700 hover:underline">Continua a leggere</a>
			</div>
		</div>
	)
}