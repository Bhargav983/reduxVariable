import { SET_BANK_NAME,SET_AGENT_NAME } from "./types";

export const setBankName = (recieveBankName)=>{
    return{
            type:SET_BANK_NAME,
            payload:recieveBankName
    };
}


export const setAgentName = (recieveAgentName)=>{
    return{
            type:SET_AGENT_NAME,
            payload:recieveAgentName
    };
}