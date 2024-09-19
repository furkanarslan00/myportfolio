import React, { useState, useEffect } from 'react';
import './Home.css'; 
import furkanarslanpc from './meapc.jpg';
import furkanarslanmobil from './meamobil.jpg';
import WaveProgressBar from './WaveProgressBar'; 

const Home = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [imageSource, setImageSource] = useState(() => {
    return windowWidth <= 1025 ? furkanarslanmobil : furkanarslanpc;
    
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:furkan0tr0arslan@gmail.com?subject=New Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
    setName('');
    setEmail('');
    setMessage('');
  };



  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const source = windowWidth <= 1025 ? furkanarslanmobil : furkanarslanpc;
    setImageSource(source);
  }, [windowWidth]);

  const skills = ['HTML5 & CSS3', 'Java', 'JavaScript', 'Python', 'SRS Doc.', 'SQL']; 

  const percentValues = [95, 85, 90, 80, 85, 75]; 

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-title">
          <div>Hello! </div>
          <div className="normal-font">Welcome My Personal Page</div>
        </div>
        <div className="home-profile-image-container">
          <img
            src={imageSource}
            alt="Furkan Arslan"
            className="home-profile-image"
            style={{ maxHeight: `${windowHeight * 0.8}px` }}
          />
        </div>
        <div className="home-content">
          <div id="Web" className="home-category">
            <div className="home-category-images">
              <div className="home-project-info-box">
                <h4 className="home-main-info-title">About Me</h4>
                <div className="home-project-info">
                  <p>&nbsp;&nbsp;&nbsp;Hello, I'm Furkan Arslan, a 4th-year Software Engineering student. My focus is on becoming a problem-solving software engineer with expertise in programming, data structures, web development, and software design. I'm dedicated to enhancing my skills daily to provide innovative and effective solutions to real-world challenges.</p>
                </div>
              </div>
              <div className="home-project-info-box">
                <h4 className="home-main-info-title">Personal Information</h4>
                <div className="personal-info-container">
                  <div className="personal-info-item">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/52/52349.png"
                      alt="İkon"
                      className="personal-info-icon"
                    />
                    <span className="info-text">Canakkale, Turkey</span>
                  </div>
                  <div className="personal-info-item">
                    <img
                      src="https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-2.jpg"
                      alt="İkon"
                      className="personal-info-icon"
                    />
                    <span className="info-text">27.07.2002</span>
                  </div>
                  <div className="personal-info-item">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/116/116395.png"
                      alt="İkon"
                      className="personal-info-icon"
                    />
                    <span className="info-text">Ankara, Turkey</span>
                  </div>
                  <div className="personal-info-item">
                    <img
                      src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-jz44rpiz.png"
                      alt="İkon"
                      className="personal-info-icon"
                    />
                    <a
                      href="https://www.linkedin.com/in/furkanarslan00/"
                      className="info-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/furkanarslan00
                    </a>
                  </div>
                  <div className="personal-info-item">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="İkon"
                      className="personal-info-icon"
                    />
                    <a
                      href=" https://github.com/furkanarslan00"
                      className="info-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/furkanarslan00
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-project-info-box">
                <h4 className="home-main-info-title">Education</h4>
                <div className="home-project-info">
                  <p><span className="home-bold-text">Cankaya University</span></p>
                  <p style={{ margin: 0 }}><span className="home-boldd-text">Software Engineering 4th Class</span></p>
                  <p style={{ margin: 0 }}><span className="home-bolddd-text"> · [2020-Current]</span></p>
                  <p style={{ margin: 0 }}><span className="home-bolddd-text">· Final Grade: GPA: 2.90/4.0</span></p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="pc-content">
            <div id="Web" className="pc-category">
              <h2 className="pc-category-title">Computer Skills</h2>
              <div className="pc-category-images">
                {skills.map((skill, index) => (
                  <div className="skills-item" key={index}>
                    <WaveProgressBar percent={percentValues[index]}>{skill}</WaveProgressBar>
                  </div>
                ))}
              </div>
            </div>
          </div>


     <div className="contact-content">
      <div className="contact-category">
        <h2 className="contact-category-title">Contact Me</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-info">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-info">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-info">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button className='sumbit' type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>




          <div className="scroll-to-top" onClick={scrollTop}>
            <img
              src="https://izmirvitray.com.tr/images/top.png" 
              alt="En Üste Git"
              className="scroll-to-top-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default Home;
