import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Main extends React.Component {  
    render(){
        return(
        <div>dsa</div>
            )    }

}

const mapStateToProps = store => {
    return {
     
  }
}

export default connect(
    mapStateToProps,
    actions
)(Main)