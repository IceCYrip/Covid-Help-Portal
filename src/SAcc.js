import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUpContext from "./context/signupdata/SignUpContext";
import './SAcc.css';
import AccFields from './AccFields';
import AreaSelectv2 from './AreaSelectv2';
import RedBttn from './RedBttn';
import axios from 'axios'
import NormalField from './NormalField'

function SAcc() {


    const { details } = useContext(SignUpContext);
    const [tokenheader] = useState(details.token)

    const [id, setID] = useState('')

    const goTo = useNavigate();

    const [cname, setCname] = useState('')
    const [sname, setSname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [pincode, setPincode] = useState('')
    const [area, setArea] = useState('')
    const [address, setAddress] = useState('')

    const [upi, setUPI] = useState('');

    const [sid, setSid] = useState('')
    const [mask, setMask] = useState('')
    const [oxygen, setOxygen] = useState('')
    const [rem, setRem] = useState('')


    useEffect(() => {
        getDatafn();

    }, []);


    //Get the data of the user to be displayed on the screen
    const getDatafn = async () => {
        try {
            const res = await fetch(`/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    uname: details.email,
                    usertype: "supplier"
                })
            });

            const data = await res.json();

            setID(data._id)
            setCname(data.compname)
            setSname(data.suppname)
            setContact(data.contact)
            setEmail(data.uname)
            setUPI(data.upi)
            setPincode(data.pincode)
            setArea(data.area)
            setAddress(data.address)
            setMask(data.mask)
            setOxygen(data.oxygencylinder)
            setRem(data.remdevisir)

            if (res.status === 401) {
                goTo('/')
            }
        }
        catch (error) {
            console.log(error);
            // goTo('/')
        }
    }


    // Update the edited data of user in the database.
    const editSupplierdata = async () => {

        try {
            const res = await axios.put(`/api/supplier/updatesupplier/${id}`,
                {
                    compname: cname,
                    suppname: sname,
                    uname: email,
                    upi: upi,
                    contact: contact,
                    pincode: pincode,
                    area: area,
                    address: address,
                    mask: mask,
                    oxygencylinder: oxygen,
                    remdevisir: rem,
                })
                .then((res) => {
                    alert('Your Data has been updated')
                })

        } catch (error) {
            console.log('failure')
        }
    }


    return (
        <div className='SAcc'>

            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>

                    <div className='fstepcacc1'>
                        <br></br>
                        <Link Link to="/supplier" style={{ textDecoration: 'none' }}> <h8>Dashboard</h8></Link>
                        <br></br>
                        <br></br>
                    </div>

                    <div className='sstepacc1'>
                        <br></br>
                        <h8>Account</h8><br></br>
                        <br></br>
                    </div>

                    <div className='logoutcacc'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="rightsaccountsa">

                    <div className='top-content'>
                        <div className='leftside'>
                            <AccFields textleft={"Company Name"} inputleft={'text'} inputvalue={cname} required="required" changefn={(e) => setCname(e.target.value)} />
                            <AccFields textleft={"E-mail"} inputleft={'email'} inputvalue={email} inputting={true} required="required" changefn={(e) => setEmail(e.target.value)} />
                            <AccFields textleft={"Address"} inputleft={'text'} inputvalue={address} required="required" changefn={(e) => setAddress(e.target.value)} />
                        </div>

                        <div className='rightside'>
                            <AccFields textleft={"Supplier Name"} inputleft={'text'} inputvalue={sname} required="required" changefn={(e) => setSname(e.target.value)} />
                            <AccFields textleft={"Contact"} inputleft={'number'} inputvalue={contact} required="required" changefn={(e) => setContact(e.target.value)} />
                            <AccFields textleft={"Pin Code"} inputleft={'number'} inputvalue={pincode} required="required" changefn={(e) => setPincode(e.target.value)} />

                        </div>

                    </div>

                    <AreaSelectv2 inputValue={area} changefn={(e) => setArea(e.target.value)} signup={false} />
                    <br></br>

                    <NormalField textleft={"UPI for payments"} inputvalue={upi} required="required" changefn={(e) => setUPI(e.target.value)} />

                    <br></br>

                    <div className='info1'>
                        <h15>Please select the items that you supply and mention the current quantity of stock with you.</h15>
                    </div>
                    <br></br>
                    <div className='itemsupdate'>
                        <div className='item1'>
                            <label>N-95 Mask</label>
                            <input type='number' value={mask} style={{ width: '70px' }} onChange={(e) => setMask(e.target.value)} />
                        </div>
                        <div className='item2'>
                            <label>Remdevisir</label>
                            <input type='number' value={rem} style={{ width: '70px' }} onChange={(e) => setRem(e.target.value)} />
                        </div>
                        <div className='item3'>
                            <label>Oxygen Cylinder</label>
                            <input type='number' value={oxygen} style={{ width: '70px' }} onChange={(e) => setOxygen(e.target.value)} />
                        </div>
                    </div>

                    <br></br>
                    <RedBttn textname={"Save"} clickfn={editSupplierdata} />

                </div>

            </div>

        </div>
    )
}

export default SAcc