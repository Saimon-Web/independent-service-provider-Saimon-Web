import React from 'react';
import banner from '../../images/consultation-bg.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={banner} className="card-img" alt="..." />
                <div className="text-info mt-5 card-img-overlay">
                    <h5 className=" heading card-title  fs-1 fw-bold ">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;