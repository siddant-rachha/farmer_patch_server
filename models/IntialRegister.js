const mongoose = require("mongoose");
const { Schema } = mongoose;

const intialRegisterSchema = new Schema({
    email: { type: String, required: true, unique: true },
    Password: { type: String, required: true},
    FirstTimeLogin: { type: String, required: true},
    FirstTimeLand: { type: String, required: true},
    Role: { type: String, required: true, enum: ['FARMER', 'VENDOR'] },
    mobile: { type: String, required: true},
    Date: { type: String, required: true},
    FarmerId: { type: Number, required: true, unique: true },

}, { timestamps: true });

module.exports = mongoose.model("IntialRegister", intialRegisterSchema, "InitialRegister")