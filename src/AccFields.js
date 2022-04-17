import React from 'react'
import './AccFields.css'

function AccFields({ textleft, inputvalue, changefn, inputleft, inputting }) {

    return (
        <div className="cust-account">
            <div className="textfieldsnormalsacc">

                <div className='nameleftsacc'>
                    {textleft}
                </div>

                <div className='textgettersacc'>
                    <input type={inputleft} value={inputvalue} onChange={changefn} disabled={inputting}
                        style={{ fontFamily: 'alladin' }} />
                </div>

            </div>
        </div>
    )
}

export default AccFields