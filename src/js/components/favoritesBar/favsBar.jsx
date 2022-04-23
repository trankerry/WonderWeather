import React from 'react';

export default class FavsBar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg fixed-top justify-content-between bg-dark'>
        <a className='navbar-brand text-white' href='#home'><h3>Wonder Weather</h3></a>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#info'>San Diego</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#info'>New York</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#info'>Washington D.C</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#info'>London</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='#info'>Tokyo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

