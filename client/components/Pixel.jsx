import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const width = 10
const height = 10

class Pixel extends React.Component {       // React.Component is a superclass of Pixel so it needs constructor() and super()
    constructor (props) {                   // 
        super(props)                        // passes props into the React.Component constructor?

        this.state = {                      // Allows us to make our component dynamic
            style: {
                width,
                height,
                backgroundColor: randomHexColor()
            }
        }
    }

    clickHandler = (evt) => {               // event handler function 
        this.setState({                 // same as function (evt) { this.setState... }
            style: {
                width: width,           // trying out width: width vs just width below
                height: height,
                backgroundColor: randomHexColor()
            }
        })
    }

    onMouseEnter = (evt) => {
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'green'        // green needs to be in quotation marks
            }
        })
    }

    onContextMenu = (evt) => {
        evt.preventDefault()
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'black'
            }
        })
    }

    onDoubleClick = (evt) => {
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'white'
            }
        })
    }

    onDragEnter = (evt) => {
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'yellow'
            }
        })
    }

    render () {                                 // call function like this.clickHandler not this.clickHandler()
        return (                                // if parentheses are used it will fire the event as soon as the DOM loads (not ideal)
            <div style={this.state.style} 
            onClick={this.clickHandler} 
            onMouseEnter={this.onMouseEnter}
            onContextMenu={this.onContextMenu}
            onDoubleClick={this.onDoubleClick}
            draggable='true' onDragEnter={this.onDragEnter}>      
            </div>
        )
    }
}



export default Pixel