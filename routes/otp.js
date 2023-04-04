const Otp = require("../models/Otp.js");

const router = require("express").Router();

const validateOtp = require("../services/validateOtp.js")

const path = require('path');

//CREATE

router.post("/getotp", async (req, res) => {

    // experimental
    const generatedOtp = Math.floor(Math.random() * 899999 + 100000)
    //

    try {

        //experimental, need to check in mongoose schema
        if(req.body.email=="")return res.json("null email")

        //
        const filter = { email: req.body.email };
        const update = { otp: generatedOtp };

        const savedOtp = await Otp.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });

        return res.status(200).json(savedOtp.otp)

    } catch (error) {
        return res.status(500).json(error)
    }
});


router.post("/validateotp", async (req, res) => {

    try {

        async function testOtp() {
            const result = await validateOtp(req.body.email, req.body.otp)

            if(result!="valid") return res.status(401).json(result)

            return res.status(200).json(result)
        }
        testOtp()


    } catch (error) {
        return res.status(500).json(error)
    }
});


router.get("/otp", async (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'otp.html'));
})

module.exports = router;