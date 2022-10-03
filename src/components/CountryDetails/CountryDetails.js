import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CountryDetails.css';
const CountryDetails = () => {
    const county = useLoaderData()[0]
    const {region, subregion, population, startOfWeek, name} = county;
    console.log(county)
    return (
        <div>
            <h1>Country Details: {county.length}</h1>
            <div className='details-card'>
                <p><strong>Name: </strong>{name.common}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Subregion: </strong>{subregion}</p>
                <p><strong>Populations: </strong>{population}</p>
                <p><strong>Start Of Week: </strong>{startOfWeek}</p>
            </div>
        </div>
    );
};

export default CountryDetails;