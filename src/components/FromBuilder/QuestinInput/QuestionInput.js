import React from 'react';

import './QuestionInput.css';

const QuestionInput = (props) => {
        return (
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
                                onChange={props.handleChange}
                                name="type">
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="yes/no">Yes/No</option>
                        </select>
                    </div>
                </div>
                <button onClick={props.handleAddInput}
                        disabled={!props.disableAdd}>
                    Add Sub-Input
                </button>
                <button onClick={() => props.handleDelete(props.index)}>
                    Delete
                </button>
                <button onClick={props.handleSave}
                        disabled={!props.disableSave}>
                    Save Question
                </button>
            </div>
        )
}

export default QuestionInput;