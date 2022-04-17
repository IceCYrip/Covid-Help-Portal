import React, { useEffect, useState, useContext } from 'react'
import RedBttn from './RedBttn'
import "./SDashboard.css"
import CandSDashboardTable from './CandSDashboardTable'
import { Link } from 'react-router-dom'
import SignUpContext from "./context/signupdata/SignUpContext";
import { useNavigate } from 'react-router-dom';



function SDashboard() {


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
        <div className="SDashboard">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstepsd1'>
                        <br></br>
                        <h8>Dashboard</h8><br></br>
                        <br></br>
                    </div>

                    <div className='sstepsd1'>
                        <br></br>
                        <Link Link to="/s-account" style={{ textDecoration: 'none' }}><h8>Account</h8></Link>
                        <br></br>
                        <br></br>
                    </div>

                    <div className='logoutsd1'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="rightdashboard">
                    <h7>People willing to donate plasma</h7>
                    <CandSDashboardTable jsondata={jsondonorupdate} />
                    <br></br>
                    <br></br>
                    <h7>Doctors on call</h7>
                    <CandSDashboardTable jsondata={jsondoctorupdate} />

                </div>

            </div>
        </div >
    )
}

export default SDashboard