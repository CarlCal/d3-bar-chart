
import React from "react"

import Value from "../components/Value"
import DataStore from "../stores/DataStore"

export default class BarChart extends React.Component {
	constructor() {
		super()
		this.state = {
			data: DataStore.getAll()
		}
	}

	// Dispatcher
	// Actions
	// async fetch

	render() {
		const { data } = this.state
		console.log(data)
		const DataComponent = data.map((value, index) => {
			return <Value key={index /*???*/} {...value} />
		})

		return (
			<div>
				<ul>{DataComponent}</ul>
			</div>
		)
	}

}