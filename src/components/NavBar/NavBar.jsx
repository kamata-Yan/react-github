import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
    return (
      <div className="NavBar">
        <h1>NavBar</h1>
        <div className='hrefs'>
        <div><NavLink to='/HomePage' activeClassName={'activeLink'}>Home page</NavLink></div>
        <div><NavLink to='/ImagesPage' activeClassName={'activeLink'}>Images page</NavLink></div>
        <div><NavLink to='/MusicPage' activeClassName={'activeLink'}>Music page</NavLink></div>
        <div><NavLink to='/PortfolioPage' activeClassName={'activeLink'}>Portfolio page</NavLink></div>
        <div><NavLink to='/CommentsPage' activeClassName={'activeLink'}>Comments page</NavLink></div>
        </div>
      </div>
    );
  }

export default NavBar;