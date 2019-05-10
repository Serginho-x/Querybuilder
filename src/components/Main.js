import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import RuleGroup from './RuleGroup';
import '../styles/style.css';

class Main extends React.Component {
  state = {
    value: "",
    isVisible: false
  }

  componentDidMount(){
    this.props.getDataBase();
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleToggleList = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  handleSubmit = (event) => {
    event.preventDefault();                                                  
    (this.state.value !== '') && this.props.createRuleGroup(null, this.state.value);
    this.setState({ value: '' })
  }

  render() {
    return (
      <>      
        <button className="button margin-left" onClick={this.handleToggleList}>Show list of roots</button>
        <div className="container">
          <div className={this.state.isVisible ? "hidden" : "root-container"}>        
              <input maxLength="12" value={this.state.value} className="input" onChange={this.handleInputChange}/>
              <button className="button" onClick={this.handleSubmit}>Add root</button>
                {this.props.rootTop.map((rootTop) => {
                  return (
                  <div key={rootTop._id} >
                    <button className="root-select" onClick={() => this.props.getRoot(rootTop)}>{rootTop.name}</button>
                    <button onClick={() => this.props.deleteRuleGroup(rootTop._id)}>X</button> 
                  </div>
                  )
                })}
          </div>
          {this.props.root && 
            <>
              <div className="group">
                <RuleGroup
                  _id={this.props.root._id}
                  root={this.props.root}  
                  rules={this.props.root.rules}            
                  createRuleGroup={this.props.createRuleGroup}
                  createRule={this.props.createRule}
                  updateItem={this.props.updateItem}
                  deleteRuleGroup={this.props.deleteRuleGroup}
                  deleteRule={this.props.deleteRule}
                  name={this.props.root.name}
                  rootId={this.props.root.rootId}
                />
              </div>        
              <pre className="query">{JSON.stringify(this.props.root, null, 2)}</pre>
            </>
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = store => {
  return {  
    root: store.root,
    rootTop: store.rootTop
  }
}

export default connect(
  mapStateToProps,
  actions
)(Main)