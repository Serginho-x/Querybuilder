import React from 'react';
import Rule from './Rule';
import '../styles/style.css';

export default class RuleGroup extends React.Component {
  
  render() { 
    return (
      <>
        <div className="rule-group">
          <select 
              disabled={this.props.id === 'root-id'}
              defaultValue={this.props.combinator}
              onChange={(e) => this.props.onChangeSelect(e.target.value, this.props.id, 'combinator')}
          >
              <option value="and">AND</option>
              <option value="or">OR</option>
          </select>

          <button onClick={() => this.props.createRule(this.props.id)}>+Rule</button>
          <button onClick={() => this.props.createRuleGroup(this.props.id)}>+Group</button>
          <button disabled={this.props.id === 'root-id'} onClick={() => this.props.deleteItem(this.props.id)}>X</button>

          {this.props.rules.map((rule) => { 
            return rule.combinator && rule.rules ? (
              <RuleGroup 
                  key={rule.id}
                  id={rule.id}
                  parentId={this.props.id}
                  rules={rule.rules}              
                  onChangeSelect={this.props.onChangeSelect}                 
                  createRuleGroup={this.props.createRuleGroup}
                  createRule={this.props.createRule}
                  deleteItem={this.props.deleteItem}
                  combinator={rule.combinator}             
                  
              />
            ) : (
              <Rule 
                key={rule.id}
                id={rule.id}
                parentId={this.props.id}
                onChangeSelect={this.props.onChangeSelect}
                deleteItem={this.props.deleteItem}
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