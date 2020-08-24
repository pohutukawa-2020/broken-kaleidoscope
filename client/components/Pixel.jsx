import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = (event) => {
    const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    })
  }

  hoverHandler = (event) => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'green'
      }
    })
  }

  rightClickHandler = evt => {
    evt.preventDefault()

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'black'
      }
    })
  }

  render() {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.hoverHandler} onContextMenu={this.rightClickHandler}></div>
    )
  }
}

export default Pixel