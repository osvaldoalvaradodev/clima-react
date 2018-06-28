import React from 'react';
import propTypes from 'prop-types';
const WheaterExtraInfo = ({humidity,wind}) => (
    <div className='wheaterTemperatureCont'>
        <span>{"Humedad : " + humidity + " % "}</span>
        <span className='wind'>{'Viento: '+ wind + ' m/s'}</span>
    </div>
)

//valida que las variables del componente weatherExtraInfo sean numerico y string
WheaterExtraInfo.propTypes = {
    humidity : propTypes.number,
    wind: propTypes.number,

}
export default WheaterExtraInfo;