import React from 'react';
import Rule from './Rule';
import '../styles/style.css';

export default class RuleGroup extends React.Component {
  static get defaultProps() {
    return { 
      rules: []         
    };
  }

  render() {  
    return (
      <>
        <div className="rule-group">
          <select onChange={(e) => this.props.onChangeSelect(e.target.value, this.props.id, 'combinator')}>
              <option value="and">AND</option>
              <option value="or">OR</option>
          </select>

          <button onClick={() => this.props.createRule(this.props.id)}>+Rule</button>
          <button onClick={() => this.props.createRuleGroup(this.props.id)}>+Group</button>
          <button disabled={this.props.parentId === null} onClick={() => this.props.deleteItem(this.props.id, this.props.parentId)}>X</button>

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
                  
              />
            ) : (
              <Rule 
                key={rule.id}
                id={rule.id}
                parentId={this.props.id}
                onChangeSelect={this.props.onChangeSelect}
                deleteItem={this.props.deleteItem}
              />
            )
          })}
        </div>    
      </>
    )
  } 
}