import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '4px',
        width: '4px',
        backgroundColor: this.randomHexColor()

      }
    }
  }
   randomHexColor = () =>
     `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    clickHandler = evt => {
      this.setState({
        style: {
          height: '4px',
          width: '4px',
          backgroundColor: this.randomHexColor() }
      })
    }
    onMouseEnter = evt => {
      this.setState({
        style: {
          height: '4px',
          width: '4px',
          backgroundColor: 'green' }
      })
    }
    onContextMenu = evt => {
      evt.preventDefault()
      this.setState({
        style: {
          height: '4px',
          width: '4px',
          backgroundColor: 'black' }
      })
    }
    onDoubleClick = evt => {
      this.setState({
        style: {
          height: '4px',
          width: '4px',
          backgroundColor: 'white' }
      })
    }
    onDragEnter = evt => {
      this.setState({
        style: {
          height: '4px',
          width: '4px',
          backgroundColor: 'yellow' }
      })
    }

    render () {
      return (
        <div onClick={this.clickHandler}
          onMouseEnter={this.onMouseEnter}
          onContextMenu={this.onContextMenu}
          onDoubleClick={this.onDoubleClick}
          onDragEnter={this.onDragEnter}
          style={this.state.style}>
        </div>
      )
    }
}

export default Pixel
