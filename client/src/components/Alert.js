import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const { visible, message1, message2, type } = useSelector(state => state.alert);
    return (
        <>
            {visible &&
                <div className={`alert alert-${type} fixed-bottom mx-3`} role="alert">
                    {message1} <strong> {message2} </strong> {type === 'danger' ? "" : " successfully."}
                </div>
            }
        </>
    )
}

export default Alert