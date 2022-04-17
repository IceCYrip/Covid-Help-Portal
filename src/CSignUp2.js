import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import NormalField from './NormalField'
import RedBttn from './RedBttn'
import "./CSignUp2.css"
import AreaSelectv2 from './AreaSelectv2'
import NumField from './NumField'
import SignUpContext from "./context/signupdata/SignUpContext";
import axios from 'axios'


function CSignUp2() {

    const { details } = useContext(SignUpContext);

    const goTo = useNavigate();

    const [contact, setContact] = useState('');
    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');


    const CreateCustomer = async (e) => {
        e.preventDefault();

        if (contact.length === 0 || contact.length !== 10) {
            alert("Please enter a valid phone number")
        }
        else if (pincode.length === 0 || pincode.length !== 6) {
            alert("Please enter a valid pin code")
        }
        else if (details.area.length === 0) {
            alert("Please select an area")
        }
        else {
            axios.post('/api/customer/create',
                {
                    fname: details.fname,
                    lname: details.lname,
                    contact: contact,
                    pincode: pincode,
                    area: details.area,
                    address: address,
                    uname: details.email,
                    password: details.password,
                    usertype: "customer",
                })
                .then(res => {
                    goTo('/customer-signup3');
                })
        }
    }

    return (
        <div className="CSignUP2">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fstepc2'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='sstepc2'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tstepc2'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="right">

                    <NumField textleft={"Phone No."} inputValue={contact} required="required" changefn={(e) => setContact(e.target.value)} />
                    <br></br>
                    <br></br>
                    <NumField textleft={"Pin Code"} inputValue={pincode} required="required" changefn={(e) => setPincode(e.target.value)} />
                    <br></br>
                    <br></br>
                    <AreaSelectv2 signup={true} />
                    <br></br>
                    <br></br>
                    <NormalField textleft={"Address"} inputValue={address} required="required" changefn={(e) => setAddress(e.target.value)} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <RedBttn textname={"Next"} clickfn={CreateCustomer} />
                    <br></br>
                    <h10><Link Link to="/customer-signup" style={{ textDecoration: 'none' }}> Go back</Link></h10>
                </div>

            </div>
        </div >
    )
}

export default CSignUp2