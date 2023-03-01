import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const pathPage = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    function navigateAndTabIndicator() {
      const oldActive = document.querySelector('.header-button.active');
      oldActive.classList.remove('active')

      const path = window.location.pathname.replace('/', '')
      const newActive = document.querySelector(`#${path}`)
      newActive.classList.add('active')
    }
    navigateAndTabIndicator()

  }, [pathPage])

  return (
    <header className="header">
      <p className="header-button active pointer" id="about" onClick={() => navigate('/about')}>SOBRE</p>
      <p className="header-button pointer" id="projects" onClick={() => navigate('/projects')}>PROJETOS</p>
      <p className="header-button pointer" id="contact" onClick={() => navigate('/contact')}>CONTATO</p>
      {/* <button class="toggle-button pointer" >THEME</button> */}
    </header>
  );
}
