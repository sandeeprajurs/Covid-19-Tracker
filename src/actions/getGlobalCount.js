import axios from 'axios';
import * as urlConfig from "../config/config.json";

export default function getGlobalCount(){
    const request = axios.get(urlConfig.default.overall_count);

    return {
        type: "updateGlobalCount",
        payload: request
    }
}