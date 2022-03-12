import React from 'react';

import menuIcon from '../icons/menu.svg'
import { Link } from "react-router-dom";

import '../css/header.css';

class Header extends React.Component {
	render(){	
		return(
			<React.Fragment>
				<div className="flex grid grid-cols-3 bg-[#161618] border-b-2 p-2 border-[#2F2F34] text-white">
					<div className="flex items-center justify-start" >
						<img alt="menu icon" src ={menuIcon} width="25" height="25" className="mr-4"/>
							<Link to ="/" className="sm:flex hidden"> PADNOM </Link>
					</div>
					<div className="flex items-center justify-center header-title">
						{this.props.title}
					</div>
					<div className="flex items-center justify-end">
						????????
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;