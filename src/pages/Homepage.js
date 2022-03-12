import React from 'react';

import Header from '../components/Header.js';
import { Link } from "react-router-dom";

class Homepage extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header title = "Home"></Header>
				<div className="flex w-full justify-center items-center">
					<div className ="flex grid grid-cols-1 w-2/5 ">
						<div className ="flex justify-center text-white"><Link  to ="/wordle">Wordle </Link></div>
						<div className ="flex justify-center text-white"><Link to ="/search">League </Link></div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;