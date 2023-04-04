const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema({
    email: { type: String, required: true},
    otp: { type: Number, required: true }

}, { timestamps: true });

module.exports = mongoose.model("otp", otpSchema, "otp")