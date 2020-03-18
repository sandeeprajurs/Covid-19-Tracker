import axios from 'axios';
import * as urlConfig from "../config/config.json";

export default function getInfectedCountriesData(){
    const request = axios.get(urlConfig.default.all_countries);

    return {
        type: "updateCountriesData",
        payload: request
    }
}