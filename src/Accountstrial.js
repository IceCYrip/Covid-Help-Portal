import React from 'react'
import './Accountstrial.css'

function Accountstrial({ textleft, textright }) {
    return (
        <div className='accountstrial'>

            <div className='left-fieldssa'>
                <div className='left-tagsa'>
                    {textleft}
                </div>

                <div className='left-inputssa'>
                    <input type='text' />
                </div>
            </div>

            <div className='right-fieldssa'>
                <div className='right-tagsa'>
                    {textright}
                </div>
                <div className='right-input'>
                    <input type='text' />
                </div>
            </div>

        </div>

    )
}

export default Accountstrial