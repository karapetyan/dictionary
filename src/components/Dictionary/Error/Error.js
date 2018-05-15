import React from 'react';
import './Error.css';

const Error = ({errors, removeError}) =>
    <div>
        {errors.map(error =>
            <div class="header-error" key={error.errorId}>
                <p>{error.text}</p>
                <div className="close-error" onClick={() => removeError(error.errorId)}></div>
            </div>
        )}
    </div>

export default Error;