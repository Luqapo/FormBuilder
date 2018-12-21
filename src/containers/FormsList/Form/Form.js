import React, { Component } from 'react';

import Input from '../../../components/Input/Input';

class Form extends Component {
    state = {
        value: '',
        formJson: '',
        formResult: []
    }

    componentDidMount(){
        this.setState({
            formJson: this.props.data
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, () => this.validateInput())
    }

    validateInput = () => {
        this.state.formJson.answers.forEach(el => {
            if(el.value === this.state.value){
                const answers = [...this.state.formResult];
                answers.push({ question: this.state.formJson.question, answer: this.state.value })
                this.setState({
                    formJson: el,
                    value: '',
                    formResult: answers
                })
            }
        })  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newResult = [...this.state.formResult];
                newResult.push({question: this.state.formJson.question, answer: this.state.value });
                this.setState({
                    formResult: newResult
                }, () => console.log(this.state.formResult) )
    }

    render(){
        let endInfo = null;
        const element = {...this.state.formJson};
        if(this.state.formJson){
            if(element.answers.length === 0){
                endInfo = <p>No more questions. Thanks</p>;
            }
        }
        
        let inputType = element.newType
        if(!element.newType){
            inputType = element.type
        }

        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit}>
                    <Input 
                        type={inputType} 
                        question={element.question} 
                        name="value"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                    {endInfo}
                    <button type="submit" disabled={!endInfo}>Submit</button>
                </form>
            </div>

        )
    }
}

export default Form;