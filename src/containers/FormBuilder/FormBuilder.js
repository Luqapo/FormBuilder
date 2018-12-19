import React, { Component } from 'react';

import FormWrapper from './FormWrapper/FormWrapper';

class FormBuilder extends Component {
    state = {
        form: []
    }

    handleAddInput = () => {
        const newState = [...this.state.form];
        newState.push([]);
        this.setState({
            form: newState
        })
    }

    handleDelete = (index) => {
        const newState = [...this.state.form];
        newState.splice(index, 1);
        this.setState({
            form: newState
        })
    }

    render(){
        return (
            <div>
                <h3>Form builder</h3>
                {this.state.form.map((form,index) => 
                    <FormWrapper 
                            key={index} 
                            handleDelete={() => this.handleDelete(index)} 
                            />)}             
                <button onClick={this.handleAddInput}>Add Input</button>
            </div>
        )
    }
}

export default FormBuilder;