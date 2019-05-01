import uniqueId from 'uuid/v4';

export const CREATE_RULE_GROUP = 'CREATE_RULE_GROUP';

export const createRuleGroup = () => { 
    return {
        type: CREATE_RULE_GROUP, 
        payload: {
        id: `g-${uniqueId()}`,
        rules: [],
        combinator: "and"
    }
    }
  };

export const COMBINATOR_CHANGE = 'COMBINATOR_CHANGE';
export const onCombinatorChange = (value, groupId) => {
   
    // const group = dispatch(findRule(ruleId));
    // Object.assign(rule, { [prop]: value });
    return {
        type: COMBINATOR_CHANGE, 
        payload: { 
            value: value,
            groupId: groupId 
        }
  }
}

// const findRule = (id, parent) => {
   
//     const { isRuleGroup } = this.state.schema;

//     if (parent.id === id) {
//       return parent;
//     }

//     for (const rule of parent.rules) {
//       if (rule.id === id) {
//         return rule;
//       } else if (isRuleGroup(rule)) {
//         const subRule = this._findRule(id, rule);
//         if (subRule) {
//           return subRule;
//         }
//       }
//     }
//   }