
import React from "react"

import Value from "../components/Value"
import * as DataActions from "../actions/DataActions"
import DataStore from "../stores/DataStore"

export default class BarChart extends React.Component {
	constructor() {
		super()
		this.getData = this.getData.bind(this)
		this.state = {
			data: []
		}
	}

	componentWillMount() {
		console.log("1-Will Mount")
		DataStore.on("delivery", this.getData)
	}

	componentWillUnmount() {
		console.log("Will Unmount")
		DataStore.removeListener("delivery", this.getData)
	}

	componentDidMount() {
		console.log("2-Did Mount -> Action:Fetch Data")
		DataActions.fetchData()
	}

	getData() {
		console.log("6-Set State with new Data")
		this.setState({
			data: DataStore.getAll()
		})
	}

	render() {
		const { data } = this.state
		const DataComponent = data.map((value, index) => {
			return <Value key={index /*???*/} Value={value[1]} Date={value[0]} />
		})

		return (
			<div>
				<ul>{DataComponent}</ul>
			</div>
		)
	}

}