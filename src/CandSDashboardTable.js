import React, { useState, Fragment, useContext } from 'react'
import './CandSDashboardTable.css';
import CandSReadOnlyRow from './CandSReadOnlyRow';

const CandSDashboardTable = ({ jsondata, doc }) => {


    return (
        <div className='dashboard'>

            <table>
                <thead>
                    <tr>
                        <th>S. no</th>
                        <th>Name</th>
                        <th>{doc ? "Area" : "Blood Group"}</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {jsondata.map((contact) => (
                        <Fragment>
                            <CandSReadOnlyRow
                                contact={contact}
                            />
                        </Fragment>
                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default CandSDashboardTable;
