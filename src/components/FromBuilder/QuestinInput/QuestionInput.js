import React from 'react';

import './QuestionInput.css';

const QuestionInput = (props) => {
        const disabled = Boolean(props.formObject.length < 1)
        return (
            <div>
                <div>
                    <div>
                        <div className="FormControl">
                            <label>Question</label>
                            <input 
                                type="text" 
                                name="question" 
                                placeholder="Your question?"
                                value={props.question}
                                onChange={props.handleChange}/>
                        </div>
                        <div className="FormControl">
                            <label>Type</label>
                            <select 
                                    value={props.type} 
                                    onChange={props.handleChange}
                                    name="type">
                                <option value="text">Text</option>
                                <option value="number">Number</option>
                                <option value="yes/no">Yes/No</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={props.handleAddInput}>Add Sub-Input</button>
                    <button onClick={props.handleDelete}>Delete</button>
                    <button onClick={props.handleSave}
                            disabled={disabled}>Save Form</button>
                </div>
            </div>
        )
}

export default QuestionInput;