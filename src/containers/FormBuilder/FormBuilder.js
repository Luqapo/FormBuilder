import React, { Component } from 'react';

import QuestionInput from './QuestinInput/QuestionInput';

class FormBuilder extends Component {
    state = {
        form: []
    }

    handleAddInput = () => {
        const newState = this.state.form.map(item => item);
        newState.push([]);
        this.setState({
            form: newState
        })
    }

    handleDelete = (index) => {
        const newState = this.state.form.map(item => item);
        newState.splice(index, 1);
        this.setState({
            form: newState
        })
    }

    render(){
        return (
            <div>
                {this.state.form.map((form,index) => 
                    <QuestionInput key={index} 
                            handleDelete={() => this.handleDelete(index)} 
                            handleSave={this.handleSave}/>)}             
                <button onClick={this.handleAddInput}>Add Input</button>
            </div>
        )
    }
}

export default FormBuilder;