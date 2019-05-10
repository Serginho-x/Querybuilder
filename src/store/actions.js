import axios from 'axios';

const rulesUrl = 'http://localhost:4000/api/rules'

export const GET_DATABASE = 'GET_DATABASE';
export const getDataBase = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${rulesUrl}`);       
            dispatch({
                type: GET_DATABASE, 
                payload: response.data 
            }); 
        }
        catch {
            console.error();
        }
    }
}

export const GET_ROOT = 'GET_ROOT';
export const getRoot = (rootTop) => {   
    return async (dispatch) => { 
        try {
            const response = await axios.get(`${rulesUrl}`, {params: {name: rootTop.name, rootId: rootTop.rootId}});
            dispatch({
                type: GET_ROOT, 
                payload: {
                    items: response.data.rootItems
                }
            });
        }
        catch {
            console.error();
        }     
    }
}

export const CREATE_RULE_GROUP = 'CREATE_RULE_GROUP';
export const createRuleGroup = (parentId, name, rootId) => { 
    return async (dispatch) => {
        try {
            const response = await axios.post(`${rulesUrl}/addRuleGroup`, {parentId, name, rootId});
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
export const createRule = (parentId, name, rootId) => {
    return async (dispatch) => {
        try {            
            const response = await axios.post(`${rulesUrl}/addRule`, {parentId, name, rootId});            
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

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (value, id, name) => {
    return async (dispatch) => {
        try { 
            let response;
            if (name==='combinator'){
                response = await axios.put(`${rulesUrl}/updateRuleGroup/${id}`, {value, name});
            } else {
                response = await axios.put(`${rulesUrl}/updateRule/${id}`, {value, name});
            }
            dispatch({
                type: UPDATE_ITEM, 
                payload: response.data
            });            
        }
        catch {
            console.error();
        }
    }
}

export const DELETE_RULE_GROUP = 'DELETE_RULE_GROUP';
export const deleteRuleGroup = (itemId) => { 
    return async (dispatch) => {
        try {            
            const response = await axios.delete(`${rulesUrl}/deleteRuleGroup/${itemId}`);            
            dispatch({
                type: DELETE_RULE_GROUP, 
                payload: response.data
            });            
        }
        catch {
            console.error();
        }
    }   
};

export const DELETE_RULE = 'DELETE_RULE';
export const deleteRule = (itemId) => { 
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${rulesUrl}/deleteRule/${itemId}`);            
            dispatch({
                type: DELETE_RULE, 
                payload: response.data
            });            
        }
        catch {
            console.error();
        }
    }   
};