import React, { useContext, useState } from 'react'
import NormalField from './NormalField'
import PassField from './PassField'
import RedBttn from './RedBttn'
import "./CSignUp1.css"
import { useNavigate, Link } from 'react-router-dom';
import SignUpContext from "./context/signupdata/SignUpContext";
import validator from 'validator';
import axios from 'axios'

function CSignUp1() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [emailaddress, setEmailAddress] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const { setDetails } = useContext(SignUpContext);

    const goTo = useNavigate();


    const CheckUser = async (e) => {
        e.preventDefault();

        if (firstname.length === 0) {
            alert("Pleas enter first name")
        }
        else if (lastname.length === 0) {
            alert("Please enter last name")
        }
        else if (!(validator.isEmail(emailaddress))) {
            alert("Pleas enter a valid email address")
        }
        else {

            if ((pass.length !== 0 || cpass.length !== 0) && pass === cpass) {

                axios.post('/api/auth/check', { uname: emailaddress })
                    .then(res => {
                        console.log(res.data)
                        if (res.status === 200) {

                            setDetails({ fname: firstname, lname: lastname, email: emailaddress, password: pass })
                            goTo('/customer-signup2');
                        }
                        else {
                            alert('User with this email already exists.')
                        }
                    })
            }
            else {
                alert("Password and Confirm Password don't match")
            }
        }
    }

    return (
        <div className="CSignUp1">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstepcs1'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='sstepcs1'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tstepcs1'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="right">

                    <NormalField textleft={"First Name"} required="required" changefn={(e) => setFirstName(e.target.value)} />
                    <br></br>
                    <NormalField textleft={"Last Name"} inputValue={lastname} changefn={(e) => setLastname(e.target.value)} />
                    <br></br>
                    <NormalField textleft={"Email Address"} inputValue={emailaddress} required="required" changefn={(e) => setEmailAddress(e.target.value)} />
                    <br></br>
                    <PassField textleft={"Password"} inputValue={pass} required="required" changefn={(e) => setPass(e.target.value)} />
                    <br></br>
                    <PassField textleft={"Confirm Password"} inputValue={cpass} required="required" changefn={(e) => setCpass(e.target.value)} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <RedBttn textname={"Next"} clickfn={CheckUser} />
                    <br></br>
                    <h9>Already have an account?</h9>
                    <h10><Link Link to="/" style={{ textDecoration: 'none' }}> Login</Link></h10>

                </div>

            </div>
        </div >
    )
}

export default CSignUp1