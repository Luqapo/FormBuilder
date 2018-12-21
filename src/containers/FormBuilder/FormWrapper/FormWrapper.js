import React, { Component } from 'react';

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
        subInput: []
    }

    handleDelete = (index) => {
        const newImputs = [...this.state.subInput]
        newImputs.splice(index, 1);
        this.setState({
            subInput: newImputs
        })  
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubInput = () => {
        this.props.handleSave(this.handleDataToPush(), this.props.index);
        let newSubInputs;
        if(!this.state.subInput.length === 0){
            newSubInputs = [...this.props.data.answers];
        } else {
            newSubInputs = [...this.state.subInput];
        }

        newSubInputs.push({ type: this.state.type })

        this.setState({
            subInput: newSubInputs
        });    
    }

    handleSave = (dataToPush, index) => {
        const newState = [...this.state.subInput];
        const newData = newState[index];
        newData.question = dataToPush.question;
        newData.condition = dataToPush.condition;
        if(!newData.newType){
            newData.newType = dataToPush.type;
        }
        newData.value = dataToPush.value;
        if(!newData.answers){
        newData.answers = [];
        } else {
            newData.answers = dataToPush.answers;
        }
        newState[index] = newData

        this.setState({
            subInput: newState
        }, () => {
            const newSave = {...this.props.data,
                answers: this.state.subInput}

            this.props.handleSave(newSave, this.props.index);
        })
    }

    validateSave = () => {
        if(this.state.question && (this.props.value || this.state.value) && !this.state.subInput.length){
            return true;
        }
        return false;
    }

    validateAdd = () => {
        if(this.state.question && (this.props.value || this.state.value)){
            return true;
        }
        return false;
    }

    handleDataToPush = () => {
        const objectToPush = {
            question: this.state.question,
            type: this.state.type,
            condition: this.state.condition,
            value: this.state.value,
            answers: []
        };
        return objectToPush;
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
            <div className="Margin">
                <div className="Form">
                    {conditionElement}
                    <QuestionInput 
                        handleChange={this.handleChange}
                        handleDelete={this.props.handleDelete}
                        index={this.props.index}
                        handleSave={() => this.props.handleSave(this.handleDataToPush(), this.props.index)}
                        handleAddInput={this.handleSubInput}
                        question={this.state.question}
                        disableSave={this.validateSave()}
                        disableAdd={this.validateAdd()}
                        type={this.state.type}/>
                </div>
                {this.state.subInput.map((el,index) => <BuildWrapper 
                                                    type={el.type}
                                                    key={index}
                                                    index={index}
                                                    data={this.state.subInput[index]}
                                                    handleSave={this.handleSave}
                                                    handleDelete={(index) => this.handleDelete(index)} />)}
            </div>
        )
    }
}

export default FormWrapper;