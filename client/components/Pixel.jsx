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

    clickHandler = (evt) => {               // event handler function 
        this.setState({                 // same as function (evt) { this.setState... }
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: randomHexColor()
            }
        })
    }

    onMouseEnter = (evt) => {
        this.setState({
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: 'green'        // green needs to be in quotation marks
            }
        })
    }

    onContextMenu = (evt) => {
        evt.preventDefault()
        this.setState({
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: 'black'
            }
        })
    }

    render () {                                 // call function like this.clickHandler not this.clickHandler()
        return (                                // if parentheses are used it will fire the event as soon as the DOM loads (not ideal)
            <div style={this.state.style} 
            onClick={this.clickHandler} 
            onMouseEnter={this.onMouseEnter}
            onContextMenu={this.onContextMenu}>      
            </div>
        )
    }
}



export default Pixel