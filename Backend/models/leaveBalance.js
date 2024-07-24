const mongoose = require('mongoose');

const LeaveBalanceSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    sickLeave: { type: Number, default: 12 },
    casualLeave: { type: Number, default: 2 },
    annualLeave: { type: Number, default: 7 }
}, { timestamps: true });

const LeaveBalance = mongoose.model('LeaveBalance', LeaveBalanceSchema);

module.exports = LeaveBalance;
