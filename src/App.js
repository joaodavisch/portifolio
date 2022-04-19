import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

import logo from '../src/mookup/imagens-background/logo.svg';
import img1 from '../src/mookup/imagens-background/img1.svg';
import img2 from '../src/mookup/imagens-background/img2.svg';
import img3 from '../src/mookup/imagens-background/img3.svg';
import arrow from '../src/mookup/icones/ic-arrow.svg';
import newspaper from '../src/mookup/icones/ic-programacao-prototipos.svg';
import websites from '../src/mookup/icones/ic-websites.svg';
import phone from '../src/mookup/icones/ic-phone.svg';
import mobile from '../src/mookup/icones/ic-mobile.svg';



function App() {

  const { register, handleSubmit, formState: { erros } } = useForm()

  const addPost = data => console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="lg" style={{ backgroundColor: "white" }}>
          <p className='textInfo'>
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
              <span className='textFrontend'>Programador frontend</span><br />
              <p className='textWebsite'>Você está procurando um programador para<span className='textSistema'>criar seu sistema<br /> ou website?</span> Vamos criar um projeto juntos.</p><br />
              <button className='button1'> Me contrate <img src={arrow} className='arrow' /></button>
            </p>
            <img src={logo} className='img-1' />
          </div>
        </Container>
        <div className='div2'>
          <Container maxWidth="lg" style={{ backgroundColor: "#f9fafb" }}>
            <div className='div1'>
              <p className='subtitle2'>Serviços</p>
              <img src={img1} className='img-2' />
              <span>
                <span className='textClientes'>
                  Meus clientes sabem que eu sempre<br /> entregarei um serviço com a qualidade</span><br /> <span className='text-13'>máxima</span> <span className='text-14'>|</span><br /><br />
                <span className='textProjeto'>Cada projeto para mim é único, dando o meu máximo para entregar tudo<br /> aquilo que foi combinado. Com o foco pensado em cada projeto, assim<br /> prestando um serviço que será lembrado para sempre!</span><br />
                <br />
                <span className='textMobile'><span className='mobileBackgroud'><img src={mobile} className='mobile' /></span>Aplicações Mobile <img src={arrow} className='arrow' /> <span className='mobileBackgroud'><img src={mobile} className='mobile' /></span>Websites <img src={arrow} className='arrow' /><br />
                  <span className='mobileBackgroud'><img src={mobile} className='mobile' /></span>Programação de protótipos <img src={arrow} className='arrow' /> <span className='mobileBackgroud'><img src={mobile} className='mobile' /></span>Performance <img src={arrow} className='arrow' /><br /></span>
              </span>
            </div>
          </Container>
        </div>
        <Container maxWidth="lg" style={{ backgroundColor: "white" }}>
          <div className='div1'>
            <p>
              <p className='subtitle3'>Entre em contato comigo</p><br />
              <span className='textConversar'>Vamos conversar e calcular um valor<br /> para o seu <span className='textProject'>projeto</span> <span className='textBarra'>|</span></span><br /><br />

              <form onSubmit={handleSubmit(addPost)}>
                <TextField id="standard-basic" label="Seu nome" variant="standard" className='input-1' {...register("name")} /><br /><br />
                <TextField id="standard-basic" label="Seu email" variant="standard" className='input-1' {...register("email")} /><br /><br />
                <TextField id="standard-basic" label="Assunto" variant="standard" className='input-1' {...register("subject")} /><br /><br />
                <TextField id="standard-basic" label="Mensagem" variant="standard" className='input-1' {...register("message")} /><br /><br />
                <button type='submit' className='button1'> Me contrate <img src={arrow} className='arrow' /></button>
              </form>

            </p>
            <img src={img2} className='img-3' />
          </div>
          <div className='div4'>
            <div className='img-4'>
              <img src={img3} className='img-4-1' />
            </div>
            <div>
              <p className='textInfoFoot'>
                <h1 className='h1-3'>Mantenha contato</h1>
                <span className='textBrasil'>Brasil</span><br />
                <span className='textEmail'>joaodavi@scheidemantel.com.br</span><br />
                <span className='textNumero'>(+55) 9999-9999</span>
              </p>
            </div>
          </div>
        </Container>
      </header>
    </div >
  );
}

export default App;
