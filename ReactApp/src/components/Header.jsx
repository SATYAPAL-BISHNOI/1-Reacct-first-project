import React from 'react';
import '../style/Header.scss';
import { Link } from 'react-router-dom';
import {HashLink } from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>tECHKILL</h1>
        <main>
            <HashLink smooth to='#home'>Home</HashLink>
            <Link to={'/contect'}>Contact</Link>
            <HashLink smooth to='#about'>About</HashLink >
            <HashLink smooth to='#brand'>Brand's</HashLink >
            <Link to={'/service'}>service</Link>
            {/* <Link></Link> */}
        </main>
    </nav>
  )
}

export default Header