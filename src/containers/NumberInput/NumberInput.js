import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class NumberInput extends Component {

    state = {
        value: '',
        condition: 'equals'
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
                            <option value="equals">Equals</option>
                            <option value="greater">Greather than</option>
                            <option value="less">Less than</option>
                        </select>
                    </label>
                    <input type="number" onChange={this.handleChange} value={this.state.text}/>
                </form>
                {this.state.value ? <QuestionInput /> : null}
            </div>
        )
    }
}

export default NumberInput;