import React from 'react';

const TextInput = (props) => {
        return (
            <div>
                <form>
                    <label>Condiotion
                        <select>
                            <option value="===">Equals</option>
                        </select>
                    </label>
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