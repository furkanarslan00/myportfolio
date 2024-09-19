import React from 'react';
import CVimage from './CVimage.jpg';
import './CV.css'; 

function CV() {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = CVimage;
        link.download = 'Furkan Arslan_CV.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (



        <div className="outer-wrapper">
            <div className="container mt-5 p-5 ozel-container" >
                <img src={CVimage} alt="Furkan Arslan" className="img-fluid mt-5" />
                <button onClick={downloadCV} className="download-button">Download CV</button>

            </div>



        </div>

    );


}

export default CV;