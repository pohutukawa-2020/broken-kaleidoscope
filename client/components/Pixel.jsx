import React from 'react'

class Pixel extends React.Component {

  constructor() {
    super()
    this.state = {
      style: {
      colorArray: ['red', 'purple', 'blue', 'yellow', 'green'],
      backgroundColor: 'black',
      height: '150px',
      width: '150px' }
    }
  }
}

 clickHandler = () => {
    this.setState({
      style: this.state.style.backgroundColor = this.state.colorArray[3]
    })
  }

  render() {
    return (
    <>
    <div style={this.state.style}></div>
    </>
   )
 }

export default Pixel
