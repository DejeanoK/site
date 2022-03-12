import React from 'react';

import '../css/draw-bar.css';
import chronoIcon from '../icons/chrono.svg';

class GuessBar extends React.Component {
	render(){
		return(
			<React.Fragment>
				<div className=" flex grid grid-cols-3 justify-center bg-[#EDEDF1] w-full rounded-t-xl ">
					<div className="flex items-center justify-start">
						<div className="flex justify-center items-center rounded-full text-2xl ml-3">
							<img src ={chronoIcon} className="w-10 h-10 p-1 lg:flex hidden"/>
							50
						</div>
					</div>
					<div className="flex items-center justify-center word-to-guess ">
						Poisson rouge
					</div>
					<div className="flex items-center justify-end">
					
					</div>
					
				</div>
			</React.Fragment>
		);
	}
}

export default GuessBar;