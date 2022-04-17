import React from 'react'
import './ItemSelect.css';

function ItemSelect({ inputValue, changefn }) {
    return (
        <div className="textfieldsnormal">

            <div className='nameleft'>
                Item
            </div>

            <div className='textgetter'>
                <select value={inputValue} onChange={changefn}>
                    <option value=" " disabled selected hidden>Select Item</option>
                    <option value={"mask"}>Mask</option>
                    <option value={"remdevisir"}>Remdevisir</option>
                    <option value={"oxygencylinder"}>Oxygen Cylinder</option>
                </select>
            </div>

        </div>
    )
}

export default ItemSelect