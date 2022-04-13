import React from 'react';
import './App.css';
import Container from '@mui/material/Container';

import logo from '../src/mookup/imagens-background/logo.svg';
import img1 from '../src/mookup/imagens-background/img1.svg';
import img2 from '../src/mookup/imagens-background/img2.svg';
import img3 from '../src/mookup/imagens-background/img3.svg';



function App() {

  return (
      <div className="App">
        <header className="App-header">
        <Container maxWidth="lg" style={{ backgroundColor: "white" }}>
          <p className='text-1'>
            <p>Me ligue (+55) 9999-9999</p>
            <p>cassiano@scheidemantel.com.br</p>
            <p>Ver Linkedin</p>
            <p>Vamos conversar</p>
          </p>
          <div className='div1'>
            <p>
              <p className='text-2'>Sobre eu</p>
              <h1 className='h1-1'> Olá,<br />
                me chamo</h1><h1 className='h1-2'>Cassiano</h1><br />
              Programador frontend<br /><br />
              Você está procurando um programador para criar seu sistema<br /> ou website? Vamos criar um projeto juntos.<br />
              Me contrate
            </p>
            <img src={logo} />
          </div>
          <div className='div1'>
            <img src={img1} />
            <p>
              Serviços
              Meus clientes sabem que eu sempre<br /> entregarei um serviço com a qualidade<br /> máxima |<br /><br />
              Cada projeto para mim é único, dando o meu máximo para entregar tudo<br /> aquilo que foi combinado. Com o foco pensado em cada projeto, assim<br /> prestando um serviço que será lembrado para sempre!<br />
              <br />
              Aplicações Mobile
              Websites
              Programação de protótipos
              Performance
            </p></div>
          <div className='div1'>
            <p>
              Entre em contato comigo<br />
              Vamos conversar e calcular um valor para o seu projeto |<br />
              Seu nome
              Seu email
              Assunto
              Mensagem
            </p>
            <img src={img2} />
          </div>
          <div className='div4'>
            <img src={img3} /><p className='text-4'>
              Mantenha contato<br /><br />
              Brasil<br />
              cassiano@scheidemantel.com.br<br />
              (+55) 9999-9999
            </p>
          </div>
          </Container>
        </header>
      </div>
  );
}

export default App;
