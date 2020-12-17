import React from 'react';
import './message.css'

const Message = ({children}) => {
    return (
            <div className="alert alert-primary" role="alert">
                {children}
            </div>
    );
};

export default Message;