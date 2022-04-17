const express = require('express');
const router = express.Router()
var jwt = require('jsonwebtoken');
const { findOneAndUpdate } = require('../models/Supplier');
const Supplier = require('../models/Supplier');
const JWT_SECRET = 'Karanhello';

// var fetchuser = require('../middleware/fetchuser');



// ROUTE 1:Create customer data using: POST "/api/supplier/create". No login required
router.post('/create',

    async (req, res) => {

        //Check whether the user with this email exits already
        try {


            let supplier = await Supplier.findOne({ uname: req.body.uname });

            if (supplier) {
                return res.status(400).json({ error: 'Sorry a user with this email already exists' })
            }
            supplier = await Supplier.create({
                compname: req.body.compname,
                suppname: req.body.suppname,
                contact: req.body.contact,
                pincode: req.body.pincode,
                area: req.body.area,
                address: req.body.address,
                upi: req.body.upi,
                uname: req.body.uname,
                password: req.body.password,
                mask: req.body.mask,
                oxygencylinder: req.body.oxygencylinder,
                remdevisir: req.body.remdevisir,
                usertype: req.body.usertype,

            })

            const data = {
                supplier: {
                    id: supplier.id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);

            res.json({ authtoken })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
        }
    })




// ROUTE 1.1: Update an existing donor using: PUT "/api/supplier/updatesupplier/:id". Login required
router.put('/updatesupplier/:id',
    async (req, res) => {
        const { compname, suppname, contact, uname, upi, pincode, area, address, mask, oxygencylinder, remdevisir } = req.body;
        try {
            // Create a newsupplier object
            const newSupplier = {};
            if (compname) { newSupplier.compname = compname };
            if (suppname) { newSupplier.suppname = suppname };
            if (uname) { newSupplier.uname = uname };
            if (upi) { newSupplier.upi = upi };
            if (contact) { newSupplier.contact = contact };
            if (pincode) { newSupplier.pincode = pincode };
            if (area) { newSupplier.area = area };
            if (address) { newSupplier.address = address };
            if (mask) { newSupplier.mask = mask };
            if (oxygencylinder) { newSupplier.oxygencylinder = oxygencylinder };
            if (remdevisir) { newSupplier.remdevisir = remdevisir };


            // Find the supplier
            let supplier = await Supplier.where({ uname: req.uname });
            if (!supplier) { return res.status(404).send("Not Found") }

            //Update the supplier
            supplier = await Supplier.findByIdAndUpdate(req.params.id, { $set: newSupplier }, { new: true })

            //Sending response
            res.json({ supplier });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })





// ROUTE 3: Get all the doctors using: POST "/api/supplier/viewsuppliers". Login required 

router.post('/viewsuppliers',
    async (req, res) => {
        try {

            //Find Suppliers in that area with the available stock
            const item = req.body.requirement
            if (item == "mask") {
                const suppliers = await Supplier.where({ area: req.body.area }).where('mask').gt(req.body.qty)
                res.json(suppliers)
            }
            else if (item === "oxygencylinder") {
                const suppliers = await Supplier.where({ area: req.body.area }).where('oxygencylinder').gt(req.body.qty)
                res.json(suppliers)
            }
            else {
                const suppliers = await Supplier.where({ area: req.body.area }).where('remdevisir').gt(req.body.qty)
                res.json(suppliers)
            }




        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



module.exports = router