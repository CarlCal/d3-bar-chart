
import { EventEmitter } from "events"
import axios from "axios"

const URL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

class DataStore extends EventEmitter {
	constructor() {
		var data = axios.get(URL)
			.then(function (response) {
				return response.data.data 
				//if response.error
			})
			.catch(function (error) {
				console.error(error)
			})
		super()
		this.state = {
			data: data
		}
	}

	getAll() {
		return this.state.data
	}
}

const dataStore = new DataStore
export default dataStore
