import React from "react"

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 100,
      width: 100,
      backgroundColor: randomHexColor(),
    }
  }
  clickHandler = (evt) => {
    this.setState({
      backgroundColor: randomHexColor(),
    })
  }
  mouseHandler = (evt) => {
    this.setState({
      backgroundColor: "green",
    })
  }
  rightHandler = (evt) => {
    evt.preventDefault()
    this.setState({
      backgroundColor: "black",
    })
  }
  whiteHandler = (evt) => {
    this.setState({
      backgroundColor: "white",
    })
  }
  dragHandler = (evt) => {
    this.setState({
      backgroundColor: "yellow",
    })
  }
  render() {
    return (
      <>
        <div
          style={this.state}
          onClick={this.clickHandler}
          onMouseEnter={this.mouseHandler}
          onContextMenu={this.rightHandler}
          onDoubleClick={this.whiteHandler}
          onDragEnter={this.dragHandler}
        ></div>
      </>
    )
  }
}
export default Pixel
//https://stackoverflow.com/questions/55955500/how-to-change-style-property-on-button-onclick-in-react
