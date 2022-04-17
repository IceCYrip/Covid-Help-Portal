import React from 'react'
import "./PassField.css"

function PassField({ textleft, inputValue, changefn }) {
    return (
        <div className="textfieldspass">

            <div className='nameleft'>
                {textleft}
            </div>
            <div className='textgetter'>
                <input type='password' value={inputValue} onChange={changefn} />
            </div>

        </div>
    )
}

export default PassField