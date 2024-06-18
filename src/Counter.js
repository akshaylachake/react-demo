import React, { Component } from 'react'
import UpdateComponent from './HigherOrderComponent'

export class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {count} = this.state;
        return (
        <div>
            <button onMouseEnter={this.incrementCount}>{this.props.name} increment to {count}</button>
        </div>
        )
    }
}

export default UpdateComponent(Counter)
