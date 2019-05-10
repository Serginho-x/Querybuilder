import * as type from './actions';
import {omit, cloneDeep} from 'lodash';
import find from '../helpers/find';

const initialState = {
  rootTop: [],
  root: null
}

export const assignRules = (parent, list) => {
  const children = list.filter(item => item.parentId === parent._id)
  const rest = list.filter(item => item.parentId !== parent._id)
  parent.rules = children.map(item => assignRules(omit(item,  ['parentId', 'name', 'rootId', '__v'] ), rest));
    return parent
}

export default function (state = initialState, action) {
  const root = cloneDeep(state.root);  
  switch (action.type) {
    case type.GET_DATABASE: {
        return {...state,  rootTop: action.payload.rootTop}
    }
    case type.GET_ROOT: {      
      const { items } = action.payload;
      const parent = omit(items.find(item => !item.parentId),  ['__v'] );
      const root = assignRules(parent, items)
        return { ...state, root : root}
    }
    case type.CREATE_RULE:
    case type.CREATE_RULE_GROUP: {       
      if (!action.payload.parentId) {
        const item = omit(action.payload, ['parentId', '__v']);
        state.rootTop.push(item);
          return {...state, root: item}
      } else {       
        const parent = find(action.payload.parentId, root);
        const item = omit(action.payload, ['rootId', 'parentId', '__v', 'name']);        
        parent.rules.push(item);
          return {...state, root}
      }
    }
    case type.UPDATE_ITEM: {   
      const object = find(action.payload._id, root);
      object[action.payload.name]=action.payload.value;
        return {...state, root};
    }
    case type.DELETE_RULE:
    case type.DELETE_RULE_GROUP: {
      if (action.payload.parentId) {
        const parent = find(action.payload.parentId, root);
        const index = parent.rules.findIndex((item) => item._id === action.payload._id);
        parent.rules.splice(index, 1);
          return {...state, root}
      } else {
        const rootTop = state.rootTop.slice();
        const index = rootTop.findIndex((item) => item._id === action.payload._id);
        rootTop.splice(index, 1);
          return {...state, root: null, rootTop}
      }
    }    
    default:
      return state
  }
}

