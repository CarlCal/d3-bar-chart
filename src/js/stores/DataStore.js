
import { EventEmitter } from "events"

import dispatcher from "../dispatcher"

class DataStore extends EventEmitter {
	constructor() {
		super()
		this.state = {
			data: [],
      note: ""
		}
	}

	getReceivedData() {
		return this.state.data
	} 
  getNote() {
    return this.state.note
  }

  arrangeData(recivedData) {
    var newData = []

    for (var i = 0; i < recivedData.length; i++) {
      var obj = {
        "date": recivedData[i][0],
        "value": recivedData[i][1]
      }
      newData[i] = obj

      if (i === recivedData.length - 1) {
        this.state.data = newData
        this.emit("delivery")
      }
    } 
  }

	handleActions(action) {
  	switch(action.type) {
  		case "DATA_RECIVED": {
  			console.log("4-Store:Handle Dispatched Action -> Emit:Data Recived ")
        this.state.note = action.data.description
        this.arrangeData(action.data.data)
  		}
  	}
  }
}

const dataStore = new DataStore
dispatcher.register(dataStore.handleActions.bind(dataStore))

export default dataStore
