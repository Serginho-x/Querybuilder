import React from 'react';
import '../styles/style.css';

export default class Rule extends React.Component {  

    render() {  
        return (
            <>
                <div className="rule">
                    <select 
                        defaultValue={this.props.field}
                        onChange={(e) => this.props.updateItem(e.target.value, this.props._id, 'field')}
                    >
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="age">Age</option>
                        <option value="address">Address</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="email">Twitter</option>
                    </select>
                    <select 
                        defaultValue={this.props.operator}
                        onChange={(e) => this.props.updateItem(e.target.value, this.props._id, 'operator')}
                    >
                        <option value=">">></option>
                        <option value="<">+</option>
                        <option value="!=">!=</option>
                        <option value="=">=</option>
                    </select>
                    <input type="text" value={this.props.value} onChange={(e) => this.props.updateItem(e.target.value, this.props._id, 'value')}></input>
                    <button onClick={() => this.props.deleteRule(this.props._id)}>X</button>
                </div>
            </>
        )
}}