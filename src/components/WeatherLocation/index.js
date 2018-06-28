import React,{Component} from 'react';
import {Preloader} from 'react-materialize';
import Location from './Location';
import WheaterData from './WheaterData/';
import './WheaterData/styles.css';
import PropTypes from 'prop-types';


const location = "Buenos Aires,AR";
const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "04a3adc9fc4edd9f80054be447d7a3df";




const data1 = {
   
    temperature: 10,
    weatherState: 'ship',
    humidity: 5,
    wind: 10,
    city: "ciudad1",
}

const data2 = {
    temperature: 102,
    weatherState: 'plane',
    humidity: 52,
    wind: 102,
}
const miInit = { method: 'GET',
mode: 'cors',
cache: 'default' };

let city = "QUELLOn";

//define el componente WheaterLocation como un componente de clase (classComponent)
class WheaterLocation extends Component{

    //cuando se construya el componente, su estado sera el incial declarado en el constructor
    constructor({city}){
        console.log(data1);
        super();
        this.state = {
            city: city,
            data: null,
        };
    }
    getweatherState = (weather) => {
        return 'plane';
    }
    getData = (weather_data) => {
        const {humidity, temp} = weather_data.main;
        const city = weather_data.name;
        console.log("La ciudad es:" + city);
        const {speed} = weather_data.wind;
        const weatherState = this.getweatherState(this.weather);

        const data = {
            humidity,
            temperature : temp,
            weatherState,
            wind : speed,
            city : city,
        }

        return data;
    }
    //cuando se llama esta funcion, cambia el estado de la clase, pasandole otros parametros (data2)
    handleUpdateClick = () => {
   
    }

    componentWillMount(){
        const api_weather_url = `${url}?q=${this.state.city}&appid=${api_key}`;
        fetch(api_weather_url).then(data => {
            
                   console.log(data);
                   return data.json();
               }).then( weather_data => {
                   const data = this.getData(weather_data);
                   
                   this.setState({data});
                   console.log(data);
            
               });
    }

   
  
    //renderiza el contenedor principal
    render = () => {
        console.log("wheaterlocation\index.js ");
        console.log(this);
        const {onWeatherLocationClick} = this.props;
        const {city,data} = this.state;
    
    return (
    <div className='mainContainer' onClick={onWeatherLocationClick}>
            {this.state.data ?         <Location city={this.state.data.city}/> : 'cargando...'}
            {this.state.data ?     <WheaterData data={this.state.data}/> : <Preloader size='big'/>}
            <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>
    )
}
};



//aplica validaciones sobre las variables que debe recibir el componente
WheaterLocation.PropTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WheaterLocation;


