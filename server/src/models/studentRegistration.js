const mongoose=require("mongoose")
const validator=require("validator")
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        unique: true,
        minlength: 4,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        minlength: 10,
        required: true
    },
    address: { type: String },
    date: { type: Date, default: Date.now },
});

const Student = mongoose.model('student', studentSchema);
Student.createIndexes()
module.exports = Student;
