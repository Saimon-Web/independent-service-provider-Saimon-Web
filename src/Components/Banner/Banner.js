import React from 'react';
import banner from '../../images/bg-01.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="card  ">
                <img src={banner} className="card-img " alt="..." />
                <div className="text-info  card-img-overlay">
                    <div>
                        <h5 className=" heading  card-title text-white fw-bold ">A Natural way <br />
                            of improving your health.</h5>
                        <p className="card-text  text-white ">“Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.</p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;