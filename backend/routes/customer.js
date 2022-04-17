const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router()
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Karanhello';



//ROUTE 1:Create customer data using: POST "/api/customer/create". No login required
router.post('/create',

    async (req, res) => {

        //Check whether the user with this email exits already
        try {
            let customer = await Customer.findOne({ uname: req.body.uname });

            if (customer) {
                return res.status(400).json({ error: 'Sorry a user with this email already exists' })
            }
            customer = await Customer.create({
                fname: req.body.fname,
                lname: req.body.lname,
                contact: req.body.contact,
                pincode: req.body.pincode,
                area: req.body.area,
                address: req.body.address,
                uname: req.body.uname,
                password: req.body.password,
                usertype: req.body.usertype,

            })

            const data = {
                customer: {
                    id: customer.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);

            res.json({ authtoken })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
        }
    })



// ROUTE 1.1: Update an existing donor using: PUT "/api/customer/updatecustomer/:id". Login required
router.put('/updatecustomer/:id',
    async (req, res) => {
        const { fname, lname, contact, uname, pincode, area, address } = req.body;
        try {

            // Create a newNote object


            const newCustomer = {};
            if (fname) { newCustomer.fname = fname };
            if (lname) { newCustomer.lname = lname };
            if (uname) { newCustomer.uname = uname };
            if (contact) { newCustomer.contact = contact };
            if (pincode) { newCustomer.pincode = pincode };
            if (area) { newCustomer.area = area };
            if (address) { newCustomer.address = address };

            // Find the customer
            let customer = await Customer.where({ uname: req.uname });
            if (!customer) { return res.status(404).send("Not Found") }

            //Update the customer
            customer = await Customer.findByIdAndUpdate(req.params.id, { $set: newCustomer }, { new: true })

            //Sending response
            res.json({ customer });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })




// ROUTE 2: Get All the Notes using: GET "/api/customer/fetchcustomers". Login required

router.post('/fetchcustomers',
    async (req, res) => {
        try {
            let customer = await Customer.where({ usertype: "customer" })
            res.json(customer)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


module.exports = router
