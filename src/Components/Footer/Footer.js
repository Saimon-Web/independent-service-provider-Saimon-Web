import React from 'react';
import logo from '../../images/footer-logo.png'
const Footer = () => {
    return (
        <div className='container-fluid py-5 bg-dark'>
            <div className="row text-white">
                <div className='col-lg-4  col-sm-12'>
                    <img className='mb-5' src={logo} alt="" />
                    <p>Address: 121, Park Drive, Varick
                        Str, New York, NY 10012, USA</p>
                    <p>Phone: (123) 0200 12345</p>
                    <p>Email: Mailus@Healthcoach.com</p>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h1>Useful Links</h1>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blogs</p>
                    <p>Log in</p>
                    <p>Register</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <h1>Latest News</h1>
                    <p>What is a “Healthy” Food? <br />
                        The Answer ... <br />
                        <span className='text-success'>February 14, 2017</span></p>
                    <p>What is a “Healthy” Food? <br />
                        The Answer ... <br />
                        <span className='text-success'>February 14, 2017</span></p>

                </div>


            </div>

        </div>
    );
};

export default Footer;