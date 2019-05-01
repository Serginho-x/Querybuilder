import * as type from './actions'
const initialState = {
    root: {},
    schema: {}
}

export default function (state= initialState, action){    
    switch(action.type){    
        case type.CREATE_RULE_GROUP: {
            console.log(action.payload);
            return {
                ...state,
                root: action.payload
            }
        }
        case type.COMBINATOR_CHANGE: {
            let root = state.root
            for(var prop in root) {
                // console.log('f' ,prop + ': ' + state.root[prop]);
                if(prop === 'id') {
                    
                    if(root[prop] === action.payload.groupId) {                       
                        root.combinator = action.payload.value                        
                        return {
                            ...state,
                                root: {
                                    ...state.root,
                                    combinator: action.payload.value}
                        };
                    }
                }
            }
            return state
        }  
        default:
            return state
    }
}

