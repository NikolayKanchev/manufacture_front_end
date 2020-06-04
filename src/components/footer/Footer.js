import React from 'react';

import Typography from '@material-ui/core/Typography';
import MatLink from '@material-ui/core/Link';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';

import './Footer.css';


const Footer = ({appName}) =>{
  return (
    <div data-testid="footer">
    <div className="main-container">
      <div className="flex-container">
        <div className="sub-container">
          <div className="content">
            <h3 className="footer-title">General</h3>
            <p>Contact us</p>
            <p>Join as Manufacturer</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <div className="sub-container">
          <div className="content">
            <h3 className="footer-title">Get to know us</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Partners</p>
          </div>
        </div>
        <div className="sub-container">
          <div className="content">
            <h3 className="footer-title">Make Money with Us</h3>
            <p>Find manufacturer</p>
            <p>Get direct offers</p>
            <p>How do we help?</p>
            <p>Success Stories</p>
          </div>
        </div>
        <div className="sub-container">
          <div className="content">
            <h3 className="footer-title">Follow us</h3>
            <div className="social">
              <div><Facebook /></div>
              <div><Twitter /></div>
              <div><LinkedIn /></div>
              <div><YouTube /></div>
            </div>
            
          </div>
        </div>
      </div>
        <Typography variant="body2" color="textSecondary" align="center" >
          {'Copyright © '}
          <MatLink color="inherit" href="https://material-ui.com/">
            {appName}
          </MatLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </div>
    </div>
  );
}

export default Footer;