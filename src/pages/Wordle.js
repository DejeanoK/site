import React from 'react';

import Header from '../components/Header.js';
import Motus from '../components/Motus.js';

class Wordle extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header title="Wordle"></Header>
				<Motus></Motus>
			</React.Fragment>
		);
	}
}

export default Wordle;