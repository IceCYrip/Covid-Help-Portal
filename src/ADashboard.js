import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import SignUpContext from "./context/signupdata/SignUpContext";
import RedBttn from './RedBttn'
import "./ADashboard.css"
import DashboardTable from './DashboardTable'


function ADashboard() {


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
            console.log("success")
            console.log(donor)

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
            console.log("success")
            console.log(doctor)

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
        <div className="ADashboard">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstep1'>
                        <br></br>
                        <h8>Dashboard</h8><br></br>
                        <br></br>
                    </div>

                    <div className='sstep1'>
                        <br></br>
                        <Link Link to="/reports" style={{ textDecoration: 'none' }}><h8>Reports</h8></Link> <br></br>
                        <br></br>
                    </div>

                    <div className='logout'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="rightdashboard">
                    <h7>People willing to donate plasma</h7>
                    <DashboardTable jsondata={jsondonorupdate} doc={false} />
                    <br></br>
                    <br></br>
                    <h7>Doctors on call</h7>
                    <DashboardTable jsondata={jsondoctorupdate} doc={true} />


                </div>

            </div>
        </div >
    )
}

export default ADashboard