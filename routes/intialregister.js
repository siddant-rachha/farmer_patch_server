const IntialRegister = require("../models/IntialRegister.js");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {

    //just experimental

    const farmerId = Math.floor(Math.random() * 899999 + 100000)

    console.log(req.body)

    const newIntialRegister = new IntialRegister({
        email: req.body.email,
        Password: req.body.Password,
        FirstTimeLogin: "Y",
        FirstTimeLand: "Y",
        Role: req.body.Role,
        mobile: req.body.mobile,
        Date: new Date().toISOString(),
        FarmerId: farmerId
    });

    try {
        const savedInitialRegister = await newIntialRegister.save();
        return res.status(201).json(savedInitialRegister);

    } catch (error) {
        return res.status(500).json(error)
    }

});

module.exports = router;