import React, { Fragment, useContext, useEffect } from 'react'
import './CBook2.css';
import { Link, useNavigate } from 'react-router-dom'
import Cbook2TableReadOnlyRow from './Cbook2TableReadOnlyRow'
import SignUpContext from "./context/signupdata/SignUpContext";

function CBook2() {

    const goTo = useNavigate();
    const { sortedsuppliers, setSortedSuppliers } = useContext(SignUpContext);

    const { booking, setBooking } = useContext(SignUpContext);

    useEffect(() => {
        SupplierTable();
    }, []);

    const SupplierTable = async () => {
        try {

            const res = await fetch(`/api/supplier/viewsuppliers`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    area: booking.area,
                    requirement: booking.item,
                    qty: booking.qty
                })

            });

            const sorted = await res.json();
            setSortedSuppliers(sorted);


            if (res.status === 401) {
                goTo('/')
            }

        }
        catch (error) {
            console.log(error);
            // goTo('/')
        }

    }



    return (
        <div className='cbook2'>

            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>

                    <div className='fstepcb1'>
                        <br></br>
                        <Link Link to="/customer" style={{ textDecoration: 'none' }}><h8>Dashboard</h8><br></br></Link>
                        <br></br>
                    </div>

                    <div className='sstepcb1'>
                        <br></br>
                        <Link Link to="/c-account" style={{ textDecoration: 'none' }}><h8>Account</h8><br></br></Link>
                        <br></br>
                    </div>

                    <div className='logoutcb1'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>



                <div className="rightcb2">

                    <table>
                        <thead>
                            <tr>
                                <th>Name of the Company</th>
                                <th>Name of the Supplier</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>UPI id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedsuppliers.map((contact) => (
                                <Fragment>
                                    <Cbook2TableReadOnlyRow
                                        contact={contact}
                                    />
                                </Fragment>
                            ))}
                        </tbody>
                    </table>


                </div>

            </div>

        </div>
    )
}

export default CBook2