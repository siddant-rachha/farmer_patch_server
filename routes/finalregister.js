const FinalRegister = require("../models/FinalRegister.js");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {

    //just experimental


    console.log(req.body)

    const newFinalRegister = new FinalRegister({
        ...req.body
    });

    try {
        const savedFinalRegister = await newFinalRegister.save();

        const filter = { FarmerId: req.body.FarmerId };
        const update = { FirstTimeLogin: "N" };

        // `doc` is the document _before_ `update` was applied
        let doc = await Character.findOneAndUpdate(filter, update);


        return res.status(201).json(savedFinalRegister);


    } catch (error) {
        return res.status(500).json(error)
    }

});

module.exports = router;