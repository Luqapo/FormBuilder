import React from 'react';
import { withRouter } from 'react-router-dom';

import './Nav.css';

const Nav = (props) => {
    const handleBuilder = () => {
        props.history.push('/form-builder');
    }

    const handleForm = () => {
        props.history.push('/form');
    }

    return (
        <nav>
            <ul className="Nav">
                <li onClick={handleBuilder}>Form Builder</li>
                <li onClick={handleForm}>Form</li>
            </ul>
        </nav>
    )
}

export default withRouter(Nav);