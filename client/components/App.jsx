import React from 'react'

import Pixel from './Pixel'

const App = () => {           // using an array of components  // I don't really understand this length part
  return (
    Array.from({length: 10000}, (item, i) => <Pixel key={i}/>)   
  )
}
// I think the above is saying for each iteration of the mapping over the array, 
// return <Pixel /> (for each 'item' in the array)
// and assign the Pixel a unique key which is the index of that iteration

export default App
