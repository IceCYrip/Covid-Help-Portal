import React from "react";
import { Link } from "react-router-dom";

const Cbook2TableReadOnlyRow = ({ contact }) => {
    return (

        <tr>
            <td>{contact.compname}</td>
            <td>{contact.suppname}</td>
            <td>{contact.contact}</td>
            <td>{contact.address}</td>
            <td>{contact.upi}</td>
        </tr>

    );
};

export default Cbook2TableReadOnlyRow;