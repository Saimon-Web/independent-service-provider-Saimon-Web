import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    return (
        <div>
            <div className='container mx-auto w-50 mb-5'>
                <h1 className='text-success mb-3'>Please Fill Up</h1>
                <form action="" className='form ' >

                    <input className='mb-3' type="text" name="name" placeholder='Your Name' id="" />
                    <input className='mb-3' type="email" name="email" placeholder='Your Email' id="" />
                    <input className='mb-3' type="number" name="number" placeholder='Your Number' id="" />
                    <input className='mb-3' type="number" name="text" placeholder='Your Address' id="" />
                    <input className='btn btn-success' type="submit" value="Submit" />


                </form>
            </div>

        </div>
    );
};

export default Checkout;