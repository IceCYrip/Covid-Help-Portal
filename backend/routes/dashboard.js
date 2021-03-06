const express = require('express');
const Donor = require('../models/Donor');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const router = express.Router()

// var jwt = require('jsonwebtoken');
// var fetchuser = require('../middleware/fetchuser');
// const JWT_SECRET = 'Karanhello';



//ROUTE 0: Create donor data using: POST "/api/dashboard/createdonor". No login required
router.post('/createdonor',

    async (req, res) => {
        try {
            let donor = await Donor.findOne({ name: req.body.name });

            if (donor) {
                return res.status(400).json({ error: 'Sorry a user with this email already exists' })
            }
            donor = await Donor.create({
                sno: req.body.sno,
                name: req.body.name,
                bloodgroup: req.body.bloodgroup,
                contact: req.body.contact,

            })

            res.json({ donor })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some Error Occured")
        }
    })


//ROUTE 0.1: Create donor data using: POST "/api/dashboard/createdoctor". No login required
router.post('/createdoctor',

async (req, res) => {
    try {
        let doctor = await Doctor.findOne({ name: req.body.name });

        if (doctor) {
            return res.status(400).json({ error: 'Sorry a user with this email already exists' })
        }
        doctor = await Doctor.create({
            sno: req.body.sno,
            name: req.body.name,
            area: req.body.area,
            contact: req.body.contact,

        })

        res.json({ doctor })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
    }
})



// ROUTE 1: Get all the donors using: POST "/api/dashboard/fetchdonors". Login required

router.post('/fetchdonors',
    async (req, res) => {
        try {
            let donor = await Donor.where()
            res.json(donor)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 1.1: Update an existing donor using: PUT "/api/dashboard/updatedonor". Login required

router.put('/updatedonor/:id',
    async (req, res) => {
        const { name, bloodgroup, contact } = req.body;
        try {
            // Create a newNote object
            const newDonor = {};
            if (name) { newDonor.name = name };
            if (bloodgroup) { newDonor.bloodgroup = bloodgroup };
            if (contact) { newDonor.contact = contact };

            // Find the note to be updated and update it
            let donor = await Donor.where({ name: req.name });
            if (!donor) { return res.status(404).send("Not Found") }

            donor = await Donor.findByIdAndUpdate(req.params.id, { $set: newDonor }, { new: true })
            res.json({ donor });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 1.2: Fetch a donor's data using: POST "/api/dashboard/donordetails". Login required

router.post('/donordetails',
    async (req, res) => {
        try {
            let donor = await Donor.findOne({ sno: req.body.sno })
            res.json(donor)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



// ROUTE 2: Get all the doctors using: POST "/api/dashboard/fetchdoctors". Login required

router.post('/fetchdoctors',
    async (req, res) => {
        try {
            let doctor = await Doctor.where()
            res.json(doctor)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



// ROUTE 2.1: Update an existing doctor using: PUT "/api/dashboard/updatedoctor". Login required
router.put('/updatedoctor/:id',
    async (req, res) => {
        const { sno, name, area, contact } = req.body;
        try {
            // Create a newNote object
            const newDoctor = {};
            if (sno) { newDoctor.sno = sno };
            if (name) { newDoctor.name = name };
            if (area) { newDoctor.area = area };
            if (contact) { newDoctor.contact = contact };

            // Find the note to be updated and update it
            let doctor = await Doctor.where({ name: req.name });
            if (!doctor) { return res.status(404).send("Not Found") }

            doctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: newDoctor }, { new: true })
            res.json({ doctor });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// ROUTE 1.2: Fetch a donor's data using: POST "/api/dashboard/doctordetails". Login required

router.post('/doctordetails',
    async (req, res) => {
        try {
            let doctor = await Doctor.findOne({ sno: req.body.sno })
            res.json(doctor)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



//ROUTE 0.1: Create donor data using: POST "/api/dashboard/createadmin". No login required
router.post('/createadmin',

async (req, res) => {
    try {
        let admin = await Admin.findOne({ uname: req.body.uname });

        if (admin) {
            return res.status(400).json({ error: 'Sorry a user with this email already exists' })
        }
        admin = await Admin.create({
            uname: req.body.uname,
            password: req.body.password,
            usertype: "admin"

        })

        res.json({ admin })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
    }
})


module.exports = router