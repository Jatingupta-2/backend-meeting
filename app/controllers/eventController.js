const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib')
const EventModel = mongoose.model('Event');



let getAllEvents = (req, res) => {
    EventModel.find({
        receiverId: req.params.receiverId
    }
    )
        
        .select('-__v -_id')
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Event Controller: getAllEvents', 10)
                let apiResponse = response.generate(true, 'Failed To Find Event Details', 500, null)
                res.send(apiResponse)
            }
            else if (check.isEmpty(result)) {
                logger.error('No result found', 'Event Controller: getAllEvents', 10)
                let apiResponse = response.generate(true, 'No Event found', 500, null)
                res.send(apiResponse)
            }
            else {
                let apiResponse = response.generate('false', 'All Events', 200, result)
                console.log(apiResponse)
                res.send(apiResponse);
            }
        })
}



let addEvent = (req, res) => {



    let validateInput = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.receiverId)) {
                let apiResponse = response.generate(true, 'receiverId is missing', 400, null)
                reject(apiResponse);
            }
            else {
                resolve(req);
            }
        })
    }



    let createEvent = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body);
            
            var i=0;
            var resizable=[];
            for(i=0;i<req.body.resizable.length;i++){
                resizable.push(req.body.resizable[i]) ;
            }

            
            // for(i=0;i<req.body.actions.length;i++){
            //     actions.push(req.body.actions[i]) ;
            // }
            let newEvent = new EventModel({
                receiverId: req.body.receiverId,
                eventId: shortId.generate(),
                start: time.ConvertToGMT(req.body.start),
                end: time.ConvertToGMT(req.body.end),
                title: req.body.title,
                color: req.body.color,
                allDay: req.body.allDay,
                resizable:resizable,
                draggable: req.body.draggable,
                editTime: time.now(),
                where:req.body.where,
                purpose:req.body.purpose,
                lastUpdatedBy:req.body.lastUpdatedBy
                
            });

            

        
            newEvent.save((err, result) => {
                if (err) {
                    console.log(err);
                    logger.error(err.message, 'EventController:create Event', 10)
                    let apiResponse = response.generate(true, 'Failed to create new Event', 500, null);
                    reject(apiResponse);
                }
                else{
                    let newObj= result.toObject();
                    console.log(newObj)
                    resolve(newObj);
                }
            })
        })
    }

    validateInput(req,res)
    .then(createEvent)
    .then((resolve)=>{
        let apiResponse=response.generate(false,'Event created',200,resolve)
        console.log(apiResponse);
        res.send(apiResponse);
    })
    .catch((err)=>{
        console.log(err)
        res.send(err);
    })

}//end add event



let editEvent=(req,res)=>{

    let validateInput = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body)) {
                let apiResponse = response.generate(true, 'eventId is missing', 400, null)
                reject(apiResponse);
            }
            else {
                resolve(req);
            }
        })
    }



    let editevent=()=>{
        return new Promise((resolve, reject) => {
        let options= req.body;
        EventModel.update({'eventId':req.params.eventId},options,{multi:true})
        .exec((err,result)=>{
            if (err) {
                console.log(err)
                logger.error(err.message, 'Event Controller: editEvent', 10)
                let apiResponse = response.generate(true, 'Failed To Find Event Details', 500, null)
                reject(apiResponse)
            }
            else if (check.isEmpty(result)) {
                logger.error(err.message, 'Event Controller: editEvent', 10)
                let apiResponse = response.generate(true, 'No Event found', 500, null)
                reject(apiResponse)
            }
            else {
                let apiResponse = response.generate('false', ' editEvent', 200, result)
                resolve(apiResponse)
            }
        })
    })
    }

    validateInput(req,res)
    .then(editevent)
    .then((resolve)=>{
        let apiResponse=response.generate(false,'Event Edited',200,resolve)
        console.log(apiResponse)
        res.send(apiResponse);
    })
    .catch((err)=>{
        console.log(err)
        res.send(err);
    })

}


let deleteEvent=(req,res)=>{
    EventModel.remove({'eventId':req.params.eventId})
    .exec((err,result)=>{
        if (err) {
            console.log(err)
            logger.error(err.message, 'Event Controller: deleteEvent', 10)
            let apiResponse = response.generate(true, 'Failed To Find Event Details', 500, null)
            res.send(apiResponse)
        }
        else if (check.isEmpty(result)) {
            logger.error(err.message, 'Event Controller: deleteEvent', 10)
            let apiResponse = response.generate(true, 'No Event found', 500, null)
            res.send(apiResponse)
        }
        else {
            let apiResponse = response.generate('false', ' deleteEvent', 200, result)
            console.log(apiResponse)
            res.send(apiResponse);
        }
    })
}



module.exports = {
    deleteEvent:deleteEvent,
    getAllEvents: getAllEvents,
    addEvent: addEvent,
    editEvent:editEvent
}