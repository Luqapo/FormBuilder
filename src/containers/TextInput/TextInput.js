import React, { Component } from 'react';

import QuestionInput from '../QuestinInput/QuestionInput';

class TextInput extends Component {

    state = {
        text: '',
        condition: "==="
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
                <QuestionInput handleDelete={this.props.handleDelete}/>
            </div>
        )
    }
}

export default TextInput;