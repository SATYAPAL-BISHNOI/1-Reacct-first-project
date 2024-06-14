import React from 'react';
import '../style/Header.scss';
import { Link } from 'react-router-dom';
import {HashLink } from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>TECHkILL</h1>
        <main>
            <HashLink to={'/#home'}>Home</HashLink>
            {/* <Link to={'/#home'}>Home</Link> */}
            <Link to={'/contect'}>Contact</Link>
            <HashLink to={'/#about'}>About</HashLink >
            <HashLink to={'/#brand'}>Brand's</HashLink >
            <Link to={'/service'}>service</Link>
            <Link to={'/team'}>Founder&Team</Link>

            {/* <Link></Link> */}
        </main>
    </nav>
  )
}

export default Header