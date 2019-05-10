import React from 'react';
import Rule from './Rule';
import '../styles/style.css';

export default class RuleGroup extends React.Component {
  
  render() { 
    return (
      <>
        <div className="rule-group">
          <select
              defaultValue={this.props.combinator}
              onChange={(e) => this.props.updateItem(e.target.value, this.props._id, 'combinator')}
          >
              <option value="and">AND</option>
              <option value="or">OR</option>
          </select>

          <button onClick={() => this.props.createRule(this.props._id, this.props.name, this.props.rootId)}>+Rule</button>
          <button onClick={() => this.props.createRuleGroup(this.props._id, this.props.name, this.props.rootId)}>+Group</button>
          <button onClick={() => this.props.deleteRuleGroup(this.props._id)}>X</button>

          {this.props.rules.map((rule) => { 
            return rule.combinator && rule.rules ? (             
              <RuleGroup 
                key={rule._id}
                _id={rule._id}
                parentId={this.props._id}
                name={this.props.name}
                rootId={this.props.rootId}
                rules={rule.rules}                            
                createRuleGroup={this.props.createRuleGroup}
                createRule={this.props.createRule}
                updateItem={this.props.updateItem}
                deleteRuleGroup={this.props.deleteRuleGroup}
                deleteRule={this.props.deleteRule}                 
                combinator={rule.combinator}
              />             
            ) : (
              <Rule 
                key={rule._id}
                _id={rule._id}
                parentId={this.props._id}
                name={this.props.name}
                rootId={this.props.rootId}
                updateItem={this.props.updateItem}
                deleteRule={this.props.deleteRule}
                operator={rule.operator}
                field={rule.field}
                value={rule.value}
              />
            )
          })}
        </div>    
      </>
    )
  } 
}