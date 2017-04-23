
import React from "react"

export default class Note extends React.Component {
	render() {
		return (
			<footer>
				<p>{this.props.Note}</p>
			</footer>
		)
	}
}