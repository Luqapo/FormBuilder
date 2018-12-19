import React from 'react';

const Input = (props) => {
    let inputElement = null;
    

    switch ( props.type ) {
        case ( 'text' ):
            inputElement = (
                <div>
                    <label>{`${props.question}? `}
                        <input type="text" name="value" value={props.value} onChange={props.onChange} />
                    </label>
                    
                </div>
            );
            break;
        case ( 'number' ):
            inputElement = (
                <div>
                    <label>{`${props.question}? `}
                        <input type="number" name="value" value={props.value} onChange={props.onChange} />
                    </label>
                </div>
            );
            break;
        case ( 'yes/no' ):
            inputElement = (
                <div>
                    <label>{`${props.question}? `}
                        <select name="value" onChange={props.onChange} value={props.value}>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </label>
                </div>
            );
            break;
        default:
                inputElement = null;
    }

    return (
        <div>
            {inputElement}
        </div>
        
    )
}

export default Input;