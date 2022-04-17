import React from "react";

const CandSReadOnlyRow = ({ contact }) => {
    return (
        <tr>
            <td>{contact.sno}</td>
            <td>{contact.name}</td>
            <td>{contact.bloodgroup || contact.area}</td>
            <td>{contact.contact}</td>


        </tr>
    );
};

export default CandSReadOnlyRow;