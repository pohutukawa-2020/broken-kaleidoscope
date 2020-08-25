import React from 'react'
class Pixel extends React.Component {
  constructor (props) {
    super(props)
    const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }
    }
  }
  render () {
    return (
      <div style={this.state.style}>    
      </div>
    )
  }
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel

// https://www.paulirish.com/2009/random-hex-color-code-snippets/