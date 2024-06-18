import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegulaComponent from './RegulaComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Parent Name State'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Parent Name State'
            })
        },3000)
    }
    
  render() {
    console.log("ParentComponent Render")
    return (
      <div>
        This is ParentComponent Class
        <RegulaComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComponent
