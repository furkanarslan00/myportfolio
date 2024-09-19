import React, { useState, useEffect } from 'react';

const Game = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1455);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1455);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log('isMobile:', isMobile);

  return (
    <div style={{ marginTop: '64px', position: 'relative', backgroundImage: `url("https://marketplace.canva.com/EAFINnUsPyA/1/0/1600w/canva-siyah-modern-teknoloji-masa%C3%BCst%C3%BC-duvar-ka%C4%9F%C4%B1d%C4%B1-1iOEJNrdkZc.jpg")`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {!isMobile && (
          <div style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px', marginRight: '10px' }}>
            <iframe
              title="Popular Games"
              scrolling="no"
              frameBorder="0"
              style={{ width: '100%', height: '555px' }} 
              src="https://www.rekoroyun.com/embed/?max=12&bg=-&yr=000000&lr=000000&br=FFCC99&baslik=Popular%20Games"
            ></iframe>
          </div>
        )}

      
        {!isMobile && (
          <div style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px', marginRight: '10px' }}>
            <iframe
              title="New Games"
              scrolling="no"
              frameBorder="0"
              style={{ width: '100%', height: '555px' }} 
              src="https://www.rekoroyun.com/embed/?max=12&bg=-&yr=000000&lr=000000&br=9999FF&baslik=New%20Games&tur=2"
            ></iframe>
          </div>
        )}

        {!isMobile && (
          <div style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px' }}>
            <iframe
              title="Random Games"
              scrolling="no"
              frameBorder="0"
              style={{ width: '100%', height: '555px' }} 
              src="https://www.rekoroyun.com/embed/?max=12&bg=-&yr=000000&lr=000000&br=FFBBFF&baslik=Random%20Games&tur=3"
            ></iframe>
          </div>
        )}

        {isMobile && (
          <>
            <div style={{ flex: '0 0 calc(100% - 10px)', marginRight: '10px' }}>
              <iframe
                title="Popular Games"
                scrolling="yes"
                frameBorder="0"
                style={{ width: '100%', height: '310px' }} 
                src="https://www.rekoroyun.com/embed/?max=6&bg=-&yr=000000&lr=000000&br=FFCC99&baslik=Popular%20Games"
              ></iframe>
            </div>

            <div style={{ flex: '0 0 calc(100% - 10px)', marginRight: '10px' }}>
              <iframe
                title="New Games"
                scrolling="yes"
                frameBorder="0"
                style={{ width: '100%', height: '310px' }} 
                src="https://www.rekoroyun.com/embed/?max=6&bg=-&yr=000000&lr=000000&br=9999FF&baslik=New%20Games&tur=2"
              ></iframe>
            </div>

            <div style={{ flex: '0 0 calc(100% - 10px)'}}>
              <iframe
                title="Random Games"
                scrolling="yes"
                frameBorder="0"
                style={{ width: '100%', height: '310px' }} 
                src="https://www.rekoroyun.com/embed/?max=6&bg=-&yr=000000&lr=000000&br=FFBBFF&baslik=Random%20Games&tur=3"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
