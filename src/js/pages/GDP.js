
import React from "react"

import Title from "../components/Title"
import BarChart from "../components/BarChart"
import Note from "../components/Note"

import * as DataActions from "../actions/DataActions"

import DataStore from "../stores/DataStore"

export default class GDP extends React.Component {
	constructor() {
		super()
		this.getData = this.getData.bind(this)
		this.state = {
			data: [],
			note: ""
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
		console.log("5-Set State with new Data")
		this.setState({
			data: DataStore.getReceivedData(),
			note: DataStore.getNote()
		})
	}

	render() { 
		console.log("6-Render with new Data")
		return (
			<section class="card">
				<Title Title="Gross Domestic Product"></Title>
				<BarChart Data={this.state.data}></BarChart>
				<Note Note={this.state.note}></Note>
			</section>
		)
	}
}
