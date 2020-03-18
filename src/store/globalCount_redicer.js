export default function(state=[], action){

    if(action.type == "updateGlobalCount")
        return action.payload.data;
    
    return state;
}