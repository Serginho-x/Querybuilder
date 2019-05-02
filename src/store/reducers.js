import * as type from './actions';
import cloneDeep from 'lodash/cloneDeep';
import find from '../helpers/find';

const initialState = {
    root: {},
    schema: {}
}

export default function (state=initialState, action){    
    switch(action.type){    
        case type.CREATE_RULE_GROUP: {
            let root = cloneDeep(state.root); 
            if (action.payload.parentId === null){
                return {
                    ...state,
                    root: {
                        ...state.root,
                        id: action.payload.id,
                        rules: action.payload.rules,
                        combinator: action.payload.combinator}
                }
            }     
            const parent = find(action.payload.parentId, root);      
            parent.rules.push({
                id: action.payload.id,
                rules: action.payload.rules,
                combinator: action.payload.combinator
            }); 
            return {
                ...state,
                root: root
            }
        }
        case type.CREATE_RULE: {
            let root = cloneDeep(state.root);             
            const parent = find(action.payload.parentId, root);      
            parent.rules.push({
                id: action.payload.id,
                field: action.payload.field,
                value: action.payload.value,
                operator: action.payload.operator
            }); 
            return {
                ...state,
                root: root
            }
        }
        case type.DELETE_ITEM: {
            let root = cloneDeep(state.root)
            const parent = find(action.payload.parentId, root);
            const index = parent.rules.findIndex((item) => item.id === action.payload.groupId);
            parent.rules.splice(index, 1);
            return {
                ...state,
                root: root
            }
        } 
        case type.CHANGE_SELECT: {
            let root = cloneDeep(state.root)
            const item = find(action.payload.groupId, root);
            switch (action.payload.name){
                case 'combinator': {
                  item.combinator = action.payload.value;                  
                  return {
                        ...state,
                        root: root
                    }
                }
                case 'field': {
                    item.field = action.payload.value;                  
                    return {
                          ...state,
                          root: root
                      }
                  }
                  case 'operator': {
                    item.operator = action.payload.value;                  
                    return {
                          ...state,
                          root: root
                      }
                  }
                  case 'value': {
                    item.value = action.payload.value;                  
                    return {
                          ...state,
                          root: root
                      }
                  }
                default:
                return root
            }        
        }  
        default:
            return state
    }
}

