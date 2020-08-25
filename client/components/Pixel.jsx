import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// const colorArray = ['red', 'purple', 'blue', 'yellow', 'green'],
class Pixel extends React.Component {
  constructor() {
    super()
    
    this.state = {
      style: {
      backgroundColor: randomHexColor(),
      height: '150px',
      width: '150px' }
    }
  }

 clickHandler = () => {
    this.setState({
      // style: {
      //   backgroundColor: 'blue',
      //   height: '150px',
      //   width: '150px' }

      style: {
        ...this.state.style,
        backgroundColor: 'blue'
        // spread operator - duplicates existing (this.)state
      }

      })
  }

  render() {
    return (
    <>
    <div style={this.state.style} onClick={this.clickHandler}></div>
    </>
   )
 }
}

export default Pixel
