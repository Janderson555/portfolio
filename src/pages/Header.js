import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/pages/login.css';

export default function Header() {
  const navigate = useNavigate();

  const toggleTheme = () => {
    const button = document.querySelector('.toggle-button');
    const footerIcons = document.querySelectorAll('.footer-icon');
    document.body.classList.toggle("theme-dark");
    button.classList.toggle('active')
    
    footerIcons.forEach((e) => {
      e.classList.toggle('active')
    })
  }

  return (
    <header className="header">
      <p className="header-text pointer" onClick={() => navigate('/about')}>SOBRE</p>
      <p className="header-text pointer" onClick={() => navigate('/projects')}>PROJETOS</p>
      <p className="header-text pointer" onClick={() => navigate('/contact')}>CONTATO</p>
      <button class="toggle-button pointer" onClickCapture={toggleTheme}>THEME</button>
    </header>
  );
}
