import React from 'react'
import "./NormalField.css"

function NormalField({ textleft, inputvalue, changefn, inputting }) {
    return (
        <div className="textfieldsnormal">

            <div className='nameleft'>
                {textleft}
            </div>

            <div className='textgetter'>
                <input type='text' value={inputvalue} onChange={changefn} disabled={inputting} />
            </div>

        </div>
    )
}

export default NormalField