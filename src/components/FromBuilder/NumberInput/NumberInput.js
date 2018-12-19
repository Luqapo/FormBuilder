import React from 'react';

const NumberInput = (props) => {
        return (
            <div>
                <form className="FormControl">
                    <label>Condiotion</label>
                    <select value={props.condition}
                            name="condition"
                            onChange={props.handleChange}>
                        <option value="===">Equals</option>
                        <option value=">">Greather than</option>
                        <option value="<">Less than</option>
                    </select>
                    <input type="number" 
                           name="value"
                           onChange={props.handleChange} 
                           value={props.vale}/>
                </form>
            </div>
        )
}

export default NumberInput;