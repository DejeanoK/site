import React from 'react';

import SearchBar from '../components/SearchBar.js';
import Header from '../components/Header.js';

class Ligue extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header title={"LoL Tracker"}/>
				<div className="flex justify-center">
					<div className="m-4 w-4/5">
						<SearchBar/>
						
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Ligue;