import React from "react";


class Pixel extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      style = {
        height: "20px",
        width: "20px",
        backgroundColor: "lightblue",
      }
  }
}
    

render () {
  return (
  <>
  <div>
      {this.state.style}
    </div>
  </>
  );

  }
}
  

export default Pixel;
