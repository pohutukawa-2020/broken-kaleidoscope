import React from 'react';

const randomHexColor = () =>
	`#${Math.floor(Math.random() * 0x1000000)
		.toString(16)
		.padStart(6, 0)}`;

class Pixel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				height: '100px',
				width: '100px',
				backgroundColor: randomHexColor(),
			},
		};
	}
	clickHandler = (evt) => {
		this.setState({
			style: {
				backgroundColor: randomHexColor(),
			},
		});
	};

	render() {
		return (
			<>
				<div style={this.state.style} onClick={this.clickHandler}></div>
			</>
		);
	}
}

export default Pixel;
