const mongoose = require("mongoose")
const validator = require("validator")
const { Schema } = mongoose;

const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minlength: 10,
        required: true
    },
    message: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const enquiry = mongoose.model('enquiry', enquirySchema);
enquiry.createIndexes()
module.exports = enquiry;
