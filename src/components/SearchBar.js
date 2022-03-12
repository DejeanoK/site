import React from 'react'; 

import loupe from '../icons/loupe.svg';
import { Link } from "react-router-dom";


import '../css/font2.css'

function SearchBar(){
		const [error, setError] = React.useState(null);
		const [isLoaded, setIsLoaded] = React.useState(false);
		const [name, setName] = React.useState("");
		const [puuid, setPuuid] = React.useState("");
		let timer = null;
		
	const handleKey = (event) => {
		clearTimeout(timer)
		timer = setTimeout(function() {
			fetch("http://localhost:9000/puuid?pseudo=" + encodeURI(event.target.value))
			.then(response => response.json())
			.then((result) => {
				setIsLoaded(true);
				setName(result["name"]);
				setPuuid(result["puuid"]);
			},
			(error) => {
				setIsLoaded(false);
				setError(error);
			});
		
		}.bind(this), 1000)
	}
	if(error){
	return <div>Erreur : {error.message}</div>
	}
	return(
		<React.Fragment>
			<div className="flex bg-white p-2 rounded-lg ">
				<img alt ="loupe" src = {loupe}/>
				<div className="flex grow">
					<input className="outline-0 w-full ml-2 mr-2 " type="text" placeholder="Entrez un nom d'invocateur" onKeyUp = { handleKey }/>
				</div>
				<div className="flex justify-end bg-[#161618] rounded-lg items-center p-1 font2 text-white">
					<p>EUW</p>
				</div>
			</div>
			<div className="flex text-white">
			{isLoaded ? <div className="flex bg-cyan-300 mt-4 rounded-lg p-2"><Link to={"/league/" + encodeURI(name)} state =  {{puuid: puuid, pseudo:name}}>{name}</Link></div> : ""}
			</div>
		</React.Fragment>
	);
}

export default SearchBar;