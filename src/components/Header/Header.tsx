import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <div className='header-div'>
      <div className='logo-div'>
        <img src='assets/img/kv-logo.png' />
      </div>
    </div>
  );
};

export default Header;
