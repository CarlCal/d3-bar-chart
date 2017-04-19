
import React from "react"

export default class Title extends React.Component {
	render() {
		var title = this.props.Title
		return (
			<header>
				<h1 class="title">{title}</h1>
			</header>
		)
	}
}