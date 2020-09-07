import React from 'react'
class Pixel extends React.Component {
  // https://www.javatpoint.com/react-constructor
  // The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.
  constructor (props) {
    // The constructor in a React component is called before the component is mounted. When you implement the constructor for a React component, you need to call super(props) method before any other statement. If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.
    super(props)
    const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = { //https://reactjs.org/docs/faq-state.html
      // In React, both this.props and this.state represent the rendered values, i.e. what’s currently on the screen.
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }
    }
  }
  render () {
    return (
      // this refers to line 12 abv, this is what is being rendered and being dispalyed on the screen
      <div style={this.state.style}>    
      </div>
    )
  }
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel

// https://www.paulirish.com/2009/random-hex-color-code-snippets/