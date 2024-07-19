import React, { useState } from 'react';
import '../css/ImageSlider.css';

const Slider = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleClickPrev = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleClickNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    };

    return (
        <div className="slider-container">
            <div>
                <h3 className='fw-bold text-light' style={{ textAlign: "center", fontSize: "15px" }}>SEASON'S FAVORITESS</h3>
            </div>
            <div>
                <h3 className='fw-bold mb-5 text-light' style={{ textAlign: "center", fontSize: "30px" }}>Discover the key trends of the season</h3>
            </div>
            <div className="slider d-flex justify-content-center">
                {images.slice(startIndex, startIndex + 3).map((image, index) => (
                    <div key={index} className="slide mx-4 border-trend-animation">
                        <img src={image} alt={`Image ${index}`} style={{ width: "300px", height: "300px" }} />
                    </div>
                ))}
            </div>
            <button onClick={handleClickPrev} className="nav-button prev" disabled={startIndex === 0}>
                <i class="fa fa-angle-left" style={{ fontSize: "50px", color: "black" }}></i>
            </button>
            <button
                onClick={handleClickNext}
                className="nav-button next"
                disabled={startIndex === images.length - 3}
            >
                <i class="fa fa-angle-right" style={{ fontSize: "50px", color: "black" }}></i>
            </button>
        </div>
    );
};

export default Slider;
