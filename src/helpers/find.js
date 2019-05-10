const find = (id, parent) => {
  if(id === parent._id) {  
    return parent;
  }

  for (const rule of parent.rules) {
    if (rule._id === id) {
      return rule;
    } else if (rule.combinator && rule.rules) {
      const subRule = find(id, rule);
      if (subRule) {
        return subRule;
      }
    }
  }
}

export default find