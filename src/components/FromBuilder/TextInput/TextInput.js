import React from 'react';

const TextInput = (props) => {
        return (
            <div>
                <form className="FormControl">
                    <label>Condiotion</label>
                    <select>
                        <option value="===">Equals</option>
                    </select>
                    <input 
                        type="text" 
                        name="value" 
                        onChange={props.handleChange} 
                        value={props.value}/>
                </form>
            </div>
        )
}

export default TextInput;