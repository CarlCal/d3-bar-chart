
import axios from "axios"

import dispatcher from "../dispatcher"

export function fetchData() {
	const URL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
	
	var data = axios.get(URL)
	.then(function (response) {
		if (response.data.error) {
			console.error(response.data.error)
		} else {
			console.log("3-Action:Fetch Data -> Dispatch:Data Recived")
			dispatcher.dispatch({type: "DATA_RECIVED", data: response.data})
		}
	})
	.catch(function (error) {
    console.error(error);
  });
}