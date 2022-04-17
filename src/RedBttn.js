import React from 'react'
import './RedBttn.css';

function RedBttn({ clickfn, textname }) {

    return (
        <div className="login_btttn" >
            <button onClick={clickfn}>
                <h7>
                    {textname}
                </h7>
            </button>
        </div>
    )
}

export default RedBttn