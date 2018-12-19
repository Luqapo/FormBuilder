import React from 'react';

import FormWrapper from '../../containers/FormBuilder/FormWrapper/FormWrapper';

const BuildWrapper = (props) => {
    return (
        <div>
            <FormWrapper 
                type={props.type} 
                formObject={props.formObject} 
                handleDelete={props.handleDelete}/>
        </div>
    )
}

export default BuildWrapper;