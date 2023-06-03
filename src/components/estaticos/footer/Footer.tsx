import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

export default function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    var footerComponent;
    if (token !== '') {
        footerComponent =

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='footer' style={{height: "80px" }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/302kt" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/katarina-pereira-freire-30080b181/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='footer' style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.linkedin.com/in/katarina-pereira-freire-30080b181/">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white", textDecoration:"none" }} align="center">Katarina Pereira Freire</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
};