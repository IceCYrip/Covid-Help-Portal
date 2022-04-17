const express = require('express');
const Customer = require('../models/Customer');
const Supplier = require('../models/Supplier');
const Admin = require('../models/Admin');
const router = express.Router()
const { body, validationResult, cookie } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Karanhello';



//ROUTE 0:Check whether unique email using: POST "/api/auth/check". No login required

router.post('/check',

    async (req, res) => {


        //Check whether the user with this email exits already
        try {
            const { uname } = req.body;

            //checking if username is valid
            let isCustomer = await Customer.findOne({ uname });
            let isSupplier = await Supplier.findOne({ uname });
            let isAdmin = await Admin.findOne({ uname });

            if (!isCustomer && !isSupplier && !isAdmin) {
                return res
                    .status(200)
                    .json({
                        message: "Email available",
                    });
            } else {
                return res
                    .status(201)
                    .json({
                        message: "Email already exists",
                    });

            }
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
        }

    })


//ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login',
    async (req, res) => {
        let success = false;


        const { uname, password } = req.body;
        try {

            let isCustomer = await Customer.findOne({ uname });
            let isSupplier = await Supplier.findOne({ uname });
            let isAdmin = await Admin.findOne({ uname });

            if (isCustomer) {

                if (!(password === isCustomer.password)) {
                    success = false;
                    return res.status(400).json({ success, error: "Please try to login using correct credentials" });
                }

                const data = {
                    isCustomer: {
                        id: isCustomer.id
                    }
                }

                const authtoken = jwt.sign(data, JWT_SECRET);
                res.cookie('jwttoken', authtoken, {
                    expires: new Date(Date.now() + 3600000),
                    httpOnly: true
                });
                success = true;
                res.json({ success, authtoken, usertype: isCustomer.usertype })

            } else if (isSupplier) {

                if (!(password === isSupplier.password)) {
                    success = false;
                    return res.status(400).json({ success, error: "Please try to login using correct credentials" });
                }

                const data = {
                    isSupplier: {
                        id: isSupplier.id
                    }
                }

                const authtoken = jwt.sign(data, JWT_SECRET);
                res.cookie('jwttoken', authtoken, {
                    expires: new Date(Date.now() + 3600000),
                    httpOnly: true
                });
                success = true;
                res.json({ success, authtoken, usertype: isSupplier.usertype })

            }
            else if (isAdmin) {

                if (!(password === isAdmin.password)) {
                    success = false;
                    return res.status(400).json({ success, error: "Please try to login using correct credentials" });
                }

                const data = {
                    isAdmin: {
                        id: isAdmin.id
                    }
                }

                const authtoken = jwt.sign(data, JWT_SECRET);
                res.cookie('jwttoken', authtoken, {
                    expires: new Date(Date.now() + 3600000),
                    httpOnly: true
                });
                success = true;
                res.json({ success, authtoken, usertype: isAdmin.usertype })

            }


        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
        }

    })




// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser',
    async (req, res) => {
        try {

            const { uname, usertype } = req.body
            let user;

            if (usertype === "customer") {
                user = await Customer.findOne({ uname: uname });
                res.json(user)
            }
            else if (usertype === "supplier") {
                user = await Supplier.findOne({ uname: uname });
                res.json(user)
            }

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    })


module.exports = router