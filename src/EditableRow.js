import React from "react";
import './EditableRow.css'

const EditableRow = ({ doc,
    handleCancelClick,
    sno1,
    name1,
    bgrp1,
    area1,
    phone1,
    fnSno,
    fnName,
    fnArea,
    fnBGrp,
    fnContact,
}) => {

    return (

        <tr className="edit">
            <td>
                {sno1}
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an address"
                    name="address"
                    value={name1}
                    onChange={fnName}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder={doc ? "Enter area" : "Enter blood group"}
                    name="bloodgroup"
                    value={doc ? area1 : bgrp1}
                    onChange={doc ? fnArea : fnBGrp}
                ></input>
            </td>
            <td>
                <input
                    type="number"
                    required="required"
                    placeholder="Enter a phone number"
                    name="phoneNumber"
                    value={phone1}
                    onChange={fnContact}
                ></input>
            </td>

            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr >
    );
};

export default EditableRow;