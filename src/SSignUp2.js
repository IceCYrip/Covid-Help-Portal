import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./SSignUp2.css"
import NormalField from './NormalField'
import RedBttn from './RedBttn'
import AreaSelectv2 from './AreaSelectv2'
import NumField from './NumField'
import Items from './Items'
import SignUpContext from "./context/signupdata/SignUpContext";
import axios from 'axios'


function SSignUp2() {

    const { details } = useContext(SignUpContext);

    const goTo = useNavigate();

    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');
    const [upi, setUPI] = useState('');


    const [mask, setMask] = useState('0');
    const [rem, setRem] = useState('0');
    const [oxygen, setOxygen] = useState('0');


    const CreateSupplier = async (e) => {
        e.preventDefault();


        if (pincode.length === 0 || pincode.length !== 6) {
            alert("Please enter a valid pin code")
        }
        else if (details.area.length === 0) {
            alert("Please select an area")
        }
        else {
            axios.post('/api/supplier/create',

                {
                    compname: details.fname,
                    suppname: details.lname,
                    uname: details.email,
                    pincode: pincode,
                    upi: upi,
                    contact: details.phone,
                    area: details.area,
                    address: address,
                    password: details.password,
                    mask: mask,
                    oxygencylinder: oxygen,
                    remdevisir: rem,
                    usertype: "supplier",
                })
                .then(res => {

                    goTo('/supplier-signup3');
                })
        }
    }



    return (
        <div className="SSignUp2">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='fsteps2'>
                        <h8>Step 1: <br></br>Sign Up</h8><br></br>
                    </div>

                    <div className='ssteps2'>
                        <h9>Step 2: </h9>
                        <br></br>
                        <h9>Personal Information</h9>
                        <br></br>
                    </div>
                    <div className='tsteps2'>
                        <h10>Step 3: <br></br>Done</h10><br></br>
                    </div>

                </div>

                <div className="rights2">

                    <NumField textleft={"Pin Code"} inputValue={pincode} required="required" changefn={(e) => setPincode(e.target.value)} />
                    <br></br>
                    <NormalField textleft={"Address"} inputValue={address} required="required" changefn={(e) => setAddress(e.target.value)} />
                    <br></br>
                    <AreaSelectv2 signup={true} />
                    <br></br>
                    <NormalField textleft={"UPI for payments"} inputValue={upi} required="required" changefn={(e) => setUPI(e.target.value)} />
                    <br></br>
                    <div className='info1'>
                        <h15>Please select the items that you supply and mention the current quantity of stock with you.</h15>
                    </div>
                    <br></br>
                    <br></br>
                    <Items itemname={"N-95 Mask"} required="required" changefn={(e) => setMask(e.target.value)} />
                    <br></br>
                    <br></br>
                    <Items itemname={"Remdesivir"} required="required" changefn={(e) => setRem(e.target.value)} />
                    <br></br>
                    <br></br>
                    <Items itemname={"Oxygen Cylinder"} required="required" changefn={(e) => setOxygen(e.target.value)} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='info2'>
                        <h15>(Please note that you can update the stock later on by going into 'Account')</h15>
                    </div>
                    <br></br> {/*Mandatory 2 break tags before the button to avoid centering glitch... BUT NOW OK LOL*/}

                    <RedBttn textname={"Next"} clickfn={CreateSupplier} />
                    <h10><Link Link to="/supplier-signup" style={{ textDecoration: 'none' }}> Go back</Link></h10>
                </div>

            </div>
        </div >
    )
}

export default SSignUp2