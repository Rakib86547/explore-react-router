import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css';
const Country = ({country}) => {
    
    const {flags, name, capital} = country;
    const {common} = name;
    const navigate = useNavigate()
    const handleCountryButton = () => {
        navigate(`/country/${common}`)
    }
    return (
        <div className='country-card'>
            <img className='img' src={flags.png} alt="" />
            <p><strong>Country: </strong>{common}</p>
            <p><strong>Capital: </strong>{capital}</p>
            <button onClick={handleCountryButton} className='county-btn'>Details</button>
        </div>
    );
};

export default Country;