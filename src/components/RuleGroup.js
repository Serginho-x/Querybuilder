import React from 'react';
import Rule from './Rule';

export default class RuleGroup extends React.Component {
  static get defaultProps() {
    return {
      id: null,
      parentId: null,
      rules: [],
      combinator: 'and',
      schema: {}
    };
  }

  render() {
   
    return (
        <div style={{border: '1px solid orange', backgroundColor:'yellow'}}>
        <select onChange={(e) => this.props.onCombinatorChange( e.target.value, this.props.id )}>
            <option value="and">-AND</option>
            <option value="or">OR</option>
        </select>

       <button onClick={() => null}>+Rule</button>
       <button onClick={() => null}>+Group</button>
       <button onClick={() => null}>X</button>
        </div>
)
     
    
  }

  hasParentGroup() {
    return this.props.parentId;
  }

  onCombinatorChange = (value) => {
    const { onPropChange } = this.props.schema;

    onPropChange('combinator', value, this.props.id);
  };

  addRule = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { createRule, onRuleAdd } = this.props.schema;

    const newRule = createRule();
    onRuleAdd(newRule, this.props.id);
  };

  addGroup = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { createRuleGroup, onGroupAdd } = this.props.schema;
    const newGroup = createRuleGroup();
    onGroupAdd(newGroup, this.props.id);
  };

  removeGroup = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.schema.onGroupRemove(this.props.id, this.props.parentId);
  };
}