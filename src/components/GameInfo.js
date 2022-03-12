import React from 'react';
import vision from '../icons/vision.png';


class GameInfo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			kda : (props.kill + props.assist) / (props.death === 0 ? 1 : props.death)
		}
	}
	
	render(){
		return(
			<React.Fragment>
				<div className="flex grid grid-cols-2 items-center text-white justify-center gap-x-5 mt-5 mb-5 ml-10 w-fit">
					<div className="text-center"><span className="text-green-600">{this.props.kill}</span><span className="text-gray-500">{" / "}</span><span className="text-red-400">{this.props.death}</span><span className="text-gray-500">{" / "}</span><span className="text-yellow-500">{this.props.assist}</span></div>
					<div className="text-center text-gray-500"><span className="text-gray-300">{this.props.minion}</span> (<span className={(this.props.csmin >=8 ? "text-blue-400" : this.props.csmin >= 7 ? "text-green-400" : "text-red-400")}>{this.props.csmin.toFixed(2)}</span>) <span className="text-gray-300">CS</span></div>
					<div className="text-center"> <span className={(this.state.kda >= 3 ? "text-blue-400" : this.state.kda <= 1.3 ? "text-red-400" : "text-green-400")}>{this.state.kda.toFixed(2)}</span><span className="text-gray-300"> KDA</span> </div>
					<div className="flex text-center justify-center text-gray-300">  {this.props.vision} <img alt="ward" className="ml-2 w-6 h-6 rounded-lg" src = {vision}/></div>
				</div>
			</React.Fragment>
		);
	}
}

export default GameInfo;