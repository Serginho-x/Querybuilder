import React from 'react';
import '../styles/style.css';

export default class Rule extends React.Component {  

    render() {  
        return (
            <>
                <div className="rule">
                    <select onChange={(e) => this.props.onChangeSelect(e.target.value, this.props.id, 'field')}>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="age">Age</option>
                        <option value="address">Address</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="email">Twitter</option>
                    </select>
                    <select onChange={(e) => this.props.onChangeSelect(e.target.value, this.props.id, 'operator')}>
                        <option value=">">></option>
                        <option value="<">+</option>
                        <option value="!=">!=</option>
                        <option value="=">=</option>
                    </select>
                    <input type="text" onChange={(e) => this.props.onChangeSelect(e.target.value, this.props.id, 'value')}></input>
                    <button onClick={() => this.props.deleteItem(this.props.id, this.props.parentId)}>X</button>
                </div>
            </>
        )
}}