import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='text-center fs-1 text-success fw-bold'> My Services</h1>
            <div className="services-box mt-5 contaier">
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;