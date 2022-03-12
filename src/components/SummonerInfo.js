import React from 'react'; 

class SummonnerInfo extends React.Component {
	
	render(){
		return(
			<React.Fragment>
				<div className="flex grid grid-cols-2 items-center auto-cols-min mt-3 mb-3 w-fit">
					<div> <img alt="champ" src = {require("../icons/lol/summs/"+this.props.summ1+".png")} className="w-12 h-12 rounded-lg"/></div>
					<div> <img alt="champ" src = {require("../icons/lol/runes/"+this.props.mainMastery+".png")} className="w-12 h-12"/></div>
					<div> <img alt="champ" src = {require("../icons/lol/summs/"+this.props.summ2+".png")} className="w-12 h-12 rounded-lg"/></div>
					<div> <img alt="champ" src = {require("../icons/lol/runes/"+this.props.otherMastery+".png")} className="w-12 h-12 p-2"/></div>
				</div>
			</React.Fragment>
		);
	}
}

export default SummonnerInfo;