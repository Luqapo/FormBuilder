import React from 'react';

const TextInput = (props) => {
        return (
            <div>
                <div className="FormControl">
                    <label>Condiotion</label>
                    <select>
                        <option value="===">Equals</option>
                    </select>
                    <input 
                        type="text" 
                        name="value" 
                        onChange={props.handleChange} 
                        value={props.value}/>
                </div>
            </div>
        )
}

export default TextInput;