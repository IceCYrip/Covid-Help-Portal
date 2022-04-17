const express = require('express');
const Customer = require('../models/Customer');
const Supplier = require('../models/Supplier');
const router = express.Router()


// ROUTE 1: Get all the donors using: POST "/api/reports/userscount". Login required

router.post('/userscount',
    async (req, res) => {
        try {
            let Ccount = (await Customer.where()).length
            let Scount = (await Supplier.where()).length

            let Ucount = Ccount + Scount

            res.json({ Ccount, Scount, Ucount })

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 2: Get all the donors using: POST "/api/reports/customerperarea". Login required

router.post('/customerperarea',
    async (req, res) => {
        try {

            let CKothrud = (await Customer.where({ area: 'Kothrud' })).length
            let CBaner = (await Customer.where({ area: 'Baner' })).length
            let CAundh = (await Customer.where({ area: 'Aundh' })).length
            let CShivajinagar = (await Customer.where({ area: 'Shivajinagar' })).length
            let CPimpleSaudagar = (await Customer.where({ area: 'Pimple Saudagar' })).length

            res.json({ CKothrud, CBaner, CAundh, CShivajinagar, CPimpleSaudagar })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 3: Get all the donors using: POST "/api/reports/customerperarea". Login required

router.post('/supplierperarea',
    async (req, res) => {
        try {

            let SKothrud = (await Supplier.where({ area: 'Kothrud' })).length
            let SBaner = (await Supplier.where({ area: 'Baner' })).length
            let SAundh = (await Supplier.where({ area: 'Aundh' })).length
            let SShivajinagar = (await Supplier.where({ area: 'Shivajinagar' })).length
            let SPimpleSaudagar = (await Supplier.where({ area: 'Pimple Saudagar' })).length

            res.json({ SKothrud, SBaner, SAundh, SShivajinagar, SPimpleSaudagar })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

//Route 4: Get Stock data using POST "/api/reports/getstock". Login required

router.post('/getstock',
    async (req, res) => {

        try {

            let supplier = await Supplier.where()
            let maskcount = 0
            let remcount = 0
            let oxygencount = 0

            supplier.forEach((value) => {
                maskcount += value.mask;
                remcount += value.remdevisir;
                oxygencount += value.oxygencylinder;
            });

            res.json({ maskcount, remcount, oxygencount })

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



module.exports = router