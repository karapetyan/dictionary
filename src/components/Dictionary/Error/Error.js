import React from 'react';
import './Error.css';

const Error = ({errors, removeError}) =>
    <div>
        {errors.map(error =>
            <div className="header-error " key={error.errorId}>
                <p className="inline-block">{error.text}</p>
                <div className="close-error inline-block" onClick={() => removeError(error.errorId)}></div>
            </div>
        )}
    </div>

export default Error;