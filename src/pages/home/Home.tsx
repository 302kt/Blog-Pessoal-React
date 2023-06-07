import React, { useEffect } from 'react';
import './Home.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Imagem from '/images/testando.svg';
import ImgTemas from '/images/temas.svg';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

export default function Home() {

    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    useEffect(() => {
        if (token == "") {
            // alert("Você precisa estar logado")
            toast.error('Você precisa estar logado',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
            navigate("/login")

        }
    }, [token])
    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='box-cima'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold"}}>Seja bem vindo(a) ao DevCia!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to={'/postagens'} className="textDecoration">
                        <Box marginRight={1}>
                            {/* <ModalPostagem /> */}
                        </Box>
                        <Button id="button-p" variant="outlined">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={Imagem} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} className="postagens" style={{ backgroundColor: "white" }} >
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" className="box-meio">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Você também pode..</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Ver os nossos temas!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to={'/temas'} className='textDecoration'>
                        <Box marginRight={1}>
                        </Box>
                        <Button className='button-t' variant="outlined">Ver Temas</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={ImgTemas} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="box-cima">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Saiba mais</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Entre em contato com a desenvolvedora!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to={'/temas'} className='textDecoration'>
                        <Box marginRight={1}>
                        </Box>
                        <Button className='button-c' variant="outlined">Contato</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={ImgTemas} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            {/* <Grid container style={{ marginTop: "3px", marginBottom: "2px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid> */}
        </>)

};