import React from 'react'
import "./NumField.css"

function NumField({ textleft, inputvalue, changefn }) {
    return (
        <div className="textfieldsnormal">

            <div className='nameleft'>
                {textleft}
            </div>

            <div className='textgetternumber'>
                <input type='number' value={inputvalue} onChange={changefn} />
            </div>

        </div>
    )
}

export default NumField