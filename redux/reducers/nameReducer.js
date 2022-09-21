import { SET_AGENT_NAME } from "../actions/types"

const initialState ={name:'Shiva'}
export default (state=initialState,action)=>{
    switch(action.type){
     
        case SET_AGENT_NAME:
            return action.payload;
        default:
            return state;
    }
}