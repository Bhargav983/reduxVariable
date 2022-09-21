import { SET_BANK_NAME } from "../actions/types"

const initialState ={
    bank:'SBI'
}
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_BANK_NAME:
            return  action.payload;
                
              
        // case SET_AGENT_NAME:
        //     return {...state.bank},action.payload;
        default:
            return state;
    }
}