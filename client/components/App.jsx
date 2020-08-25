import React from "react"
import Pixel from "./Pixel.jsx"

class App extends React.Component {
  render() {
    return <>{Array.from(Array(1000), () => Array(1000).fill(<Pixel />))}</>
  }
}

export default App
