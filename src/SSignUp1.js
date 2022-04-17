import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import SignUpContext from "./context/signupdata/SignUpContext";
import axios from 'axios'
import validator from 'validator';
import NormalField from './NormalField'
import PassField from './PassField'
import RedBttn from './RedBttn'
import "./SSignUp1.css"
import NumField from './NumField'


function SSignUp1() {


    const [cname, setCname] = useState('');
    const [sname, setSname] = useState('');
    const [contact, setContact] = useState('');
    const [emailaddress, setEmailAddress] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const { setDetails } = useContext(SignUpContext);

    const goTo = useNavigate();


    const CheckUser = async (e) => {
        e.preventDefault();

        if (cname.length === 0) {
            alert("Please enter a company name. Enter n/a if not a company)")
        }
        else if (sname.length === 0) {
            alert("Please enter supplier name")
        }
        else if (contact.length === 0 || contact.length !== 10) {
            alert("Please enter a valid phone number")
        }
        else if (!(validator.isEmail(emailaddress))) {
            alert("Please enter a valid email address")
        }
        else {

            if ((pass.length !== 0 || cpass.length !== 0) && pass === cpass) {

                axios.post('/api/auth/check', { uname: emailaddress })
                    .then(res => {
                        console.log(res.data)
                        if (res.status === 200) {

                            setDetails({ fname: cname, lname: sname, phone: contact, email: emailaddress, password: pass })
                            goTo('/supplier-signup2');
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
        <div className="SSignUp1">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fsteps1'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='ssteps1'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tsteps1'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="right">

                    <NormalField textleft={"Company Name"} inputValue={cname} required="required" changefn={(e) => setCname(e.target.value)} />
                    <br></br>
                    <NormalField textleft={"Supplier Name"} inputValue={sname} required="required" changefn={(e) => setSname(e.target.value)} />
                    <br></br>
                    <NumField textleft={"Phone no."} required="required" changefn={(e) => setContact(e.target.value)} />
                    <br></br>
                    <NormalField textleft={"Email Address"} inputValue={emailaddress} required="required" changefn={(e) => setEmailAddress(e.target.value)} />
                    <br></br>
                    <PassField textleft={"Password"} inputValue={pass} required="required" changefn={(e) => setPass(e.target.value)} />
                    <br></br>
                    <PassField textleft={"Confirm Password"} inputValue={cpass} required="required" changefn={(e) => setCpass(e.target.value)} />
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

export default SSignUp1