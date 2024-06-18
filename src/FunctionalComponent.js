import React, { useState } from 'react';
import button from './assets/button.png';
import button1 from './assets/button1.png';

function FunctionalComponent(props) {
    const [messageAndUrl, setMessageAndUrl] = useState({
        message: 'Click The Button',
        imgUrl: button,
    });
    const [buttonTitle, setButtonTitle] = useState('Clickable Button');

    const ButtonClick = () =>{
        setButtonTitle('YAYY!!!')
        setMessageAndUrl({
            message: 'Button is Clicked',
            imgUrl: button1,
        })
    }

    const OnlyUpdateMessage = () =>{
        setMessageAndUrl((prevData) => ({
            ...prevData,
            message: 'Only Update Message Clicked',
        }))
    }

    return (
        <>
        <h2>This is FunctionalComponent Component, Following are props : </h2>
        <ul>
            <li>name : {props.name}</li>
        </ul>
        <p>{props.children}</p>
        <p>{messageAndUrl.message}<br/>
          <img src={messageAndUrl.imgUrl} alt=""/>
        </p>
        <button onClick={ButtonClick}>{buttonTitle}</button>
        <button onClick={OnlyUpdateMessage}>Update Message</button>
        </>
    )
}

export default FunctionalComponent