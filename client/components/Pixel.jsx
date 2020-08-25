import React from 'react'

class Pixel extends React.Component {
    state ={ 
        style:{
            height:'100px',
            width:'100px',
            backgroundColor:"cornflowerblue"
        }   
    }


clickHandler = () => {
    this.setState({
       style:{
            backgroundColor:"pink"
        }  
    })
  }


 render () {
  return (
    <>
    <div onClick={this.clickHandler} style={this.state.style} ></div>
    {/* <p>{this.state.backgroundColor}</p> */}
    </>
  )
}

}
export default Pixel
