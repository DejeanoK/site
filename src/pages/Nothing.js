import React from 'react';

import Header from '../components/Header.js';

class Homepage extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header></Header>
				<div className="text-white"> Nothing here </div>
			</React.Fragment>
		);
	}
}

export default Homepage;