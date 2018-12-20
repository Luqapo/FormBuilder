import React, { Component } from 'react';
import idb from 'idb';

import QuestionInput from '../../../components/FromBuilder/QuestinInput/QuestionInput';
import TextInput from '../../../components/FromBuilder/TextInput/TextInput';
import NumberInput from '../../../components/FromBuilder/NumberInput/NumberInput';
import RadioInput from '../../../components/FromBuilder/RadioInput/RadioInput';
import BuildWrapper from '../../../components/BuildWrapper/BuildWrapper'

class FormWrapper extends Component {
    state = {
        question: '',
        type: 'text',
        condition: "===",
        value: '',
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

    handleDelete = () => {
        const newState = this.state.formObject.map(item => item);
        newState.pop();
        this.setState({
            subInput: null,
            formObject: newState
        })  
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleAddInput = () => {
            const object = {
                question: this.state.question,
                type: this.state.type,
                condition: this.state.condition,
                value: this.state.value
            };

            const newState = [...this.state.formObject];
            newState.push(object);

            this.setState({
                formObject: newState
            }, ()=> this.handleSubImput() );
    }

    handleSubImput = () => {
        if(this.state.type === "yes/no"){
            this.setState({
                subInput: <BuildWrapper 
                            type="yes/no"
                            formObject={this.state.formObject} 
                            handleDelete={this.handleDelete}/>
            });
        } else if(this.state.type === "text"){
            this.setState({
                subInput: <BuildWrapper 
                            type="text" 
                            formObject={this.state.formObject} 
                            handleDelete={this.handleDelete}/>
            });
        } else if(this.state.type === "number"){
            this.setState({
                subInput: <BuildWrapper 
                            type="number" 
                            formObject={this.state.formObject} 
                            handleDelete={this.handleDelete}/>
            });
        }
    }

    handleSave = () => {
            const object = {
                question: this.state.question,
                type: this.state.type,
                condition: this.state.condition,
                value: this.state.value
            };

            const newState = [...this.state.formObject];
            newState.push(object);

            this.setState({
                formObject: newState
            }, ()=> this.saveForm() );
    }

    saveForm = () => {
        const data = this.state.formObject;
            idb.open('db-FormBuilder', 2)
            .then(db => {
                let tx = db.transaction('Forms', 'readwrite');
                let store = tx.objectStore('Forms')
                store.put(data);
                return tx.complete;
            })
            .then( result => console.log('object stored'))
    }

    validateInputs = () => {
        if(this.state.question && (this.props.value || this.state.value) && !this.state.subInput){
            return true;
        }
        return false;
    }

    render() {
        let conditionElement;
        if(this.props.type === "yes/no"){
            conditionElement =  <RadioInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>;   
        } else if(this.props.type === "text"){
            conditionElement = <TextInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>;
        } else if(this.props.type === "number"){
            conditionElement = <NumberInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>;
        }

        return (
            <div>
                <div className="Form">
                    {conditionElement}
                    <QuestionInput 
                        handleChange={this.handleChange}
                        handleDelete={this.props.handleDelete}
                        handleSave={this.handleSave}
                        handleAddInput={this.handleAddInput}
                        formObject={this.state.formObject}
                        question={this.state.question}
                        disabled={this.validateInputs()}
                        disableDelete={this.state.subInput}
                        type={this.state.type}/>
                </div>
                {this.state.subInput}
            </div>
        )
    }
}

export default FormWrapper;