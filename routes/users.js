const express = require('express')
const router = express.Router()

exports.my_class_schedule = function(req, res) {
    res.render('my_class_schedule')
}

exports.login = function(req, res) {
    res.render('login')
}