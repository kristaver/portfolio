import React from 'react'
import github from '../github64.png';
import Style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={Style.Footer}>
      <a
        className="App-link"
        href="https://github.com/Kristaver"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} className="github-logo" alt="github logo" />
      </a>
    </footer>
  )
}
