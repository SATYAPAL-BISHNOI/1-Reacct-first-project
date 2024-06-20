import React from 'react';
import '../style/Header.scss';
import { Link } from 'react-router-dom';
import {HashLink } from "react-router-hash-link"
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  return (
    <Carousel>
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
    </Carousel>
  )
}

export default Header