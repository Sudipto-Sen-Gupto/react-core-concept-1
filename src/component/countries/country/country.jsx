
import React from 'react';
import './country.css'
const Country = ({ country }) => {
    console.log(country.area.area);
    return (
        <div className='style'>
            <img src={country?.flags?.flags?.png} alt="" />
            <p>Name:{country.name.common}</p>
            <p>Currency:{country.capital.capital}</p>
            <p>Area:{country.area.area}    {country.area.area>200000?"Largest Country":"Smallest Country"}</p>
        </div>
    );
};

export default Country;