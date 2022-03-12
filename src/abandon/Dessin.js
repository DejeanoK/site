import React from 'react';

import GuessBar from './GuessBar.js';

class Dessin extends React.Component {
	constructor(props){
		super(props)
		this.canvasRef = React.createRef();
		this.canvasDiv = React.createRef();
		this.x = 0;
		this.y = 0;
		this.canDraw = false;
		this.mousedownHandler = this.mousedownHandler.bind(this);
		this.mousemoveHandler = this.mousemoveHandler.bind(this);
		this.mouseupHandler = this.mouseupHandler.bind(this);
		this.drawLine = this.drawLine.bind(this);
		this.rect = null;
	}

	mousedownHandler(e){
			this.x = e.clientX - this.rect.left;
			this.y = e.clientY - this.rect.top;
			this.canDraw = true;
		}
	mousemoveHandler(e){
		if (this.canDraw == true) {
			this.drawLine( this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
			this.x = e.clientX - this.left;
			this.y = e.clientY - this.rect.top;
		}
	}
	mouseupHandler(e){
		if (this.canDraw == true) {
		  this.drawLine( this.x, this.y, e.clientX - this.rect.left, e.clientY - this.rect.top);
			this.x = 0;
			this.y = 0;
			this.canDraw = false;
		}
	}
	drawLine( x1, y1, x2, y2) {
		console.log("test")
		let context = this.canvasRef.current.getContext('2d');
		context.beginPath();
		context.strokeStyle = 'black';
		context.lineWidth = 1;
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
		context.closePath();
	}
	componentDidMount(){
		window.addEventListener("mouseup",this.mouseupHandler);
		window.onresize = () => { console.log("resize") };
		this.rect = this.canvasRef.current.getBoundingClientRect()
	}
	componentWillUnmount(){
		window.removEventListener("mouseup",this.mouseupHandler);
		window.onresize = () => { console.log("resize") };
	}
	render(){
		return(
			<React.Fragment>
				<div className="flex justify-center w-full">
					<div className="flex grid grid-cols-6 mt-20 auto-cols-min gap-1 w-4/5">
						<div className="w-full h-min col-span-6">
							<GuessBar/> 
						</div>
						<div className="col-span-1">
						</div>
						<div className="flex justify-center bg-white col-span-4 h-full" ref = {this.canvasDiv}>
							<canvas ref = {this.canvasRef} onMouseDown= {this.mousedownHandler} onMouseMove = {this.mousemoveHandler} >
							
							</canvas>
						</div> 
						<div className="col-span-1">
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dessin;