import React from 'react';
import { Link } from 'react-scroll';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
        <div class='social-media-wrap'>
        <p>AniDaRocha © 2020</p>
        <div class='social-icons'>
        <Link
        class='social-icon-link twitter'
        to='https://www.instagram.com/anidarochaa/'
        target='_blank'
        aria-label='Instagram'
        >
        <InstagramIcon />
        </Link>
        <Link
        class='social-icon-link twitter'
        to='https://twitter.com/anidarocha'
        target='_blank'
        aria-label='Twitter'
        >
        <TwitterIcon />
        </Link>
        <Link
        class='social-icon-link twitter'
        to='https://www.linkedin.com/in/anabella-da-rocha-940b9267/'
        target='_blank'
        aria-label='LinkedIn'
        >
        <LinkedInIcon />
        </Link>
        </div>
        </div>
        </div>
        );
    }
    
    export default Footer;