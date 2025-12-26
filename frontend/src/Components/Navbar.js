import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo"><Link to='/'>HOME</Link></div>
        <div className="nav-element"><Link to='/add'>Add BDay</Link></div>
        <div className="nav-element"><Link to='/upcoming'>Upcoming BDay</Link></div>
        <div className="nav-element"><Link to='/send'>Send Wish</Link></div>
    </div>
  )
}
