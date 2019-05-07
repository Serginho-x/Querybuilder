import uniqueId from 'uuid/v4';
import axios from 'axios';

const rulesUrl = 'http://localhost:4000/api/rules'

export const GET_ROOT = 'GET_ROOT';
export const getRoot = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${rulesUrl}`);            
            dispatch({
                type: GET_ROOT, 
                payload: response.data 
            }); 
        }
        catch {
            console.error();
        }
    }
}

export const CREATE_RULE_GROUP = 'CREATE_RULE_GROUP';
export const createRuleGroup = (parentId) => { 
    return async (dispatch) => {
        try {
            const response = await axios.post(`${rulesUrl}/addRuleGroup`, {id: `g-${uniqueId()}`, parentId});
            dispatch({
                type: CREATE_RULE_GROUP, 
                payload: response.data 
            });            
        }
        catch {
            console.error();
        }
    }   
};

export const CREATE_RULE = 'CREATE_RULE';
export const createRule = (parentId) => {
    return async (dispatch) => {
        try {            
            const response = await axios.post(`${rulesUrl}/addRule`, {id: `r-${uniqueId()}`, parentId});            
            dispatch({
                type: CREATE_RULE, 
                payload: response.data 
            });            
        }
        catch {
            console.error();
        }
    }   
};

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (itemId) => { 
    return async (dispatch) => {
        try {            
            const response = await axios.delete(`${rulesUrl}/${itemId}`);            
            dispatch({
                type: DELETE_ITEM, 
                payload: response.data
            });            
        }
        catch {
            console.error();
        }
    }   
};

export const CHANGE_SELECT = 'CHANGE_SELECT';
export const onChangeSelect = (value, id, name) => {
    return async (dispatch) => {
        try { 
            const response = await axios.put(`${rulesUrl}/${id}`, {value, name});           
            dispatch({
                type: CHANGE_SELECT, 
                payload: response.data
            });            
        }
        catch {
            console.error();
        }
    }
}
