import React from 'react';

import './QuestionInput.css';

const QuestionInput = (props) => {
        const disabled = Boolean(props.formObject)
        return (
            <div>
                <div>
                    <form>
                        <label>Question
                            <input 
                                type="text" 
                                name="question" 
                                placeholder="Your question?"
                                value={props.question}
                                onChange={props.handleChange}/>
                        </label>
                        <label>Type
                            <select 
                                    value={props.type} 
                                    onChange={props.handleChange}
                                    name="type">
                                <option value="text">Text</option>
                                <option value="number">Number</option>
                                <option value="yes/no">Yes/No</option>
                            </select>
                        </label>
                    </form>
                    <button onClick={props.handleAddInput}>Add Sub-Input</button>
                    <button onClick={props.handleDelete}>Delete</button>
                    <button onClick={props.handleSave}
                            disabled={!disabled}>Save Form</button>
                </div>
            </div>
        )
}

export default QuestionInput;