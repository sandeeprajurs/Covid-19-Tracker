import axios from 'axios';
import * as urlConfig from "../config/config.json";

export default function getCountryData(country){
    const request = axios.get(`${urlConfig.default.all_countries}\\${country}`);

    return {
        type: "updateSpecificCountryData",
        payload: request
    }
}