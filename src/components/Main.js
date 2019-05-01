import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import RuleGroup from './RuleGroup'


class Main extends React.Component {  

    componentDidMount() {        
        this.props.createRuleGroup();
        console.log(this.props.root)
    } 

    render(){
        const root = JSON.stringify(this.props.root);
        return(
        <>
            <pre>{root}</pre>
            <RuleGroup 
                id={this.props.root.id}
                onCombinatorChange={this.props.onCombinatorChange}/>
        </>
        
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