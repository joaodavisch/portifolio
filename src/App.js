import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import logo from '../src/mookup/imagens-background/logo.svg';
import img1 from '../src/mookup/imagens-background/img1.svg';
import img2 from '../src/mookup/imagens-background/img2.svg';
import img3 from '../src/mookup/imagens-background/img3.svg';
import arrow from '../src/mookup/icones/ic-arrow.svg';



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
              <span className='text-6'>Programador frontend</span><br />
              <p className='text-7'>Você está procurando um programador para<span className='text-8'>criar seu sistema<br /> ou website?</span> Vamos criar um projeto juntos.</p><br />
              <button className='button1'> Me contrate <img src={arrow} className='arrow' /></button>
            </p>
            <img src={logo} className='img-1' />
          </div>
        </Container>
        <Container maxWidth="lg" style={{ backgroundColor: "#f9fafb" }}>
          <div className='div1'>
            <p className='subtitle2'>Serviços</p>
            <img src={img1} className='img-2' />
            <span>
              <span className='text-12'>
                Meus clientes sabem que eu sempre<br /> entregarei um serviço com a qualidade</span><br /> <span className='text-13'>máxima</span> <span className='text-14'>|</span><br /><br />
                <span className='text-17'>Cada projeto para mim é único, dando o meu máximo para entregar tudo<br /> aquilo que foi combinado. Com o foco pensado em cada projeto, assim<br /> prestando um serviço que será lembrado para sempre!</span><br />
              <br />
              Aplicações Mobile <br />
              Websites<br />
              Programação de protótipos<br />
              Performance<br />
            </span>
          </div>
        </Container>
        <Container maxWidth="lg" style={{ backgroundColor: "white" }}>
          <div className='div1'>
            <p>
              <p className='subtitle3'>Entre em contato comigo</p><br />
              <span className='text-12'>Vamos conversar e calcular um valor<br /> para o seu <span className='text-13'>projeto</span> <span className='text-14'>|</span></span><br /><br />
              <TextField id="standard-basic" label="Seu nome" variant="standard" className='input-1' /><br /><br />
              <TextField id="standard-basic" label="Seu email" variant="standard" className='input-1' /><br /><br />
              <TextField id="standard-basic" label="Assunto" variant="standard" className='input-1' /><br /><br />
              <TextField id="standard-basic" label="Mensagem" variant="standard" className='input-1' /><br /><br />
              <button className='button1'> Me contrate <img src={arrow} className='arrow' /></button>
            </p>
            <img src={img2} className='img-3' />
          </div>
          <div className='div4'>
            <div className='img-4'>
              <img src={img3} className='img-4-1' />
            </div>
            <div>
              <p className='text-4'>
                <h1 className='h1-3'>Mantenha contato</h1>
                <span className='text-15'>Brasil</span><br />
                <span className='text-16'>cassiano@scheidemantel.com.br</span><br />
                <span className='text-17'>(+55) 9999-9999</span>
              </p>
            </div>
          </div>
        </Container>
      </header>
    </div >
  );
}

export default App;
