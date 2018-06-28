import React from 'react';

import WheaterTemperature from './WheatherTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import propTypes from 'prop-types';
import './styles.css';

//pasa la variable data con destructuring
const WheaterData = ({data}) => {
    //declara todas las variables utilizando destructuring de la variable data
    const {temperature,weatherState,humidity,wind} = data;
    //le pasa todas las variables al componente WheaterTemperature
    return(
    <div className='wheaterDataCont'>
        <WheaterTemperature temperature={temperature} weatherState={weatherState}/>
        <WheaterExtraInfo humidity={humidity} wind={wind}/>
    </div>
)
}

WheaterData.propTypes = {
    data : propTypes.shape(
        {
            temperature: propTypes.number.isRequired,
            weatherState: propTypes.string.isRequired,
            humidity : propTypes.number.isRequired,
            wind: propTypes.number.isRequired,
        }
    )

}

export default WheaterData;