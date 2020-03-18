export default function(state=[], action){

    if(action.type === "updateCountriesData"){
        return action.payload.data;
    }
    
    return state;
}