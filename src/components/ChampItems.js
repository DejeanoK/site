import React from 'react';

class ChampItems extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			items : props.items,
			
		}
	}
	
	render(){
		
		return(
			<React.Fragment>
			<div className="flex items-center justify-center ml-10 w-fit">
				<div className="flex grid grid-cols-3 items-center justify-center ml-10 gap-1">
					{this.state.items.map( (i, index) => {
						if(i !== 0){
							return <div key = {"items-"+i+ "_" +index + "_" +this.props.matchid}> <img className="rounded-lg" alt ={"items-" + i}  src={require("../icons/lol/items/"+i+".png")}/> </div>
						}
						else {
							return <div className="w-full h-full" key = {"items-"+index}> </div>
						}
					})}
				</div>
				<div className="ml-1"> 
					<img className="rounded-lg" alt = "trinket" src={require("../icons/lol/items/"+this.props.trinket+".png")}/>
				</div>
			</div>
			</React.Fragment>
		);
	}
}

export default ChampItems;