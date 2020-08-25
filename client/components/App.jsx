import React from 'react'

import Pixel from './Pixel'

const App = () => {           // using an array of components
  return (
    [
      <Pixel />,
      <Pixel />,
      <Pixel />,
      <Pixel />,
      <Pixel />
    ]
  )
}

export default App
