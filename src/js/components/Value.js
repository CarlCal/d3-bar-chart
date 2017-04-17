
import React from "react"

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.value}</li>
      </div>
    )
  }
}
