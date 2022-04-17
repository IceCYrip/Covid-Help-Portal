import React, { useEffect, useState, useContext } from 'react'
import SignUpContext from "./context/signupdata/SignUpContext";
import { useNavigate } from 'react-router-dom';
import RedBttn from './RedBttn'
import "./CDashboard.css"
import CandSDashboardTable from './CandSDashboardTable'
import { Link } from 'react-router-dom'


function CDashboard() {

    const goTo = useNavigate();
    const GoToBooking = async (e) => {
        goTo('/book1');
    }

    const { jsondonorupdate, setJsondonorUpdate } = useContext(SignUpContext);
    const { jsondoctorupdate, setJsondoctorUpdate } = useContext(SignUpContext);

    const [donor, setDonor] = useState('')
    const [doctor, setDoctor] = useState('')

    useEffect(() => {
        Donordata();
        Doctordata();
    }, []);

    const Donordata = async () => {
        try {

            const res = await fetch(`/api/dashboard/fetchdonors`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                credentials: "include"
                // body: JSON.stringify({
                // })

            });

            const donor = await res.json();


            setDonor(donor);
            setJsondonorUpdate(donor)

            if (res.status === 401) {
                goTo('/')
            }

        }
        catch (error) {
            console.log(error);
            // goTo('/')
        }

    }

    const Doctordata = async () => {
        try {

            const res = await fetch(`/api/dashboard/fetchdoctors`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                credentials: "include"
                // body: JSON.stringify({
                // })

            });

            const doctor = await res.json();


            setDoctor(doctor);
            setJsondoctorUpdate(doctor)

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
        <div className="CDashboard">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstepcd1'>
                        <br></br>
                        <h8>Dashboard</h8><br></br>
                        <br></br>
                    </div>

                    <div className='sstepcd1'>
                        <br></br>
                        <Link Link to="/c-account" style={{ textDecoration: 'none' }}><h8>Account</h8></Link>
                        <br></br>
                        <br></br>
                    </div>

                    <div className='logoutcd1'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="c-dashboard">
                    <h7>People willing to donate plasma</h7>
                    <CandSDashboardTable jsondata={jsondonorupdate} doc={false} />
                    <br></br>
                    <h7>Doctors on call</h7>
                    <CandSDashboardTable jsondata={jsondoctorupdate} doc={true} />

                    <RedBttn textname={"Check Suppliers"} clickfn={GoToBooking} />

                </div>

            </div>
        </div >
    )
}

export default CDashboard