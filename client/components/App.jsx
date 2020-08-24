import React from 'react'

import Pixel from './Pixel'

const App = () => {
  const pixelArray = Array(200000).fill(<Pixel />)
  return pixelArray
}

export default App
