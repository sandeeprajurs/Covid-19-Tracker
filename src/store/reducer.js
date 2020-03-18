import {CombineReducers, combineReducers} from 'redux';
import updateCountriesDataReducer from "./updateCountriesData_reducer.js";
import updateGlobalCountReducer from "./globalCount_redicer.js";
import updateSpecificCountryData from "./updateSpecificCountryData.js";

const allReducers = combineReducers({
    updtCountries: updateCountriesDataReducer,
    updtGlobalCount: updateGlobalCountReducer,
    updtSpecificCountryData: updateSpecificCountryData
});

export default allReducers;