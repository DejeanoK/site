import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Wordle from './pages/Wordle.js';
import ProfileLigue from './pages/ProfileLigue.js';
import Nothing from './pages/Nothing.js';
import Ligue from './pages/Ligue.js';

import './css/index.css';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element ={<App />} />
				<Route path="/Wordle" element = {<Wordle />} />
				<Route path="/Search" element = {<Ligue />}/>
				<Route path="/League/:name" element = {<ProfileLigue/>} />
				<Route path ="*" element = {<Nothing />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

