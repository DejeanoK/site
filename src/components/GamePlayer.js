import React from 'react';

function GamePlayers(props){
	let team1 = props["player"].slice(0,5);
	let team2 = props["player"].slice(5,10);
	
	let p1 = team1.map( (p) => {
		return (	<div className="flex" key={p["summonerName"]}> 
						<img className = "rounded-full w-6 h-6" alt={p["championName"]} src = {require("../icons/lol/champs/"+p["championName"]+".png")}/>
						<div className = "text-white ml-1">{p["summonerName"]}</div>
					</div>
		)
		
	});
	let p2 = team2.map( (p) => {
		return (	<div className="flex" key={p["summonerName"]}> 
						<img className = "rounded-full w-6 h-6" alt={p["championName"]} src = {require("../icons/lol/champs/"+p["championName"]+".png")}/>
						<div className = "text-white ml-1">{p["summonerName"]}</div>
					</div>
		)
		
	});
	
	return (
		<div className ="flex grid grid-cols-2 gap-4 ml-10 w-max-content"> 
			<div className = "flex grid w-max-content">
				{p1}
			</div>
			<div className = "flex grid w-max-content">
				{p2}
			</div>
		</div>
	);
}


export default GamePlayers;