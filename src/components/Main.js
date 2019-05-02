import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import RuleGroup from './RuleGroup';
import '../styles/style.css';

class Main extends React.Component {  

    componentDidMount() {        
        this.props.createRuleGroup(null, null);
    } 

    render(){
        const root = JSON.stringify(this.props.root, null, 2);
        return(
        <div className="container">            
            <div className="group">
                <RuleGroup 
                    id={this.props.root.id}
                    parentId={null}
                    rules={this.props.root.rules}
                    onChangeSelect={this.props.onChangeSelect}
                    createRuleGroup={this.props.createRuleGroup}
                    createRule={this.props.createRule}
                    deleteItem={this.props.deleteItem}                
                />
            </div> 
            <pre className="query">{root}</pre>
        </div>
    )}
}

const mapStateToProps = store => {
    return {
     root: store.root
  }
}

export default connect(
    mapStateToProps,
    actions
)(Main)