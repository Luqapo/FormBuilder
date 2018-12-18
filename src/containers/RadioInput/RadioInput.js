import React, { Component } from 'react';
import QuestionInput from '../QuestinInput/QuestionInput';

class RadioInput extends Component {

    state = {
        condition: '===',
        value: ''
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Condiotion</label>
                    <select name="condition" onChange={this.handleChange}>
                        <option value="===">Equals</option>
                    </select>
                    <select name="value" onChange={this.handleChange}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
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

export default RadioInput;