import React, { Component } from 'react';

import RadioInput from '../RadioInput/RadioInput';
import TextInput from '../TextInput/TextInput';
import NumberInput from '../NumberInput/NumberInput';

import './QuestionInput.css';

class QuestionInput extends Component {
    state = {
        question: '',
        type: 'text',
        subInput: null
    }

    handleType = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleQuestion = (event) => {
        this.setState({
            question: event.target.value
        })
    }

    handleSubImput = (event) => {
        if(this.state.type === "yes/no"){
            this.setState({
                subInput: <RadioInput />
            })
        } else if(this.state.type === "text"){
            this.setState({
                subInput: <TextInput />
            })
        } else {
            this.setState({
                subInput: <NumberInput />
            })
        }
    }

    render(){
        return (
            <div className="Input">
                <form>
                    <input 
                        type="text" 
                        name="question" 
                        placeholder="Your question?"
                        value={this.state.question}
                        onChange={this.handleQuestion}/>
                    <select value={this.state.type} onChange={this.handleType}>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="yes/no">Yes/No</option>
                    </select>
                </form>
                <button onClick={this.handleSubImput}>Add Sub-Input</button>
                <button onClick={this.props.handleDelete}>Delete</button>
                {this.state.subInput}
            </div>
        )
    }
}

export default QuestionInput;