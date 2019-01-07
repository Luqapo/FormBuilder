import React from 'react';

const Input = (props) => {
    
    let inputElement = null;
    
    switch ( props.type ) {
        case ( 'text' ):
            inputElement = (
                <div className="FormControl">
                    <label>{`${props.question}? `}</label>
                    <input type="text" 
                            name="value" 
                            value={props.value} 
                            onChange={props.onChange} />
                </div>
            );
            break;
        case ( 'number' ):
            inputElement = (
                <div className="FormControl">
                    <label>{`${props.question}? `}</label>
                    <input type="number" 
                            name="value" 
                            value={props.value} 
                            onChange={props.onChange} />
                </div>
            );
            break;
        case ( 'yes/no' ):
            inputElement = (
                <div className="FormControl">
                    <label>{`${props.question}? `}</label>
                    <select name="value" 
                            onChange={props.onChange} 
                            value={props.value}>
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>   
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