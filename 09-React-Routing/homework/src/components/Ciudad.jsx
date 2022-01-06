import React from "react";
import './Ciudad.css';

export default function Ciudad({city}) {
    if(city){
    return (
        <div className="ciudad">
                <div className="container">
                    <h2 className='name'>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Cloudiness: {city.clouds}%</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Length: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
    } else {
        return <h2>City not found, try again</h2>
    }
}