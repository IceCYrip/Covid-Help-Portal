import React from 'react'
import "./Items.css"

function Items({ itemname, changefn }) {
    const [isChecked, setIsChecked] = React.useState(false)
    return (
        <div className="items">

            <div className='checkboxtext'>
                <input type={"checkbox"} onChange={(e) => setIsChecked(e.target.checked)} />
                <label>{itemname}</label>
            </div>

            <div className='stock'>
                <input type="number" disabled={!isChecked} onChange={changefn} />
            </div>
        </div >
    )
}

export default Items