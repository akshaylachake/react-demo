import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("PureComponent Render")
    return (
      <div>
        This is PureComponent Class {this.props.name}
      </div>
    )
  }
}

export default PureComp
