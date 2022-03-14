import React from 'react';
import '../css/Wordle.css'

function Clavier(props) {
	let lines = ["azertyuiop","qsdfghjklm","wxcvbn"];
	return(
		<React.Fragment>
		{lines.map( (l) => {
			let temp = []
			for(let c of l){
				temp.push(<div className={"font1 flex w-[7vh] h-[7vh] rounded-full border-4 items-center justify-center m-1 "+props.keyboard[c]} key = {c}>{c.toUpperCase()}</div>)
			}
			return <div className="flex justify-center text-white" key = {l}>{temp}</div>;
		})
		}
		</React.Fragment>
	);
}

export default Clavier;