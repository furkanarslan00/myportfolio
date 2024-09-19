import React from 'react';
import './Project.css';
import PhoneBookAppGif from './phonebookapp.gif';
import SearchEngine from './searchengine.gif';
import RabbitCarrotGame from './game.gif';
import NewsGif from './newspaper.gif';
import cinemaGif from './cinema.gif';



const Project = () => {
  const scrollToCategory = (categoryName) => {
    const element = document.getElementById(categoryName);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="project-page">
        <div className="project-container" style={{backgroundImage: 'url("https://www.dqsconsulting.com/wp-content/uploads/2021/10/que-es-el-big-data.jpg")'}}>
          <h2 className="project-title">Projects</h2>
          <div className="sidebar">
            <p>
              There are only 5 of my many projects. I completed these during my school years. During this process, I improved my research skills and learned a lot about software development and teamwork.
            </p>
          </div>
          <div className="content">

          <div id="Web" className="category">
              <h3>MovieApp</h3>
              <div className="category-images">
                <img src={cinemaGif} className="newsgif" alt="Phone Book App GIF" />
                <div className="project-info-box">
                  <h4 className="main-info-title">Main Information</h4>
                  <div className="project-info">
                    <p><span className="bold-text">Programming Language:</span> <span className='mini-box'> Html </span> <span className='mini-box'> Css </span> <span className='mini-box'> TypeScript </span></p>
                    <p><span className="bold-text">Project Link:</span> <a href="https://movie-app-rho-ruddy-62.vercel.app/" target="_blank" rel="noopener noreferrer">https://vercel.com/faMovie</a></p>
                    <p><span className="bold-text">Github Link:</span> <a href="https://github.com/furkanarslan00/MovieApp" target="_blank" rel="noopener noreferrer">https://github.com/furkanarslan00</a></p>
                    <p><span className="bold-text">Release Date:</span> 02.08.2024</p>
                  </div>
                </div>

                <div className="project-info-box">
                  <h4 className="main-info-title">Explanation</h4>
                  <div className="project-info">
                    <span>&nbsp;&nbsp;&nbsp;An Angular-based movie application that fetches and displays movie information from an external API. Features include a homepage with popular movies, category-based browsing, search functionality, movie details view, watchlist management, and a responsive design.</span>   
                  </div>
                </div>
              </div>       
            </div>


          <div id="Web" className="category">
              <h3>NewsApp</h3>
              <div className="category-images">
              <img src={NewsGif} className="newsgif" alt="Phone Book App GIF" />
              <div className="project-info-box">
                  <h4 className="main-info-title">Main Information</h4>
                  <div className="project-info">
                    <p><span className="bold-text">Programming Language:</span> <span className='mini-box'> Html </span> <span className='mini-box'> Css </span> <span className='mini-box'> TypeScript </span></p>
                    <p><span className="bold-text">Github Link:</span> <a href="https://github.com/furkanarslan00/NewsApp-Angular" target="_blank" rel="noopener noreferrer">https://github.com/furkanarslan00</a></p>
                    <p><span className="bold-text">Release Date:</span> 17.07.2024</p>
                  </div>
                </div>

                <div className="project-info-box">
                  <h4 className="main-info-title">Explanation</h4>
                  <div className="project-info">
                    <span>&nbsp;&nbsp;&nbsp;NewsApp was prepared during the Enoca internship with the aim of creating it in Angular with Rest Api usage skills and responsive design.</span>   
                  </div>
                </div>
              </div>       
            </div>



            <div id="Web" className="category">
              <h3>Phone Book App</h3>
              <div className="category-images">
                <img src={PhoneBookAppGif} alt="Phone Book App GIF" />
                <div className="project-info-box">
                  <h4 className="main-info-title">Main Information</h4>
                  <div className="project-info">
                    <p><span className="bold-text">Programming Language:</span> <span className='mini-box'> Html </span> <span className='mini-box'> Css </span> <span className='mini-box'> JavaScript </span></p>
                    <p><span className="bold-text">Github Link:</span> <a href="https://github.com/furkanarslan00/PhoneBookApp-Website" target="_blank" rel="noopener noreferrer">https://github.com/furkanarslan00</a></p>
                    <p><span className="bold-text">Release Date:</span> 25.12.2023</p>
                  </div>
                </div>

                <div className="project-info-box">
                  <h4 className="main-info-title">Explanation</h4>
                  <div className="project-info">
                    <span>&nbsp;&nbsp;&nbsp;The website developed using React and coded with HTML, CSS and Javascript, is accessed via Microsoft SQL. On this site, users can add contacts to phonebookapp, delete contacts and search for contacts.</span>   
                  </div>
                </div>
              </div>       
            </div>
            <div id="Mobile" className="category">
              <h3>Linked List Search Engine</h3>
              <div className="category-images">
                <img src={SearchEngine} alt="Phone Book App GIF" />
                <div className="project-info-box">
                  <h4 className="main-info-title">Main Information</h4>
                  <div className="project-info">
                    <p><span className="bold-text">Programming Language:</span> <span className='mini-box'> Java </span> </p>
                    <p><span className="bold-text">Github Link:</span> <a href="https://github.com/furkanarslan00/LinkedListSearchEngine-Java" target="_blank" rel="noopener noreferrer">https://github.com/furkanarslan00</a></p>
                    <p><span className="bold-text">Release Date:</span> 19.11.2023</p>
                  </div>
                </div>

                <div className="project-info-box">
                  <h4 className="main-info-title">Explanation</h4>
                  <div className="project-info">
                    <span>&nbsp;&nbsp;&nbsp;Searching for the word in input.txt in java and printing it to the output.txt file or finding and deleting the part in this file.</span>   
                  </div>
                </div>
              </div>
            </div>
            <div id="Desktop" className="category">
              <h3>Transportation Network</h3>
              <div className="category-images">
                <img src={RabbitCarrotGame} alt="Phone Book App GIF" />
                <div className="project-info-box">
                  <h4 className="main-info-title">Main Information</h4>
                  <div className="project-info">
                  <p><span className="bold-text">Programming Language:</span> <span className='mini-box'> Java </span> </p>
                    <p><span className="bold-text">Github Link:</span> <a href="https://github.com/furkanarslan00/TransportationNetwork-Java" target="_blank" rel="noopener noreferrer">https://github.com/furkanarslan00</a></p>
                    <p><span className="bold-text">Release Date:</span> 12.10.2023</p>
                  </div>
                </div>

                <div className="project-info-box">
                  <h4 className="main-info-title">Explanation</h4>
                  <div className="project-info">
                    <span>&nbsp;&nbsp;&nbsp;The program reads an input file named Transport network.inp. The file contains adjacency matrices for three modes of transportation: Road, Air and Rail. Matrix size is dynamic. The program creates an output file containing the result of the queries specified in query.inp.</span>   
                  </div>
                </div>
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

export default Project;
