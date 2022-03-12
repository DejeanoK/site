import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import theme from './theme.js';

class Formulaire_Inscription extends React.Component {
	render(){
		return(
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<Container>
						<Grid container spacing={2} mt={2} alignItems="center">
							<Grid item xs={6}>
								<TextField required id="username" label = "Pseudo" fullWidth/>
							</Grid>
							<Grid item xs={6}>
								<TextField required id="password" label = "Mot de passe" fullWidth/>
							</Grid>
							<Grid item xs={12}>
								<TextField required id="mail" label = "Adresse mail" fullWidth/>
							</Grid>
							<Grid item xs = {4}/>
							<Grid item xs = {4}>
								<Button variant = "contained" fullWidth>S'inscrire</Button> 
							</Grid>	
						</Grid>
					</Container>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default Formulaire_Inscription;