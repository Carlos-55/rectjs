import { types } from "../types/type";

/**
 * 
 * @param {uid: string, name: string} state 
 * @param {action realized in the method with properties} action 
 */
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            };
        case types.logout:
            return {};  
        default:
            break;
    }
}