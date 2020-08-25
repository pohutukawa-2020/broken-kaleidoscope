import React from 'react'

import Pixel from './Pixel.jsx'

const App = () => {
   /* https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f */
    const filledArray = Array(10000).fill(<Pixel/>)
    return filledArray
}

export default App
