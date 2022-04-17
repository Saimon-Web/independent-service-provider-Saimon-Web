import React from 'react';
import './About.css'
import naim from '../../images/naim.jpg'
const About = () => {
    return (
        <div className='d-lg-flex'>
            <div>
                <img className='image ms-5' src={naim} alt="" />
            </div>
            <div className='p-5 d-flex justify-content-center align-items-center'>
                <div>
                    <h2>My Goal</h2>
                    <p>I am Naim Arafat.I want a full stack developer through next 5 month.i  learned html,css,javascript,bootstrap from programming hero community.At present,i am learning react js.I hope   i will  full stack developer in next 5 month.That for,i am continuosly hard working and learning any web development related topics . programming hero commounity is the best platform from learning and also motivated pltaform. </p>
                </div>
            </div>
        </div>
    );
};

export default About;