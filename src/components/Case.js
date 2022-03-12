import React from 'react';

import '../css/Wordle.css'

class Case extends React.Component {
	constructor(props){
		super(props);
		this.ref = React.createRef();
	}
	
	
	render(){
		if(this.props.confirmed){
			let classList = this.ref.current.classList
			classList.remove("border-2");
			if(this.props.word[this.props.pos] === this.props.charac){
				classList.add("good-letter");
			}
			else if(this.props.word.includes(this.props.charac)){
				classList.add("half-letter");
			}
			else{
				classList.add("bad-letter");
			}
		}
		return(
			<React.Fragment>
				<div ref = {this.ref} className={"case w-[7vh] h-[7vh] text-white border-2 border-[#454549] flex content-center items-center justify-center"}> { this.props.charac } </div>
			</React.Fragment>
		);
	}
}

export default Case;