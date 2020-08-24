import React from 'react'

class Pixel extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            style: {
                width: '50px',
                height: '50px',
                backgroundColor: 'pink'
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