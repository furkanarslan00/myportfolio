import React, { useState } from 'react';
import './Music.css';

const Music = () => {
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

  const categories = [
    { 
      id: 'Hiphop', 
      name: 'Hiphop Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/hsu0rtpCtc0', title: 'Hiphop Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/RBMihYL90UY', title: 'Hiphop Music 2' },
        { id: 3, src: 'https://www.youtube.com/embed/7I-jmjw7C0E', title: 'Hiphop Music 3' },
        { id: 4, src: 'https://www.youtube.com/embed/RnH2A8gjFp4', title: 'Hiphop Music 4' },
        { id: 5, src: 'https://www.youtube.com/embed/3GiO2hfzbZY', title: 'Hiphop Music 5' },
        { id: 6, src: 'https://www.youtube.com/embed/PUiNB0UFwJM', title: 'Hiphop Music 6' },
        { id: 7, src: 'https://www.youtube.com/embed/H5NA_UTSYeE', title: 'Hiphop Music 7' },
        { id: 8, src: 'https://www.youtube.com/embed/uPi5Q9YCyaQ', title: 'Hiphop Music 8' },
      ]
    },
    { 
      id: 'Slow', 
      name: 'Slow Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/xrpasFa2tIQ', title: 'Slow Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/Pl7--yxZjng', title: 'Slow Music 2' },
        { id: 3, src: 'https://www.youtube.com/embed/QeCAPkTHOto', title: 'Slow Music 3' },
      ]
    },
    { 
      id: 'Pop', 
      name: 'Pop Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/OKkVPUz5bUE', title: 'Pop Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/Iz_DvG2nui0', title: 'Pop Music 2' },
        { id: 3, src: 'https://www.youtube.com/embed/oDQ5tEkOicg', title: 'Pop Music 3' },
      ]
    },
    { 
      id: 'English Rap', 
      name: 'English Rap Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/iOxzG3jjFkY', title: 'English Rap Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/nYh-n7EOtMA', title: 'English Pop Music 2' },
      ]
    },
    { 
      id: 'English Slow', 
      name: 'English Slow Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/MwpMEbgC7DA', title: 'English Slow Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/8VLXHyHRXjc', title: 'English Slow Music 2' },
      ]
    },
    { 
      id: 'English Pop', 
      name: 'English Pop Music',
      music: [
        { id: 1, src: 'https://www.youtube.com/embed/JGwWNGJdvx8', title: 'English Pop Music 1' },
        { id: 2, src: 'https://www.youtube.com/embed/WcIcVapfqXw', title: 'English Pop Music 2' },
      ]
    },
  ];

  const [videosLoaded, setVideosLoaded] = useState(false);

  const handleVideosLoaded = () => {
    setVideosLoaded(true);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="music-page">
        <div className="music-container">
          <h2 className="music-title">Categories</h2>
          <div className="sidebarrr">
            <ul>
              {categories.map((category) => (
                <li key={category.id} onClick={() => scrollToCategory(category.id)}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          {!videosLoaded && (
            <div className="loading-message">
              <p>Loading Musics...</p>
            </div>
          )}
          <div className="contenttt">
            {categories.map((category) => (
              <div id={category.id} className="categoryyy" key={category.id}>
                <h3>{category.name}</h3>
                <div className="categoryyy-images">
                  {category.music.map((music) => (
                    <iframe
                      key={music.id}
                      src={music.src}
                      title={music.title}
                      width="100%"
                      height="300"
                      frameBorder="0"
                      allowFullScreen
                      onLoad={handleVideosLoaded} 
                    />
                  ))}
                </div>
              </div>
            ))}
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

export default Music;
