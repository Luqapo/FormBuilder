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
        type: '',
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
        if(this.props.handleDelete){
            this.props.handleDelete();
        } else {
            console.log('kasuje');
            const newState = this.state.formObject.map(item => item);
            newState.pop();
            this.setState({
                subInput: null,
                formObject: newState
            }, () => console.log(this.state))
        }
        
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
                subInput: <BuildWrapper type="yes/no" formObject={this.state.formObject}/>
            })
        } else if(this.state.type === "text"){
            this.setState({
                subInput: <BuildWrapper type="text" formObject={this.state.formObject}/>
            })
        } else if(this.state.type === "number"){
            this.setState({
                subInput: <BuildWrapper type="number" formObject={this.state.formObject}/>
            })
        }
    }

    handleSave = () => {
        async function putSomeData() {
            let db = await idb.open('db-name', 1, upgradeDB => upgradeDB.createObjectStore('objectStoreName', { autoIncrement: true }))
        
            let tx = db.transaction('objectStoreName', 'readwrite')
            let store = tx.objectStore('objectStoreName')
        
            await store.put(this.state.formObject);
        
            await tx.complete
            db.close()
        }
        putSomeData();
    }

    render() {
        let conditionElement;
        if(this.props.type === "yes/no"){
            conditionElement =  <RadioInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>   
        } else if(this.props.type === "text"){
            conditionElement = <TextInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>
        } else if(this.props.type === "number"){
            conditionElement = <NumberInput 
                                    handleChange={this.handleChange} 
                                    value={this.state.value} 
                                    condition={this.state.condition}/>
        }
        return (
            <div>
                <div className="Form">
                    {conditionElement}
                    <QuestionInput 
                        handleChange={this.handleChange}
                        handleDelete={this.handleDelete}
                        handleSave={this.handleSave}
                        handleAddInput={this.handleAddInput}
                        formObject={this.state.formObject}
                        question={this.state.question}
                        type={this.state.type}/>
                </div>
                {this.state.subInput}
            </div>
        )
    }
}

export default FormWrapper;