import React, { Component } from 'react';

import Input from '../../../components/Input/Input';

class Form extends Component {
    state = {
        value: '',
        formJson: '',
        formResult: [],
        index: 0
    }

    componentDidMount(){
        const newResult = this.props.data.map( el => [ el.question ] )
        this.setState({
            formJson: this.props.data,
            formResult: newResult
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, () => {
            this.checkIndex();
        })
    }

    checkIndex = () => {
        if(this.state.index < this.state.formJson.length-1){
            this.validateInput();
        }
    }

    validateInput = () => {
        if(this.state.formJson[this.state.index + 1].condition === "==="){
            if(this.state.formJson[this.state.index + 1].value === this.state.value){
                const newReasult = {...this.state.formResult};
                newReasult[this.state.index].answer = this.state.value
                this.setState({
                    formResult: newReasult,
                    index: this.state.index + 1,
                    value: ''
                })
            }
        } else if(this.state.formJson[this.state.index + 1].condition === ">"){
            if(Number(this.state.formJson[this.state.index + 1].value) < Number(this.state.value)){
                const newReasult = {...this.state.formResult};
                newReasult[this.state.index].answer = this.state.value
                this.setState({
                    formResult: newReasult,
                    index: this.state.index + 1,
                    value: ''
                })
            }
        } else if(this.state.formJson[this.state.index + 1].condition === "<"){
            if(Number(this.state.formJson[this.state.index + 1].value) > Number(this.state.value)){
                const newReasult = {...this.state.formResult};
                newReasult[this.state.index].answer = this.state.value
                this.setState({
                    formResult: newReasult,
                    index: this.state.index + 1,
                    value: ''
                })
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newReasult = {...this.state.formResult};
                newReasult[this.state.index].answer = this.state.value
                this.setState({
                    formResult: newReasult
                }, () => console.log(this.state.formResult))
    }

    render(){
    
        const element = this.props.data[this.state.index];
        let endInfo = null;
        if(this.state.index === this.state.formJson.length-1){
            endInfo = <p>No more questions. Thanks</p>
        }

        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit}>
                    <Input 
                        type={element.type} 
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