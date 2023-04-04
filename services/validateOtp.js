const Otp = require("../models/Otp");

async function validateOtp(email, otpToCheck) {

    const foundOtp = await Otp.findOne({ email: email })

    //check expiry by .env
    if (otpToCheck == foundOtp.otp) {
        let dateUpdated = foundOtp.updatedAt
        dateUpdated.setMinutes(dateUpdated.getMinutes() + parseInt(process.env.OtpExpireTime));
        added15minToDate = new Date(dateUpdated);

        if (added15minToDate > new Date()) return "valid"
        else return "expired"
    }
    else return "invalid"

}

module.exports = validateOtp