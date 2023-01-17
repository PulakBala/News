import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Terms and condition{<Link to='/signup'>SignUp</Link>}</h2>
        </div>
    );
};

export default TermsAndConditions;