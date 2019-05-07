import * as type from './actions';
import {omit, cloneDeep} from 'lodash';
import find from '../helpers/find';
import makeRoot from '../helpers/makeRoot'

const initialState = {
  root: {
    id: 'root-id',
    rules: []
  }
}

export default function (state = initialState, action) {
  const root = cloneDeep(state.root);
  switch (action.type) {
    case type.GET_ROOT: {    
      const root = makeRoot(action.payload)    
      return {...state, root}
    }
    case type.CREATE_RULE:
    case type.CREATE_RULE_GROUP: {
      const parent = find(action.payload.parentId, root);      
      const item = omit(action.payload, ['parentId', '__v', '_id']);     
      parent.rules.push(item);
      return {...state, root}
    }
    case type.DELETE_ITEM: {
      const parent = find(action.payload.parentId, root);
      const index = parent.rules.findIndex((item) => item.id === action.payload.id);
      parent.rules.splice(index, 1);
      return {...state, root}
    }
    case type.CHANGE_SELECT: {      
      const object = find(action.payload.id, root);
      object[action.payload.name]=action.payload.value
      return {...state, root};
    }
    default:
      return state
  }
}

