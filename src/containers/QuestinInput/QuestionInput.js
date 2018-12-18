import React, { Component } from 'react';

import RadioInput from '../RadioInput/RadioInput';
import TextInput from '../TextInput/TextInput';
import NumberInput from '../NumberInput/NumberInput';

import './QuestionInput.css';

class QuestionInput extends Component {
    state = {
        question: '',
        type: 'text',
        subInput: null,
        formObject: []
    }

    componentDidMount(){
        if(this.props.formObject){
            this.setState({
                formObject: this.props.formObject
            })
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleDelete = () => {
        const newState = this.state.formObject.map(item => item);
        newState.pop();
        this.setState({
            subInput: null,
            formObject: newState
        })
    }

    handleAddInput = () => {
        const object = {
            question: this.state.question,
            type: this.state.type,
            condition: this.props.condition,
            value: this.props.value
        }

        const newState = this.state.formObject.map(item => item);
        newState.push(object);

        console.log(newState);

        this.setState({
            formObject: newState
        }, ()=> this.handleSubImput() );
    }
 
    handleSubImput = () => {
        if(this.state.type === "yes/no"){
            this.setState({
                subInput: <RadioInput handleDelete={this.handleDelete} formObject={this.state.formObject}/>
            })
        } else if(this.state.type === "text"){
            this.setState({
                subInput: <TextInput handleDelete={this.handleDelete} formObject={this.state.formObject}/>
            })
        } else {
            this.setState({
                subInput: <NumberInput handleDelete={this.handleDelete} formObject={this.state.formObject}/>
            })
        }
    }

    render(){
        return (
            <div className="Input">
                <form className="Form">
                    <input 
                        type="text" 
                        name="question" 
                        placeholder="Your question?"
                        value={this.state.question}
                        onChange={this.handleChange}/>
                    <select 
                            value={this.state.type} 
                            onChange={this.handleChange}
                            name="type">
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="yes/no">Yes/No</option>
                    </select>
                </form>
                <button onClick={this.handleAddInput}>Add Sub-Input</button>
                <button onClick={this.props.handleDelete}>Delete</button>
                {this.state.subInput}
            </div>
        )
    }
}

export default QuestionInput;