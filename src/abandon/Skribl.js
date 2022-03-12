import React from 'react';

import Header from '../components/Header.js';
import Dessin from '../components/Dessin.js';

class Skribl extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header title="Skribbl"></Header>
				<Dessin></Dessin>
				
				
			</React.Fragment>
		);
	}
}

export default Skribl;