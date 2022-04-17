import React from 'react'
import './PwdChange.css'
import { Link } from 'react-router-dom';
import PassField from './PassField'
import RedBttn from './RedBttn'

function PwdChange() {
    return (
        <div className='pwdchange'>

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

                <div className="rightpwd">

                    <PassField textleft={"Old Password"} />
                    <br></br>
                    <PassField textleft={"New Password"} />
                    <br></br>
                    <PassField textleft={"Confirm NewPassword"} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <RedBttn textname={"Save"} clickfn={'/supplier'} />

                </div>

            </div>

        </div>
    )
}

export default PwdChange