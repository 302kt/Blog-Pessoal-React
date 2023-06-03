import React, {useState, useEffect, ChangeEvent} from 'react';
import './CadastroUusuario.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        //alert('Usuario cadastrado com sucesso')
        toast.success('Usuario cadastrado com sucesso',{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:false,
            theme:"colored",
            progress:undefined
        })
        }else{
            //alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
        }
    }
    return (
        <>
            <Grid  className='cadastro' container direction='row' justifyContent='center' alignItems='center'>
                <Grid className='formCadastro' alignItems='center' xs={5}>
                    <Box paddingX={5}>
                        <form onSubmit={onSubmit}>
                            <Typography  variant='h3' gutterBottom component='h3' align='center'>
                                Cadastre-se
                            </Typography>
                            <TextField value={user.nome}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField value={user.usuario}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={user.foto}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Imagem' variant='outlined' name='foto' margin='normal' fullWidth />
                            <TextField value={user.senha}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField value={confirmarSenha}  onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='outlined' disableElevation style={{ color: "#4085aad0", fontWeight: "bolder" }} >Cadastrar</Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Já tem uma conta?</Typography>
                            </Box>
                            <Link to='/login'>
                                <Typography variant='subtitle1' gutterBottom align='center'>Faça login aqui!</Typography>
                            </Link>
                        </Box>

                    </Box>

                </Grid>
                <Grid xs={6} className='imagemCadastro'> </Grid>


            </Grid>


        </>
    );
};