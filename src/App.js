import React, { Component } from 'react';

import './App.css';
import WheaterLocation from './components/WeatherLocation/';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
const cities = ['Puerto Quellon,CL','Ancud,CL','Buenos Aires,AR','Castro,CL','Osorno,CL'];



class App extends Component {

  //define el estado del componente APP en primera instancia
  constructor(){
    super();
    this.state = {city: null}
  }


  handleSelectedLocation = city =>{
    console.log("HandleSelectedLocation " + city);
    this.setState({city:city});
  }

  render() {
    return (
      <div className="App">
        <LocationList 
          cities={cities} 
          onSelectedLocation={this.handleSelectedLocation}>
        </LocationList>
        <div className='detail'>
          {
            this.state.city === null ?
            <h1>No se selecciono ninguna ciudad</h1> :
            <ForecastExtended city={this.state.city}></ForecastExtended>
          }
       
        </div>
      </div>
    );
  }
}

export default App;
