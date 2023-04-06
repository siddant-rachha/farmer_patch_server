const mongoose = require("mongoose");
const { Schema } = mongoose;

const finalRegisterSchema = new Schema({
    ProfilePicString: { type: String, required: true },
    FirstName: { type: String, required: true},
    MiddleName: { type: String},
    LastName: { type: String, required: true},
    Hamlet: { type: String, required: true},
    Grampanchyat: { type: String, required: true},
    DOB: { type: String, required: true },

    FarmerId: { type: Number, required: true, unique: true },

    SurveyorId: { type: String, required: true },
    Gender: { type: String, required: true},
    GovtIdType: { type: String, required: true},
    GovtIdValue: { type: String},
    PrimaryMobileNo: { type: String, required: true},
    SecondaryMobileNo: { type: String},
    Education: { type: String, required: true },

    Occuption: { type: String, required: true},
    MemberofCommBasedOrg: { type: String, required: true},
    Caste: { type: String, required: true},
    State: { type: String, required: true },

    PinCode: { type: String, required: true},
    Village: { type: String, required: true},
    District: { type: String, required: true},
    SubDistrict: { type: String, required: true },

}, { timestamps: true });

module.exports = mongoose.model("FinalRegister", finalRegisterSchema, "FinalRegister")