import React, { useContext, useState, useEffect } from 'react'
import RedBttn from './RedBttn'
import NumField from './NumField'
import AreaSelectv2 from './AreaSelectv2'
import ItemSelect from './ItemSelect'
import './CBook1.css';
import { Link, useNavigate } from 'react-router-dom'
import SignUpContext from "./context/signupdata/SignUpContext";

function CBook1() {

    const goTo = useNavigate();

    const { booking, setBooking } = useContext(SignUpContext);
    const [item, setItem] = useState(' ')
    const [qty, setQty] = useState('0')
    const [area, setArea] = useState(' ')


    useEffect(() => {
        setBooking({ item: item, area: area, qty: qty })
    }, [item, area, qty]);

    function Booking2() {

        // setDetails({ fname: details.fname, lname: details.lname, email: details.email, phone: details.phone, password: details.password, area: area });

        setBooking({ item: item, area: area, qty: qty })

        goTo('/book2');
    }



    return (
        <div className="CBook1">
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>

                    <div className='fstepcb1'>
                        <br></br>
                        <Link Link to="/customer" style={{ textDecoration: 'none' }}><h8>Dashboard</h8><br></br></Link>
                        <br></br>
                    </div>

                    <div className='sstepcb1'>
                        <br></br>
                        <Link Link to="/c-account" style={{ textDecoration: 'none' }}><h8>Account</h8><br></br></Link>
                        <br></br>
                    </div>

                    <div className='logoutcb1'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="rightcb1">

                    <ItemSelect inputValue={item} changefn={(e) => setItem(e.target.value)} />
                    <br></br>
                    <NumField textleft={"Quantity"} changefn={(e) => setQty(e.target.value)} />
                    <br></br>
                    <AreaSelectv2 inputValue={area} changefn={(e) => setArea(e.target.value)} signup={false} />

                    <br></br>
                    <br></br>
                    <br></br>
                    <RedBttn textname={"Check"} clickfn={Booking2} />
                </div>

            </div>
        </div>
    )
}

export default CBook1
