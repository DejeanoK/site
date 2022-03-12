import React from 'react';

class Quiz extends React.Component {
	
	constructor(props){
		super(props)
		this.handler = this.handler.bind(this)
		this.inputRef = React.createRef();
		}
	handler(event){
		this.inputRef.current.classList.remove("hidden");
		
	}
	
	render(){
		return(
			<React.Fragment>
			<div className="flex justify-center items-center">
				<div className="flex grid grid-cols-1 w-2/5">
					<div className ="flex items-center"><input type="checkbox"/> <div className="ml-2 text-white"> Reponse A </div></div>
					<div className ="flex items-center"><input type="checkbox"/> <div className="ml-2 text-white"> Reponse B </div></div>
					<div className ="flex items-center"><input type="checkbox"/> <div className="ml-2 text-white"> Reponse C </div></div>
					<div className ="flex items-center"><input type="checkbox"/> <div className="ml-2 text-white"> Reponse D </div></div>
				</div>
				<button className="bg-blue-500 w-16 h-10 rounded-lg text-white"  onClick={this.handler}> Valider </button>
			</div>
			<div className="text-white hidden" ref={this.inputRef}>
				Réponse : C
			</div>
			</React.Fragment>
		);
	}
}

export default Quiz;