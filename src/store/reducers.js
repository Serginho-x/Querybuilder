import * as type from './actions';
import {omit, cloneDeep} from 'lodash';
import find from '../helpers/find';

const initialState = {
  root: {
    rules: [],
    combinator: 'and'
  }
}

export default function (state = initialState, action) {
  const root = cloneDeep(state.root);

  switch (action.type) {

    case type.CREATE_RULE:
    case type.CREATE_RULE_GROUP: {
      const parent = find(action.payload.parentId, root);
      const item = omit(action.payload, ['parentId']);
      parent.rules.push(item);
      return {
        ...state,
        root: root
      }
    }

    case type.DELETE_ITEM: {
      const parent = find(action.payload.parentId, root);
      const index = parent.rules.findIndex((item) => item.id === action.payload.groupId);
      parent.rules.splice(index, 1);
      return {
        ...state,
        root: root
      }
    }

    case type.CHANGE_SELECT: {
      const item = find(action.payload.id, root);
      item[action.payload.name] = action.payload.value;
      return { ...state, root };
    }

    default:
      return state
  }
}

