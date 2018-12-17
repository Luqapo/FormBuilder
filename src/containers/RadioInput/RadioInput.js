import React, { Component } from 'react';
import QuestionInput from '../QuestinInput/QuestionInput';

class RadioInput extends Component {

    state = {
        condiotion: '',
        input: null
    }

    handleCondiotion = (event) => {
        if(event.target.value === 'yes'){
            this.setState({
                condiotion: event.target.value,
                input: <QuestionInput handleDelete={this.handleDelete}/>
            })
        }  
    }

    handleDelete = () => {
        this.setState({
            input: null
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
                {this.state.input}
            </div>
        )
    }
}

export default RadioInput;