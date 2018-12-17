import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class TextInput extends Component {

    state = {
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
                            <option>Equals</option>
                        </select>
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </form>
                {this.state.text ? <QuestionInput /> : null}
            </div>
        )
    }
}

export default TextInput;