import React, { useState, Fragment } from 'react'
import './DashboardTable.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import axios from 'axios'

const DashboardTable = ({ jsondata, doc }) => {

    const [contacts, setContacts] = useState(jsondata);
    // const [editFormData, setEditFormData] = useState({
    //     sno: "",
    //     name: "",
    //     bloodgroup: "",
    //     contact: "",
    // });

    const [editContactId, setEditContactId] = useState(null);


    const updation = async () => {
        try {
            if (sno <= 5) {
                axios.post('/api/dashboard/donordetails',
                    {
                        sno: sno
                    }).then((res) => {
                        const donor = res.data
                        console.log("donorid value:", donor._id)

                        axios.put(`/api/dashboard/updatedonor/${donor._id}`,
                            {
                                name: name,
                                bloodgroup: bloodgroup,
                                contact: phone,
                            })
                            .then((res) => {
                                alert('DONOR data has been updated')
                            })
                    })
            }
            else {
                axios.post('/api/dashboard/doctordetails',
                    {
                        sno: sno
                    }).then((res) => {
                        const doctor = res.data
                        console.log("doctorid value:", doctor._id)

                        axios.put(`/api/dashboard/updatedoctor/${doctor._id}`,
                            {
                                name: name,
                                area: area,
                                contact: phone,
                            })
                            .then((res) => {
                                alert('DOCTOR data has been updated')
                            })
                    })
            }

        } catch (error) {
            console.log(error);
        }
    }

    const [sno, setSno] = useState("")
    const handleSno = (e) => setSno(e.target.value)

    const [name, setName] = useState("")
    const handleName = (e) => setName(e.target.value)

    const [bloodgroup, setBloodGroup] = useState("")
    const handleBloodGroup = (e) => setBloodGroup(e.target.value)

    const [area, setArea] = useState("")
    const handleArea = (e) => setArea(e.target.value)

    const [phone, setPhone] = useState("")
    const handlePhone = (e) => setPhone(e.target.value)

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        updation();

        // const newContacts = [...contacts];

        // const index = jsondata.findIndex((contact) => contact.sno === editContactId);

        // newContacts[index] = editedContact;

        // setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.sno);

        setSno(contact.sno)
        setName(contact.name)
        setArea(contact.area)
        setBloodGroup(contact.bloodgroup)
        setPhone(contact.contact)
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    return (
        <div className='dashboard'>

            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>S. no</th>
                            <th>Name</th>
                            <th>{doc ? "Area" : "Blood Group"}</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsondata.map((contact) => (
                            <Fragment>
                                {editContactId === contact.sno ? (
                                    <EditableRow
                                        doc={doc}
                                        sno1={sno}
                                        name1={name}
                                        area1={area}
                                        bgrp1={bloodgroup}
                                        phone1={phone}
                                        handleCancelClick={handleCancelClick}
                                        fnSno={handleSno}
                                        fnName={handleName}
                                        fnArea={handleArea}
                                        fnBGrp={handleBloodGroup}
                                        fnContact={handlePhone}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>


        </div>
    )
}

export default DashboardTable;
