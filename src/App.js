import React, { Component } from 'react';
import Map from './Components/MapsComponent/map.js';
import Global from './Components/GlobalComponent/global.js';
import PopUpComponent from './Components/DetailedPopUpComponent/popUp.js';
import Search from './Components/SearchBarComponent/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getInfectedCountriesData from './actions/getAllInfectedCountriesDetails.js';
import getCountryData from './actions/getCountryData.js';
import './App.css';

class App extends Component{

  state = {
    displayModel: false
  }

  componentWillMount() {
    this.props.getInfectedCountriesData();
  }

  onSearchSelection = (country) =>{
    console.log(country);
    this.props.getCountryData(country);
    this.setState({ displayModel: true });
  }

  closeModel = () => {
    this.setState({ displayModel: false });
  }

  render(){
    console.log(this.props.updtSpecificCountryData);
    return (
      <div className="App">
        <Search countries={this.props.updtCountries} onSearchSelection={this.onSearchSelection} />
        <Global />
        {this.state.displayModel ?
         <PopUpComponent data={this.props.updtSpecificCountryData} closeModel={this.closeModel} /> : null }
        <Map countries={this.props.updtCountries} />
        <p>Information from www.worldometers.info</p>
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getInfectedCountriesData, getCountryData }, dispatch);
}

const mapStateToProps = ({ updtCountries, updtSpecificCountryData }) => {
  return { updtCountries, updtSpecificCountryData };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
