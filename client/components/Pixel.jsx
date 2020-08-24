import React from 'react'
class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'blue'
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


export default Pixel
