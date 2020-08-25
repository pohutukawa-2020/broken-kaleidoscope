import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: "100px",
      width: "100px",
      backgroundColor: randomHexColor(),
    },
  };

  clickHandler = () => {
    this.setState({
      // ... update style here ...
      style: {
      backgroundColor: randomHexColor(),
    }
  })
}

  render() {
    return (
      //<>
      <div style={this.state.style} onClick={this.clickHandler} > 
        </div>
      
      //</>
    );
  }
}

export default Pixel;
