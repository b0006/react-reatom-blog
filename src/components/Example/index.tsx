import React from 'react';

import logo from './assets/logo.svg';
import './Example.scss';

const Example: React.FC = () => {
  return (
    <div className="Example">
      <header className="Example-header">
        <img src={logo} className="Example-logo" alt="logo" />
        <p>Edit Example.tsx and save to reload.</p>
        <a className="Example-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Example;
