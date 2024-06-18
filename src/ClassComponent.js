import React, { Component } from 'react';
import button from './assets/button.png';
import button1 from './assets/button1.png';

export class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'Click The Button',
      buttonTitle: 'Clickable Button',
      imgUrl: button
    }
  }

  ButtonClick = () =>{
    this.setState({
      message: 'Button is Clicked',
      buttonTitle: 'YAYY!!!',
      imgUrl: button1
    })
  }
  
  render() {
    return (
      <div>
        <h1>This is ClassComponent Component, Following are props : </h1>
        <ul>
          <li>name : {this.props.name}</li>
        </ul>

        <p>{this.props.children}</p>
        <p>{this.state.message}<br/>
          <img src={this.state.imgUrl} alt=""/>
        </p>
        <button onClick={this.ButtonClick}>{this.state.buttonTitle}</button>
      </div>
    )
  }
}

export default ClassComponent
