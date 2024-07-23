// models/leave.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        enum: ['Casual', 'Sick', 'Annual', 'Other'],
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    postingDate: { 
        type: Date,
        default: Date.now 
    },
    status: { 
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' 
    }
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User', 
    //     required: true
    // }
});

module.exports = mongoose.model('Leave', LeaveSchema);


