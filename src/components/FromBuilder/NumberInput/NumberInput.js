import React from 'react';

const NumberInput = (props) => {
        return (
            <div>
                <form>
                    <label>Condiotion
                        <select value={props.condition}
                                name="condition"
                                onChange={props.handleChange}>
                            <option value="===">Equals</option>
                            <option value=">">Greather than</option>
                            <option value="<">Less than</option>
                        </select>
                    </label>
                    <input type="number" 
                           name="value"
                           onChange={props.handleChange} 
                           value={props.vale}/>
                </form>
            </div>
        )
}

export default NumberInput;