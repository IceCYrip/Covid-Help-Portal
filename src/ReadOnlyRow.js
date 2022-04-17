import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, }) => {
    return (
        <tr>
            <td>{contact.sno}</td>
            <td>{contact.name}</td>
            <td>{contact.bloodgroup || contact.area}</td>
            <td>{contact.contact}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;