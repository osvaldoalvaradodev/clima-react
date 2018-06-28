import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';



//retorna el elemento locations list, con la lista de elementos de la iteracion generada por la funcion strToComponent
const LocationList = ({cities,onSelectedLocation}) => {


    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick :D " + city);
        //dispara un evento superior en appJS
        onSelectedLocation(city); 
    }


    //convierte el array de ciudades en N componentes (los itera)
    const strToComponentFunction = cities => (
        //asigna como KEY el nombre de la ciudad, esto es necesario para que no despliegue error
        cities.map(city => ( 
        <WeatherLocation 
            key={city} 
            city={city}
            onWeatherLocationClick ={() => handleWeatherLocationClick(city)}
        />))

    );

    return (<div className='left'>
        {strToComponentFunction(cities)}
    </div>);
};

LocationList.PropTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,

}

export default LocationList;