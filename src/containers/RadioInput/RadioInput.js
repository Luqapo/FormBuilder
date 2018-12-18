import React, { Component } from 'react';
import QuestionInput from '../QuestinInput/QuestionInput';

class RadioInput extends Component {

    state = {
        condiotion: '',
        input: null
    }

    handleCondiotion = (event) => {
        this.setState({
            condiotion: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Condiotion</label>
                    <select onChange={this.handleCondiotion}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </form>
                <QuestionInput handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}

export default RadioInput;