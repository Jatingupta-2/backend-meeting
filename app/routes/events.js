const express= require('express');
const router = express.Router();
const eventController= require('../controllers/eventController');
const appConfig = require('../../config/appConfig');
const mailController= require('./../controllers/mailController')

module.exports.setRouter=(app)=>{
    let baseUrl=`${appConfig.apiVersion}/events`;
 
    app.get(`${baseUrl}/view/all/:receiverId`,eventController.getAllEvents);

    app.post(`${baseUrl}/add`,eventController.addEvent);

    app.post(`${baseUrl}/delete/:eventId`,eventController.deleteEvent)

    app.put(`${baseUrl}/edit/:eventId`,eventController.editEvent)

    app.post(`${baseUrl}/mail`,mailController.main)
}
