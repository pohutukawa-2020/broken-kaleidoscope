import React from 'react';

class Pixel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				height: '300px',
				width: '300px',
				backgroundColor: 'pink',
			},
		};
	}

	render() {
		return (
			<>
				<div style={this.state.style}></div>
			</>
		);
	}
}

export default Pixel;
