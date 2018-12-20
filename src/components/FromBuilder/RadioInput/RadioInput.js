import React from 'react';

const RadioInput = (props) =>{
        return (
                <div className="FormControl">
                    <label>Condiotion</label>
                    <select name="condition" onChange={props.handleChange}>
                        <option value="===">Equals</option>
                    </select>
                    <select name="value" 
                        onChange={props.handleChange}
                        value={props.value}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
        )
}

export default RadioInput;