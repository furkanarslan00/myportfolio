import React,{ useRef, useEffect  } from 'react';
import './Picture.css';
import Song from './song.mp3'; 
import dikey1 from './MyGallery/Dikey/dikey1.jpg';
import dikey2 from './MyGallery/Dikey/dikey2.jpg';
import dikey3 from './MyGallery/Dikey/dikey3.jpg';
import dikey4 from './MyGallery/Dikey/dikey4.mp4';
import dikey5 from './MyGallery/Dikey/dikey5.jpg';
import dikey6 from './MyGallery/Dikey/dikey6.jpg';
import dikey7 from './MyGallery/Dikey/dikey7.jpg';
import dikey8 from './MyGallery/Dikey/dikey8.mp4';
import dikey9 from './MyGallery/Dikey/dikey9.jpg';
import dikey10 from './MyGallery/Dikey/dikey10.jpg';
import dikey11 from './MyGallery/Dikey/dikey11.jpg';
import dikey12 from './MyGallery/Dikey/dikey12.jpg';
import yatay1 from './MyGallery/Yatay/yatay1.jpg';
import yatay2 from './MyGallery/Yatay/yatay2.jpg';
import yatay3 from './MyGallery/Yatay/yatay3.jpg';
import yatay4 from './MyGallery/Yatay/yatay4.jpg';
import yatay5 from './MyGallery/Yatay/yatay5.jpg';
import yatay6 from './MyGallery/Yatay/yatay6.mp4';
import yatay7 from './MyGallery/Yatay/yatay7.jpg';
import yatay8 from './MyGallery/Yatay/yatay8.jpg';
import yatay9 from './MyGallery/Yatay/yatay9.jpg';
import yatay10 from './MyGallery/Yatay/yatay10.jpg';
import yatay11 from './MyGallery/Yatay/yatay11.jpg';
import yatay12 from './MyGallery/Yatay/Yatay12.jpg';
import dikey13 from './MyGallery/Dikey/dikey13.mp4';
import dikey14 from './MyGallery/Dikey/dikey14.mp4';
import dikey15 from './MyGallery/Dikey/dikey15.mp4';
import dikey16 from './MyGallery/Dikey/dikey16.mp4';
import dikey17 from './MyGallery/Dikey/dikey17.jpg';
import dikey18 from './MyGallery/Dikey/dikey18.jpg';
import dikey19 from './MyGallery/Dikey/dikey19.jpg';
import dikey20 from './MyGallery/Dikey/dikey20.mp4';
import dikey21 from './MyGallery/Dikey/dikey21.jpg';
import dikey22 from './MyGallery/Dikey/dikey22.jpg';
import dikey23 from './MyGallery/Dikey/dikey23.mp4';
import dikey24 from './MyGallery/Dikey/dikey24.jpg';
import normal1 from './MyGallery/Normal/normal1.jpg';
import normal2 from './MyGallery/Normal/normal2.jpg';
import normal3 from './MyGallery/Normal/normal3.jpg';
import normal4 from './MyGallery/Normal/normal4.jpg';
import normal5 from './MyGallery/Normal/normal5.jpg';
import normal6 from './MyGallery/Normal/normal6.jpg';
import normal7 from './MyGallery/Normal/normal7.mp4';
import normal8 from './MyGallery/Normal/normal8.jpg';
import normal9 from './MyGallery/Normal/normal9.jpg';
import normal10 from './MyGallery/Normal/normal10.jpg';
import normal11 from './MyGallery/Normal/normal11.jpg';
import normal12 from './MyGallery/Normal/normal12.jpg';
import dikey25 from './MyGallery/Dikey/dikey25.jpg';
import dikey26 from './MyGallery/Dikey/dikey26.jpg';
import dikey27 from './MyGallery/Dikey/dikey27.jpg';
import dikey28 from './MyGallery/Dikey/dikey28.jpg';
import dikey29 from './MyGallery/Dikey/dikey29.mp4';
import dikey30 from './MyGallery/Dikey/dikey30.jpg';
import dikey31 from './MyGallery/Dikey/dikey31.jpg';
import dikey32 from './MyGallery/Dikey/dikey32.jpg';
import dikey33 from './MyGallery/Dikey/dikey33.jpg';
import dikey34 from './MyGallery/Dikey/dikey34.jpg';
import dikey35 from './MyGallery/Dikey/dikey35.jpg';
import dikey36 from './MyGallery/Dikey/dikey36.jpg';

const Picture = () => {
  const audioRef = useRef(null);

  const handleVideoPlay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVideoPause = () => {
    if (audioRef.current) {
      audioRef.current.play(); 
    }
  };
  

  const handleMusicEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleMusicEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleMusicEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.08;
    }
  }, []);

  const categories = [
    { id: 'Nature', name: 'Nature Photos' },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  return (
    <div>
      <div className="picture-page">
        <div className="picture-container">
          <h2 className="picture-title">My Gallery</h2>
          <div className="music">
            <p>Let Me Down Slowly</p> 
            <audio ref={audioRef} controls>
              <source src={Song} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="contentt">
            {categories.map((category) => (
              <div id={category.id} className="categoryy" key={category.id}>
                <div className="categoryy-img">              
                   {/* 1.Dikey Section */}

                  <img src={dikey1} alt="Image" className="gallery-item" />
                  <img src={dikey2} alt="Image" className="gallery-item" />
                  <img src={dikey3} alt="Image" className="gallery-item" />
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <img src={dikey5} alt="Image" className="gallery-item" />
                  <img src={dikey6} alt="Image" className="gallery-item" />
                  <img src={dikey7} alt="Image" className="gallery-item" />
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey8} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>                  
                  <img src={dikey9} alt="Image" className="gallery-item" />
                  <img src={dikey10} alt="Image" className="gallery-item" />
                  <img src={dikey11} alt="Image" className="gallery-item" />
                  <img src={dikey12} alt="Image" className="gallery-item" />

                  {/* 2.Yatay Section */}
                  <img src={yatay1} alt="Image" className="gallery-item1" />
                  <img src={yatay2} alt="Image" className="gallery-item1" />
                  <img src={yatay3} alt="Image" className="gallery-item1" />
                  <img src={yatay4} alt="Image" className="gallery-item1" />
                  <img src={yatay5} alt="Image" className="gallery-item1" />
                  <video controls className="gallery-item1" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={yatay6} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>                  
                  <img src={yatay7} alt="Image" className="gallery-item1" />
                  <img src={yatay8} alt="Image" className="gallery-item1" />
                  <img src={yatay9} alt="Image" className="gallery-item1" />
                  <img src={yatay10} alt="Image" className="gallery-item1" />
                  <img src={yatay11} alt="Image" className="gallery-item1" />
                  <img src={yatay12} alt="Image" className="gallery-item1" />
          
                  {/* 3.Dikey Section */}
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey13} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey14} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey15} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey16} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <img src={dikey17} alt="Image" className="gallery-item" />
                  <img src={dikey18} alt="Image" className="gallery-item" />
                  <img src={dikey19} alt="Image" className="gallery-item" />
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey20} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <img src={dikey21} alt="Image" className="gallery-item" />
                  <img src={dikey22} alt="Image" className="gallery-item" />
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey23} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>  
                  <img src={dikey24} alt="Image" className="gallery-item" />
                
                  {/* 4.Normal Section */}

                  <img src={normal1} alt="Image" className="gallery-item2" />
                  <img src={normal2} alt="Image" className="gallery-item2" />
                  <img src={normal3} alt="Image" className="gallery-item2" />
                  <img src={normal4} alt="Image" className="gallery-item2" />
                  <img src={normal5} alt="Image" className="gallery-item2" />
                  <img src={normal6} alt="Image" className="gallery-item2" />
                  <video controls className="gallery-item2" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={normal7} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>                    
                  <img src={normal8} alt="Image" className="gallery-item2" />
                  <img src={normal9} alt="Image" className="gallery-item2" />
                  <img src={normal10} alt="Image" className="gallery-item2" />
                  <img src={normal11} alt="Image" className="gallery-item2" />
                  <img src={normal12} alt="Image" className="gallery-item2" />

                  {/* 5.Dikey Section */}

                  <img src={dikey25} alt="Image" className="gallery-item" />
                  <img src={dikey26} alt="Image" className="gallery-item" />
                  <img src={dikey27} alt="Image" className="gallery-item" />
                  <img src={dikey28} alt="Image" className="gallery-item" />
                  <video controls className="gallery-item" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                    <source src={dikey29} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>                    
                  <img src={dikey30}alt="Image" className="gallery-item" />
                  <img src={dikey31} alt="Image" className="gallery-item" />
                  <img src={dikey32} alt="Image" className="gallery-item" />
                  <img src={dikey33} alt="Image" className="gallery-item" />
                  <img src={dikey34} alt="Image" className="gallery-item" />
                  <img src={dikey35} alt="Image" className="gallery-item" />
                  <img src={dikey36} alt="Image" className="gallery-item" />

               
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

export default Picture;