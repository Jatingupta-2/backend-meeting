const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const appConfig = require('../../config/appConfig');
const mailController = require('./../controllers/mailController')

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/events`;

    app.get(`${baseUrl}/view/all/:receiverId`, eventController.getAllEvents);


    /**
             * @apiGroup users
             * @apiVersion  1.0.0
             * @api {get} /api/v1/events/view/all:receiverId api for user view all events for a user.
             *
             * 
             * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             * 
             * @apiSuccessExample {object} Success-Response:
                 
             {"error":"false",
             "message":"All Events",
             "status":200,
             "data":[
                 {"receiverId":"Ft4ZH5MVy",
                 "eventId":"_dhLCrnij",
                 "resizable":{"_id":"5c9f4578e2e18310fc52e0e0","afterEnd":false,"beforeStart":false},
                 "editTime":"2019-03-30T10:31:20.000Z",
                 "draggable":true,"allDay":true,
                 "lastUpdatedBy":"random-admin",
                 "purpose":"General Discussion",
                 "where":"Meeting Room 3","color":"#1e90ff",
                 "title":"New event",
                 "end":"2019-03-30T18:29:00.000Z",
                 "start":"2019-03-29T18:30:00.000Z"}]
    
             
             @apiErrorExample {json} Error-Response:
             *
             * {"error":true,"message":"No Event found","status":500,"data":null}
             
             
            */






    app.post(`${baseUrl}/add`, eventController.addEvent);




    /**
         * @apiGroup users
         * @apiVersion  1.0.0
         * @api {post} /api/v1/events/add api for adding events.
         *
         * 
         * 
         * @apiParam {string} receiverId receiverId of the user. (body params) (required)
     * @apiParam {string} start start of the user. (body params) (required)
     * @apiParam {string} end end of the user. (body params) (required)
     * @apiParam {string} title title of the user. (body params) (required)
     * @apiParam {string} color color of the user. (body params) (required)
     * @apiParam {string} allDay allDay of the user. (body params) (required)
     * @apiParam {string} resizable resizable of the user. (body params) (required)
     * @apiParam {string} draggable draggable of the user. (body params) (required)
     * @apiParam {string} where where of the user. (body params) (required)
     * @apiParam {string} purpose purpose of the user. (body params) (required)
     * @apiParam {string} lastUpdatedBy lastUpdatedBy of the user. (body params) (required)
     * 
        
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
             
         { error: false,
        message: 'Event created',
        status: 200,
        data:
         { __v: 0,
           receiverId: 'Q3ky2MhiC',
           eventId: 'z_iU6jDUH',
           resizable:
            {       _id: 5c9f677ee807cc3fc466ed52,
                    afterEnd: false,
                    beforeStart: false },
            _id: 5c9f677ee807cc3fc466ed51,
            editTime: 2019-03-30T12:56:30.000Z,
            draggable: true,
            allDay: true,
            lastUpdatedBy: 'random-admin',
            purpose: 'General Discussion',
                    where: 'Meeting Room 1',
                    color: '#1e90ff',
                    title: 'New event',
                    end: 2019-03-30T18:29:00.000Z,
                    start: 2019-03-29T18:30:00.000Z 
                }
             }

         
         
         
        */



    app.post(`${baseUrl}/delete/:eventId`, eventController.deleteEvent)



    /**
                 * @apiGroup users
                 * @apiVersion  1.0.0
                 * @api {post} /api/v1/events/delete/:eventId api for deleting an event.
                 *
                 * 
                 * @apiSuccess {object} myResponse shows error status, message, http status code, result.
                 * 
                 * @apiSuccessExample {object} Success-Response:
                     
                 { error: 'false',
                    message: ' deleteEvent',
                    status: 200,
                    data: {
                             "n": 0,
                             "ok": 1
                            }
                    }
             
             @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "No events found",
                "status": 500,
                "data": null
               }
                   
                 
                */





    app.put(`${baseUrl}/edit/:eventId`, eventController.editEvent)



    /**
                 * @apiGroup users
                 * @apiVersion  1.0.0
                 * @api {put} /api/v1/events/edit/:eventId api for editing an event.
                 *
                 * 
                 * @apiParam {Object} Event Event to be edited. (body params) (required)
                 * 
                 * @apiSuccess {object} myResponse shows error status, message, http status code, result.
                 * 
                 * @apiSuccessExample {object} Success-Response:
                     
                 { error: false,
                    message: 'Event Edited',
                    status: 200,
                    data:
                    { error: 'false',
                        message: ' editEvent',
                        status: 200,
                        data: { n: 1, nModified: 1, ok: 1 } } }
        
                 
                 @apiErrorExample {json} Error-Response:
                 *
                 * {"error":true,"message":"No Event found","status":500,"data":null}
                 
                 
                */







    app.post(`${baseUrl}/mail`, mailController.main)

     /**
             * @apiGroup users
             * @apiVersion  1.0.0
             * @api {post} /api/v1/events/mail api for user view all events for a user.
             *
             * 
             * @apiParam {string} email email of the user. (body params) (required)
             * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             * 
             * @apiSuccessExample {object} Success-Response:
                 
              { error: false,
                message: 'Mail Sent Successfully',
                status: 200,
                data: null 
            }
    
             
             
             
            */

    app.post(`${baseUrl}/editmail`, mailController.editMail);


/**
             * @apiGroup users
             * @apiVersion  1.0.0
             * @api {post} /api/v1/events/editmail api for user view all events for a user.
             *
             * 
             * @apiParam {string} email email of the user. (body params) (required)
             * @apiParam {string} subject subject of the email. (body params) (required)
             * @apiParam {string} text text of the email. (body params) (required)
             * 
             * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             * 
             * @apiSuccessExample {object} Success-Response:
                 
              { error: false,
                message: 'Mail Sent Successfully',
                status: 200,
                data: null 
            }
    
             
             
             
            */



}
