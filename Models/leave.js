const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'SignInPage', 
    //     required: true
    // },
    leaveType: {
        type: String,
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
        default: 'Pending' 
    }
});

module.exports = mongoose.model('Leave', LeaveSchema);
