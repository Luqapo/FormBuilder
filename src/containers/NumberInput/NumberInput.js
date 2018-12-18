import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class NumberInput extends Component {

    state = {
        value: '',
        condition: "==="
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleCondition = event => {
        this.setState({
            condition: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form>
                    <label>Condiotion
                        <select value={this.state.condition}>
                            <option value="===">Equals</option>
                            <option value=">">Greather than</option>
                            <option value="<">Less than</option>
                        </select>
                    </label>
                    <input type="number" onChange={this.handleChange} value={this.state.text}/>
                </form>
                <QuestionInput handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}

export default NumberInput;