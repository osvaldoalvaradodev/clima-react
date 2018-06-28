import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component{

    render(){

        const city = this.props.city;
        return (
            <div><h1>
                Pronostico Extendido!!!!!!! {city}
                </h1>
            </div>

        );
    }

}

ForecastExtended.PropTypes = {
    city : PropTypes.string.isRequired,
}


export default ForecastExtended;