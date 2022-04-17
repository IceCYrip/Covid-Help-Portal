import React, { useState, useEffect } from 'react'
import "./AReports.css"
import { Link } from 'react-router-dom'

function AReports() {

    const [ccount, setCcount] = useState('')
    const [scount, setScount] = useState('')
    const [ucount, setUcount] = useState('')

    const [CKothrud, setCKothrud] = useState('')
    const [CBaner, setCBaner] = useState('')
    const [CAundh, setCAundh] = useState('')
    const [CShivajinagar, setCShivajinagar] = useState('')
    const [CPimpleSaudagar, setCPimpleSaudagar] = useState('')

    const [SKothrud, setSKothrud] = useState('')
    const [SBaner, setSBaner] = useState('')
    const [SAundh, setSAundh] = useState('')
    const [SShivajinagar, setSShivajinagar] = useState('')
    const [SPimpleSaudagar, setSPimpleSaudagar] = useState('')

    const [mask, setMask] = useState('')
    const [remdevisir, setRemdevisir] = useState('')
    const [oxygencylinder, setOxygenCylinder] = useState('')

    useEffect(() => {
        GenerateReports();
    }, []);

    const GenerateReports = async () => {

        //Fetches User count
        const usercountapi = await fetch('/api/reports/userscount', {
            method: "POST"
        });
        const usercount = await usercountapi.json()
        console.log(usercount.Ccount);

        setCcount(usercount.Ccount)
        setScount(usercount.Scount)
        setUcount(usercount.Ucount)

        //Fetches all the customers' count according to area
        const customercount = await fetch('/api/reports/customerperarea', {
            method: "POST"
        });
        const customerarea = await customercount.json()
        console.log(customerarea.CKothrud);

        setCKothrud(customerarea.CKothrud)
        setCBaner(customerarea.CBaner)
        setCAundh(customerarea.CAundh)
        setCShivajinagar(customerarea.CShivajinagar)
        setCPimpleSaudagar(customerarea.CPimpleSaudagar)

        //Fetches all the suppliers' count according to area
        const suppliercount = await fetch('/api/reports/supplierperarea', {
            method: "POST"
        });
        const supplierarea = await suppliercount.json()
        console.log(supplierarea.SKothrud);

        setSKothrud(supplierarea.SKothrud)
        setSBaner(supplierarea.SBaner)
        setSAundh(supplierarea.SAundh)
        setSShivajinagar(supplierarea.SShivajinagar)
        setSPimpleSaudagar(supplierarea.SPimpleSaudagar)

        //Fetches total stock 
        const stock = await fetch('/api/reports/getstock', {
            method: "POST"
        });
        const totalstock = await stock.json()
        console.log(totalstock.maskcount);

        setMask(totalstock.maskcount)
        setRemdevisir(totalstock.remcount)
        setOxygenCylinder(totalstock.oxygencount)

    }



    return (
        <div classname='areports'>
            <div className='bigcontainer'>
                <div className="left">
                    <img
                        className="logo"
                        src={"/images/Logo.png"}
                        alt=""
                    />

                    <h3>Covid Help <br></br>Management System</h3>



                    <div className='arstep1'>
                        <br></br>
                        <Link Link to="/admin" style={{ textDecoration: 'none' }}><h8>Dashboard</h8></Link> <br></br>
                        <br></br>
                    </div>

                    <div className='arstep2'>
                        <br></br>
                        <h8>Reports</h8><br></br>
                        <br></br>
                    </div>

                    <div className='logout'>
                        <Link Link to="/" style={{ textDecoration: 'none' }}><h9>Logout</h9></Link>
                    </div>

                </div>

                <div className="rightdashboardar">

                    <h1> Generated Reports </h1>

                    <div className='reportsbox'>

                        <div className='sidebyside2'>

                            <div className='userreport'>
                                <h10>USERS</h10>
                                <h15>Total registrations: <label>{ucount}</label></h15>
                                <h15>- Customers registered: <label>{ccount}</label></h15>
                                <h15>- Suppliers registered: <label>{scount}</label></h15>
                            </div>

                            <div className='stockreport'>
                                <h10>STOCK</h10>
                                <h15>- Number of Masks in stock: <label>{mask}</label></h15>
                                <h15>- Number of Remdevisirs in stock: <label>{remdevisir}</label></h15>
                                <h15>- Number of Oxygen Cylinders in stock: <label>{oxygencylinder}</label></h15>
                            </div>

                        </div>


                        <div className='sidebyside1'>
                            <div className='customerreport'>
                                <h10>CUSTOMERS</h10>
                                <h9>Total number of customers registered: <label>{ccount}</label></h9>
                                <h15>- Number of customers from Kothrud: <label>{CKothrud}</label></h15>
                                <h15>- Number of customers from Baner: <label>{CBaner}</label></h15>
                                <h15>- Number of customers from Aundh: <label>{CAundh}</label></h15>
                                <h15>- Number of customers from Shivajinagar: <label>{CShivajinagar}</label></h15>
                                <h15>- Number of customers from Pimple Saudagar: <label>{CPimpleSaudagar}</label></h15>
                            </div>

                            <div className='supplierreport'>
                                <h10>SUPPLIERS</h10>
                                <h9>Total number of suppliers registered: <label>{scount}</label></h9>
                                <h15>- Number of suppliers from Kothrud: <label>{SKothrud}</label></h15>
                                <h15>- Number of suppliers from Baner: <label>{SBaner}</label></h15>
                                <h15>- Number of suppliers from Aundh: <label>{SAundh}</label></h15>
                                <h15>- Number of suppliers from Shivajinagar: <label>{SShivajinagar}</label></h15>
                                <h15>- Number of suppliers from Pimple Saudagar: <label>{SPimpleSaudagar}</label></h15>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AReports