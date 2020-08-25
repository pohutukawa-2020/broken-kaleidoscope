import React from 'react';

const randomHexColor = () =>
	`#${Math.floor(Math.random() * 0x1000000)
		.toString(16)
		.padStart(6, 0)}`;

class Pixel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '100px',
			width: '100px',
			backgroundColor: randomHexColor(),
		};
	}
	clickHandler = (evt) => {
		this.setState({
			backgroundColor: randomHexColor(),
		});
	};
	onDoubleClick = () => {
		this.setState({
			backgroundColor: 'white',
		});
	};
	onContextMenu = (evt) => {
		evt.preventDefault();
		this.setState({
			backgroundColor: 'black',
		});
	};
	onDragEnter = () => {
		this.setState({
			backgroundColor: 'yellow',
		});
	};

	render() {
		return (
			<>
				<div
					style={this.state}
					onClick={this.clickHandler}
					onDoubleClick={this.onDoubleClick}
					onContextMenu={this.onContextMenu}
					onDragEnter={this.onDragEnter}
				></div>
			</>
		);
	}
}

export default Pixel;
