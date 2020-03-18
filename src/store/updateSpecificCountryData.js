export default function(state=[], action){

    if(action.type === "updateSpecificCountryData"){
        return action.payload.data;
    }
    
    return state;
}