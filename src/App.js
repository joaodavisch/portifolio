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
              <p className='subtitle1'>Sobre eu</p>
              <h1 className='h1-1'> Olá,<br />
                me chamo</h1><h1 className='h1-2'>João Davi</h1>
              <p className='text-6'>Programador frontend</p>
              <p className='text-7'>Você está procurando um programador para<div className='text-8'>criar seu sistema<br /> ou website?</div> Vamos criar um projeto juntos.</p><br />
              <button className='button1'> Me contrate</button>
            </p>
            <img src={logo} className='img-1' />
          </div>
          <div className='div1'>
          <p className='subtitle2'>Serviços</p>
            <img src={img1} />
            <p>
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
            <p className='subtitle3'>Entre em contato comigo</p><br />
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
