import React from 'react';
import Footer from './Footer';
import Header from './Header.js';
import {
  htmlIcon, jsIcon, cssIcon, nodeIcon, mysqlIcon, mongodbIcon,
  typeScriptIcon, reactIcon, sequelizeIcon
} from '../icons/Icons';

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className='background'>
        <p className="text-abount">
          Desenvolvedor Full Stack back-end
          Bio: Olá meu nome é Janderson, sou um intusiasta da tecnologia e astrologia, adoro aprender coisas novas desde programação ou qualquer outra coisa,
          o importante é sempre ter aprendido algo de novo no fim do dia ou ter me aprofundando em algo que já conheço.
        </p>
        <div className='stack-container'>
          <div className='stacks-container-title'><h1>Stacks</h1></div>
          <div className='stack-iten'>
            <img className='stack-icon' src={htmlIcon} alt="html-icon" />
            <p className='stack-names'>HTML</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={jsIcon} alt="js-icon"></img>
            <p className='stack-names'>JavaScript</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={cssIcon} alt="css-icon"></img>
            <p className='stack-names'>CSS</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={nodeIcon} alt="node-icon"></img>
            <p className='stack-names'>Node</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={reactIcon} alt="react-icon"></img>
            <p className='stack-names'>React</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={mysqlIcon} alt="mysql-icon"></img>
            <p className='stack-names'>MySql</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={mysqlIcon} alt="python-icon"></img>
            <p className='stack-names'>Python</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={mongodbIcon} alt="mongodb-icon"></img>
            <p className='stack-names'>Mongodb</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={typeScriptIcon} alt="typescript-icon"></img>
            <p className='stack-names'>TypeScript</p>
          </div>
          <div className='stack-iten'>
            <img className='stack-icon' src={sequelizeIcon} alt="sequelize-icon"></img>
            <p className='stack-names'>Sequelize</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
