import React from 'react';

class ChampIcon extends React.Component {
	
	render(){
		return(
			<React.Fragment>
				<div className="w-fit">
					<img alt="champ"src = {require("../icons/lol/champs/"+this.props.name+".png")} className={"w-30 h-30 rounded-full border-4 m-2" + (this.props.victory ? " border-green-600 " : " border-red-600")}/>
				</div>
			</React.Fragment>
		);
	}
}

export default ChampIcon;