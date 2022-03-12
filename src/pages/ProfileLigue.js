import React from 'react';

import Match from '../components/Match.js';
import Header from '../components/Header.js';

import {useLocation} from 'react-router-dom';

import '../css/font2.css'

function ProfileLigue(){
	const [error, setError] = React.useState(null)
	const [isLoaded, setIsLoaded] = React.useState(false)
	const [data, setData] = React.useState(null);
	let location = useLocation();
	
	React.useEffect( () => {
		fetch("http://localhost:9000/matchs?puuid=" + location["state"]["puuid"])
		.then(mresponse => mresponse.json())
		.then((mresult) => {
			setIsLoaded(true);
			setData(mresult)
			
		},
		(error) => {
			setIsLoaded(false);
			setError(error);
		});
	}, [])
	let matches = null
	if(data){
		matches = data.map( id => {
			return (<Match key = {id} matchid = {id} puuid = {location["state"]["puuid"]}/>);
		})
	}
	if(error) {
		return <div>Erreur : {error.message} </div>
	}
	else if(!isLoaded){
		return (
			<div> Chargement... </div>
		);
	}
	else {
		return(
			<React.Fragment>
				<Header title={"LoL Tracker"}/>
				<div className="flex justify-center mt-5 mb-2 text-white font2">
					{location["state"]["pseudo"]}
					</div>
				<div className="flex w-full h-full justify-center">
					<div className="flex grid grid-cols-1 gap-2 justify-center m-4">
						{matches}	
					</div>
				</div>
			</React.Fragment>
		);
	}

}


export default ProfileLigue;