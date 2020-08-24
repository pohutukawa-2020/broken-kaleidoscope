import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {       // React.Component is a superclass of Pixel so it needs constructor() and super()
    constructor (props) {                   // 
        super(props)                        // passes props into the React.Component constructor?

        this.state = {                      // Allows us to make our component dynamic
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: randomHexColor()
            }
        }
    }

    clickHandler = (evt) => {
        this.setState({
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: randomHexColor()
            }
        })
    }

    render () {
        return (
            <div style={this.state.style} onClick={this.clickHandler}></div>
        )
    }
}



export default Pixel