import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class NumberInput extends Component {

    state = {
        condition: "===",
        value: ''
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form>
                    <label>Condiotion
                        <select value={this.state.condition}
                                name="condition"
                                onChange={this.handleChange}>
                            <option value="===">Equals</option>
                            <option value=">">Greather than</option>
                            <option value="<">Less than</option>
                        </select>
                    </label>
                    <input type="number" 
                           name="value"
                           onChange={this.handleChange} 
                           value={this.state.text}/>
                </form>
                <QuestionInput 
                    handleDelete={this.props.handleDelete}
                    formObject={this.props.formObject}
                    condition={this.state.condition}
                    value={this.state.value}/>
            </div>
        )
    }
}

export default NumberInput;