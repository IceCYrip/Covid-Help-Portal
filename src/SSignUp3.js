import React from 'react'
import { useNavigate } from 'react-router-dom';
import RedBttn from './RedBttn'
import "./SSignUp3.css"

function SSignUp3() {

    const goTo = useNavigate();

    const RegistrationDone = async (e) => {

        goTo('/');

    }

    return (
        <div className="SSignUp3">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fsteps3'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='ssteps3'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tsteps3'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="rights3">
                    <h1>Registration Successful</h1>
                    <RedBttn textname={"Go to Login"} clickfn={RegistrationDone} />
                </div>

            </div>
        </div >
    )
}

export default SSignUp3