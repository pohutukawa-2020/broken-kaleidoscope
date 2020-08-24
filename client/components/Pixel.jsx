import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: this.randomHexColor()

      }
    }
  }
   randomHexColor = () =>
     `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    clickHandler = () => {
      this.setState({
        style: {
          height: '100px',
          width: '100px',
          backgroundColor: this.randomHexColor() }
      })
    }

    render () {
      return (
        <div onClick={this.clickHandler} style={this.state.style}>
        </div>
      )
    }
}

export default Pixel
