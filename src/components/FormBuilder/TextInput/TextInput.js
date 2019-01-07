import React from 'react';

const TextInput = (props) => {
        return (
                <div className="FormControl">
                    <label>Condition</label>
                    <select>
                        <option value="===">Equals</option>
                    </select>
                    <input 
                        type="text" 
                        name="value" 
                        onChange={props.handleChange} 
                        value={props.value}/>
                </div>
        )
}

export default TextInput;