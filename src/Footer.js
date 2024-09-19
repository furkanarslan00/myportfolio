import React from 'react';
import './Footer.css'; 
import instagram from './Icons/Instagram.gif';
import github from './Icons/Github.gif';
import linkedin from './Icons/Linkedin.gif';
import twitter from './Icons/Twitter.gif';
import gmail from './Icons/Gmail.gif';
import youtube from './Icons/Youtube.gif';




const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
      <a href="https://www.instagram.com/f.a_sarii/" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Image" className="social-icon" />
        </a>
        <a href="https://github.com/furkanarslan00" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Image" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/furkan-arslan-894a69268/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Image" className="social-icon" />
        </a>
        <a href="https://twitter.com/FA_Msw" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Image" className="social-icon" />
        </a>
       
        <a href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWrRqgkDMShJszkgLWlChcsbzsRClFzWMDQCnjJmWCphqzxcHMsvSJRmXgdfjWMZtKpMcDHMq" target="_blank" rel="noopener noreferrer">
        <img src={gmail} alt="Image" className="social-icon" />
        </a>

        <a href="https://www.youtube.com/channel/UCpA5M20NecdRH4GnYyjmHyw" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="Image" className="social-icon" />
        </a>

      </div>
      <p className='part1'>&copy; Prepared by Furkan Arslan</p>
    </footer>
  );
};

export default Footer;