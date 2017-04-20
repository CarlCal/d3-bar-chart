
import { EventEmitter } from "events"

import dispatcher from "../dispatcher"

class DataStore extends EventEmitter {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	getAll() {
		return this.state.data
	}

	handleActions(action) {
  	switch(action.type) {
  		case "FETCH_DATA": {
  		 	console.log("Fetching Data ...")
  		}
  		case "DATA_RECIVED": {
  			console.log("4-Store:Handle Dispatched Action -> Emit:Data Recived ")
  			// make recived data into array of JSON???
        this.state.data = action.data
  			this.emit("delivery")

  		}
  	}
  }
}

const dataStore = new DataStore
dispatcher.register(dataStore.handleActions.bind(dataStore))

export default dataStore
