import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class TextInput extends Component {

    state = {
        condition: "===",
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form>
                    <label>Condiotion
                        <select>
                            <option value="===">Equals</option>
                        </select>
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </form>
                <QuestionInput 
                    handleDelete={this.props.handleDelete}
                    formObject={this.props.formObject}
                    condition={this.state.condition}
                    value={this.state.text}/>
            </div>
        )
    }
}

export default TextInput;