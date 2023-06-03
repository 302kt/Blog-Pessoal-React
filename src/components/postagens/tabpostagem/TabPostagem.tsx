import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar  className="tab"  position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h4" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='sobreNos'>
          <p>
                    Olá, tudo bem? Eu sou a Katarina e é um prazer te ter aqui!
                </p>
                <p>
                    Tenho 22 anos, moro em São Paulo com minhas duas gatinhas, Marta e Mariana. Amo sair com meus
                    amigos, seja para viajar ou simplesmente sentar e bater um papo, amo viajar e tenho o sonho de fazer
                    uma viagem internacional.
                </p>
                <p>
                    Atualmente, sou aluna de desenvolvimento web Java FullStack através da Generation, uma ONG
                    responsável
                    por um dos melhores bootcamps do Brasil, e graças a essa oportunidade incrível estou desenvolvendo
                    meus
                    conhecimentos em back-end e front-end, aprendendo JavaScript, CSS, HTML, Java, Spring boot, MySQL,
                    git e github, além disso, durante todo bootcamp simulamos um ambiente de trabalho, então desenvolvi
                    alguns projetos individuais e em equipe e aprendi a fazer entregas de qualidade utilizando o SCRUM.
                    Em paralelo, também estou em processo de desenvolver meu inglês.
                </p>
                <p>
                    Eu estou em transição de carreira, mas trabalhava em uma empresa de tecnologia em
                    prevenção a fraude, e tive a oportunidade de desenvolver algumas habilidades, como comunicação,
                    trabalho em equipe, proatividade, visão de processos orientados ao negócio e entre outras, graças a
                    minha trajetória dentro da organização, que sempre foi de muito crescimento. E trago essas
                    habilidades para minhas próximas experiências profissionais.
                </p>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;