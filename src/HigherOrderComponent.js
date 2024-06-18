import React from "react";

const UpdateComponent = OriginalComponent => {
  class NewComp extends React.Component{
    render(){
      return <OriginalComponent name="The User" />;
    }
  }

  return NewComp
}

export default UpdateComponent