import React, { Component } from 'react'

export class RegulaComponent extends Component {
  render() {
    console.log("RegulaComponent Render")
    return (
      <div>
        This is RegulaComponent Class {this.props.name}
      </div>
    )
  }
}

export default RegulaComponent
