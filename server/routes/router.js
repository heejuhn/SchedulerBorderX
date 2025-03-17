const express = require('express')
const router = express.Router();
const schemas = require('../models/schemas')

router.post('/api/appointments', async(req, res) => {
    const {name, email, phone, date, time, notes} = req.body
    const appointmentData = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        notes: notes
    }
    const newAppointment = new schemas.Appointments(appointmentData)
    const saveAppointment = await newAppointment.save()
    if (saveAppointment) {
        console.log(name + ' | ' + email + ' | ' + phone + ' | ' + date + ' | ' + time + ' | ' + notes)
    }
    res.end();
})

module.exports = router