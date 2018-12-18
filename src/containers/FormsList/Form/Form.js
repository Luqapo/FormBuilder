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
        this.setState({
            formJson: this.props.data,
            formResult: this.props.data
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
            if(this.state.formJson[this.state.index + 1].value < this.state.value){
                console.log(this.state.formJson[this.state.index+1].value);
                console.log(this.state.value);
                console.log(this.state.index);
                const newReasult = {...this.state.formResult};
                newReasult[this.state.index].answer = this.state.value
                this.setState({
                    formResult: newReasult,
                    index: this.state.index + 1,
                    value: ''
                }, () => console.log(this.state.formResult))
            }
        }
    }

    render(){
    
        const element = this.props.data[this.state.index];

        return (
            <div>
                <form>
                    <Input 
                        type={element.type} 
                        question={element.question} 
                        name="value"
                        value={this.state.value}
                        onChange={this.handleChange}/>
                </form>
            </div>

        )
    }
}

export default Form;