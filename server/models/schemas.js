const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    date: {type:String, required:true},
    time: {type:String, required:true},
    notes: {type:String, required:false},
    entryDate: {type:Date, default:Date.now}
})

const Appointments = mongoose.model('Appointments', appointmentSchema, 'appointments')
const mySchemas = {'Appointments':Appointments}
module.exports = mySchemas