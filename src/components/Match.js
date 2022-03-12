import React from 'react';

import ChampIcon from './ChampIcon.js';
import SummonerInfo from './SummonerInfo.js';
import GameInfo from './GameInfo.js';
import ChampItems from './ChampItems.js';
import GamePlayer from './GamePlayer.js';

class Case extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentPlayer : 0,
			infos : [],
			loaded : false,
		};
		
	}
	
	componentDidMount(){
		fetch("http://localhost:9000/match?matchid=" + this.props.matchid)
		.then(response => response.json())
		.then((match) => {
			this.setState({
				infos : match,
				currentPlayer : match["metadata"]["participants"].indexOf(this.props.puuid),
				loaded : true,
			})
			
		},
		(err) => {
			
		});
	}
	render(){
		if(this.state.loaded){
			let summoner = this.state.infos["info"]["participants"][this.state.currentPlayer]
			//let participant = this.state.infos["info"].map(
			return(
				<React.Fragment>
				<div className ="flex rounded-lg bg-[#2B2B2E] m-2 xl:w-[80rem] w-4/5">
					<ChampIcon name = {summoner["championName"]} victory = {summoner["win"]}/>
					<SummonerInfo summ1 = {summoner["summoner1Id"]} summ2 = {summoner["summoner2Id"]} mainMastery = {summoner["perks"]["styles"][0]["selections"][0]["perk"]} otherMastery = {summoner["perks"]["styles"][1]["style"]}/>
					<GameInfo kill = {summoner["kills"]} death = {summoner["deaths"]} assist = {summoner["assists"]} minion = {summoner["neutralMinionsKilled"] + summoner["totalMinionsKilled"]} csmin = {(summoner["neutralMinionsKilled"] + summoner["totalMinionsKilled"])/(this.state.infos["info"]["gameDuration"]/60)} vision = {summoner["visionScore"]}/>
					<ChampItems items = {[summoner["item0"],summoner["item1"],summoner["item2"],summoner["item3"],summoner["item4"],summoner["item5"]]} trinket = {summoner["item6"]} matchid = {this.props.matchid}/>
					<GamePlayer player = {this.state.infos["info"]["participants"]}/>
				</div>
				</React.Fragment>
			);
		}
		else {
			return(
				<div>
					Chargement...
				</div>
			);
		}
	}
}

export default Case;