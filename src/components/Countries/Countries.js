import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            <h1>This is Countries Page: {countries.length}</h1>
            <div className='country-container'>
                {
                    countries.map(country =><Country
                    key={country.ccn3}
                    country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;