import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.state = {
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: randomHexColor()
      }
    })
  }

  hoverHandler = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'green'
      }
    })
  }

  rightClickHandler = evt => {
    evt.preventDefault()

    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'black'
      }
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'white'
      }
    })
  }

  dragHandler = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'yellow'
      }
    })
  }

  // setInterval(() => {
  //   const randomHexColor = () =>
  //   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  //   this.setState({
  //     style: {
  //       height: '40px',
  //       width: '40px',
  //       backgroundColor: randomHexColor()
  //     }
  //   })
  // }, 2000);

  render() {
    return (
      <div 
      style={this.state.style} 
      onClick={this.clickHandler} 
      // onMouseEnter={this.hoverHandler} 
      onContextMenu={this.rightClickHandler} 
      onDoubleClick={this.doubleClickHandler}
      onDragEnter={this.dragHandler}></div>
    )
  }
}

export default Pixel