import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'orange'

      }
    }
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'green' }
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
