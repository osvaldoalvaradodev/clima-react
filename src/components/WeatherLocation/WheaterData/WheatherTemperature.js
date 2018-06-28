import React from 'react';
import {Icon} from 'react-fa';
import propTypes from 'prop-types';
import './styles.css';
var convert = require('convert-units');

const getWeatherIcon = (weatherState) =>{
    console.log(weatherState);
    switch(weatherState){
        case "ship":
            return(<Icon className= "wicon" name="ship" />);
        default:
            return(<Icon className= "wicon" name="plane" />);
    }
}

//transforma de grados KELVIN a CELCIUS
const transformKelvinToCelsius = (temperatureToTransform) => {
    var temperatureConverted = convert(temperatureToTransform).from('K').to('C').toFixed(2);
    console.log("La Temperatura Original : " + temperatureToTransform + " La temperatura Transformada: " + temperatureConverted);
    return temperatureConverted;
}

//retorna el componente
const WheatherTemperature = ({temperature,weatherState}) => (
    <div className='wheatherExtraInfo'>
        {getWeatherIcon(weatherState)}
        <span>{`${transformKelvinToCelsius(temperature)} cº`}</span>
    </div>
)

//Sirve para definir que tipos de variables debe recibir la constante WeatherTemperature, en este caso devolvera error
//por consola si esque el dato es de otro tipo
WheatherTemperature.propTypes = {
    temperature : propTypes.number.isRequired,
    weatherState : propTypes.string

}
export default WheatherTemperature;