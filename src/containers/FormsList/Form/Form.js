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
        const newResult = this.props.data.map(el => ({...el}));
        this.setState({
            formJson: this.props.data,
            formResult: newResult
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, () => {
            this.validateInput();
        })
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

    render(){
    
        const element = this.props.data[this.state.index];

        return (
            <div>
                <form className="Form">
                    <Input 
                        type={element.type} 
                        question={element.question} 
                        name="value"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        )
    }
}

export default Form;