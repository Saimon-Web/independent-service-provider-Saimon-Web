import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { img, description, name, price, id } = props.service;
    const navigate = useNavigate();

    return (
        <div className='col-lg-4 col-md-6 '>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-success fw-bold">{name}</h5>
                    <p className="card-title">Price: <span className="text-success fw-bold">{price}</span> </p>
                    <p className="card-text">{description}</p>

                    <Link to='/checkout'>
                        <button className='btn btn-success'>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;