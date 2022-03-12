import React from 'react';
import '../css/Wordle.css'

import Case from './Case.js';

const attempt_max = 6;
const word_size = 5;
const legalChars = "abcdefghijklmnopqrstuvwxyz";

class Quiz extends React.Component {
	constructor(props){
		super(props)
		
		var grid = new Array(attempt_max);
		for(let i = 0; i < attempt_max; ++i){
			grid[i] = new Array(word_size);
			for(let j = 0; j < word_size; ++j){
				grid[i][j] = '';
			}
		}
		this.keyHandler = this.keyHandler.bind(this)
		this.state = {
			grid : grid,
			attempt : 0,
			currentChar : 0,
		}
	}
	keyHandler(event){
		let grid = this.state.grid
		let currentChar = this.state.currentChar
		let attempt = this.state.attempt;
		
		if(legalChars.includes(event.key) && currentChar<word_size){
			grid[attempt][currentChar] = event.key;
			++currentChar;
		}
		else if(event.key === "Enter" && currentChar === word_size){
			let guess = true;
			for(let i = 0; i < word_size; ++i){
				if(grid[attempt][i] === this.state.word[i]){}
				else if(this.state.word.includes(grid[attempt][i])){
					guess = false;
				}
				else {
					guess = false;
				}
			}
			if(guess){
				window.removeEventListener("keydown",this.keyHandler);
			}
			++attempt;
			currentChar = 0;
		}
		else if(event.key === "Backspace"&&currentChar > 0){
			currentChar = Math.max(0,currentChar-1);
			grid[attempt][currentChar] = '';
		}
		if(attempt === 6){
			window.removeEventListener("keydown",this.keyHandler);
		}
		this.setState({
			grid : grid,
			attempt : attempt,
			currentChar : currentChar,
		});
	}
	componentDidMount(){
		window.addEventListener("keydown",this.keyHandler);
		fetch("http://localhost:9000/word")
		.then(response => response.text())
		.then((word) => {
			this.setState ({
				word : word
			})
			
		},
		(err) => {
			console.log(err)
		});
		
		
	}
	componentWillUnmount(){
		window.removeEventListener("keydown",this.keyHandler);
	}

	render(){
		let gridItem = this.state.grid.map( (name,index1) => {
			return (this.state.grid[0].map( (name,index2) => {return <Case key = {index1 + " " + index2} charac = {this.state.grid[index1][index2]} word = {this.state.word} confirmed = {this.state.attempt > index1} pos = {index2} ></Case>}))
		});
		return(
			<React.Fragment>
				<div className="flex justify-center mt-20">
					<div className = "grid grid-cols-5 gap-1" >
						{gridItem}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Quiz;