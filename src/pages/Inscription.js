import React from 'react';

import Header from '../components/Header.js';
import Formulaire_Inscription from '../components/Formulaire_Inscription.js';

class Inscription extends React.Component {
	render(){
		return(
			<React.Fragment>
				<Header></Header>
				<Formulaire_Inscription></Formulaire_Inscription>
			</React.Fragment>
		);
	}
}

export default Inscription;