import uniqueId from 'uuid/v4';

export const CREATE_RULE_GROUP = 'CREATE_RULE_GROUP';
export const createRuleGroup = (parentId) => { 
    return {
        type: CREATE_RULE_GROUP, 
        payload: {
            id: `g-${uniqueId()}`,
            rules: [],
            combinator: "and",
            parentId
        }
    }
};

export const CREATE_RULE = 'CREATE_RULE';
export const createRule = (parentId) => { 
    return {
        type: CREATE_RULE, 
        payload: {
            id: `r-${uniqueId()}`,
            field: "firstName",
            value: "",
            operator: "null",
            parentId
        }
    }
};

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (groupId, parentId) => { 
    return {
        type: DELETE_ITEM, 
        payload: {
            groupId,
            parentId
        }
    }
};

export const CHANGE_SELECT = 'CHANGE_SELECT';
export const onChangeSelect = (value, id, name) => {
    return {
        type: CHANGE_SELECT, 
        payload: { 
            value,
            id,
            name
        }
    }
}
