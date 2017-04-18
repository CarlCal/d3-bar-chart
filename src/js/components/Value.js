
import React from "react"

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.Date +"---"+ this.props.Value}</li>
      </div>
    )
  }
}
