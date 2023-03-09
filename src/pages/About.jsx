import React from 'react';
import Footer from './Footer';
import Stacks from './Stacks';
import Header from './Header';
import imageProfile from '../image/janderson-image.png';

export default function About() {
  return (
    <div>
      <Header />
      <div className='background'>
        <div className='profile-container'>
          <div className='profile'>
            <img className='profile-image' src={imageProfile} alt=""></img>
            <p className="profile-text">
              Desenvolvedor Full Stack back-end
            </p>
          </div>
          <div className='about-text-container'>
            <h1 className='about-title'>Olá meu nome é Janderson 👋</h1>
            <p className='about-text'>
              Sou um profissional apaixonado por tecnologia, com experiência
              em encontrar soluções inovadoras para desafios tecnológicos. Meu foco
              principal é tornar a vida das pessoas mais fácil e eficiente, criando
              soluções práticas e inteligentes. Além de ter habilidades analíticas,
              sou eficiente em encontrar potenciais problemas futuros. Como alguém que
              está sempre procurando aprender, gosto de estudar sobre tópicos como
              tecnologia, inteligência artificial, UI e UX, e uma paixão que tenho por
              astrologia. Se você quiser trabalhar comigo ou conversar sobre tecnologia ou trocar ideias,
              estou sempre aberto a um bom café ou chá!
            </p>
          </div>
        </div>
        <Stacks />
      </div>
      <Footer />
    </div>
  );
}
