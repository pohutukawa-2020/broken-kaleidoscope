import React from 'react'

import Pixel from './Pixel.jsx'

const App = () => { // this code generates an array which I have used to run the Pixel component in
   /* https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f */
    const filledArray = Array(10000).fill(<Pixel/>) // this is the event delegation
    return filledArray
}

export default App
