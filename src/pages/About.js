import React from 'react';
import Footer from './Footer';
import Header from './Header.js';
import Stacks from './Stacks';
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
            <h1>Olá meu nome é Janderson</h1>
            <p className='about-text-profile'>
              sou um intusiasta da tecnologia e astrologia, gosto de aprender coisas novas desde programação,
              tecnologia, fisica e cultura, viso compartilhar meus conhecimentos com os demais assim criando um circulo de aprendizado.
              sou um intusiasta da tecnologia e astrologia, gosto de aprender coisas novas desde programação,
              tecnologia, fisica e cultura, viso compartilhar meus conhecimentos com os demais assim criando um circulo de aprendizado.
              tecnologia, fisica e cultura, viso compartilhar meus conhecimentos com os demais assim criando um circulo de aprendizado.
            </p>
          </div>
        </div>
        <Stacks />
      </div>
      <Footer />
    </div>
  );
}
