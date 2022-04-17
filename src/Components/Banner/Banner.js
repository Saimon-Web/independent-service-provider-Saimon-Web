import React from 'react';
import banner from '../../images/consultation-bg.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="card   bg-dark opacity-75">
                <img src={banner} className="card-img " alt="..." />
                <div className="text-info mt-5 card-img-overlay">
                    <h5 className=" heading  card-title text-white fs-1 fw-bold ">A Natural way of improving your health.</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;