import React from 'react'
import { useNavigate } from 'react-router-dom';
import RedBttn from './RedBttn'
import "./CSignUp3.css"

function CSignUp3() {

    const goTo = useNavigate();

    const RegistrationDone = async (e) => {

        goTo('/');

    }

    return (
        <div className="CSignUP3">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstepc3'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='sstepc3'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tstepc3'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="rightc3">
                    <h1>Registration Successful. </h1>
                    <RedBttn textname={"Go to Login"} clickfn={RegistrationDone} />
                </div>

            </div>
        </div >
    )
}

export default CSignUp3