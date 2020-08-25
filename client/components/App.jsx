import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return Array.from({ length: 100000 }, (v, i) => <Pixel key={i}/>)
}

export default App
