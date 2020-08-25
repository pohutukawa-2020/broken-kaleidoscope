import React from 'react';

import Pixel from './Pixel';

const App = () => {
	return <>{Array.from(Array(1000), () => Array(1000).fill(<Pixel />))}</>;
};

export default App;
