import React, { Component } from 'react';
import idb from 'idb';

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

    handleSave = (data, index) => {
        const newForm = [...this.state.form];
        newForm[index] = data;
        this.setState({
            form: newForm
        })
    }

    handleSaveForm = (index) => {
        const data = this.state.form[index];
            idb.open('db-FormBuilder', 2)
            .then(db => {
                let tx = db.transaction('Forms', 'readwrite');
                let store = tx.objectStore('Forms')
                store.put(data);
                return tx.complete;
            })
            .then( result => console.log('object stored'))
    }

    render(){
        return (
            <div>
                <h3>Form builder</h3>
                {this.state.form.map((form,index) => 
                    <div key={index}>
                        <FormWrapper 
                                
                                index={index}
                                value
                                data={this.state.form[index]}
                                handleSave={this.handleSave} 
                                handleDelete={() => this.handleDelete(index)} />
                        <button onClick={() => this.handleSaveForm(index)}
                                disabled={!this.state.form[index].question}>Store Form</button>
                    </div>)}             
                <button onClick={this.handleAddInput}>Add Input</button>
            </div>
        )
    }
}

export default FormBuilder;