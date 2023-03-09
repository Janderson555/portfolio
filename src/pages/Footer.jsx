import React from 'react';
import {
  gmailIcon
  , linkedinIcon
  , githubIcon
  , whatsappIcon
} from '../icons/Icons'

export default function Footer() {
  const githubLink = 'https://github.com/janderson555';
  const linkedinLink = 'https://www.linkedin.com/in/jandersonsm/';
  const whatzappLink = 'https://wa.me/+553197082820';
  const gmailLink = 'mailto:jandersonsmtech@gmail.com';
  return (
    <footer className="footer">
      <div className='icons-container'>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img className='svg-icons pointer' src={githubIcon} alt="html-icon" />
        </a>

        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img className='svg-icons pointer' src={linkedinIcon} alt="html-icon" />
        </a>

        <a href={gmailLink} target="_blank" rel="noopener noreferrer">
          <img className='svg-icons pointer' src={gmailIcon} alt="html-icon" />
        </a>

        <a href={whatzappLink} target="_blank" rel="noopener noreferrer">
          <img className='svg-icons pointer' src={whatsappIcon} alt="html-icon" />
        </a>
      </div>
    </footer>
  );
}
