import React from 'react';
import '../style/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <h1>tECHKILL</h1>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/contect'}>Contact</Link>
            <Link to={'/#about'}>About</Link>
            <Link to={'/#Brands'}>Brand's</Link>
            <Link to={'/service'}>service</Link>
            {/* <Link></Link> */}
        </main>
    </nav>
  )
}

export default Header