const mongoose = require('mongoose');
const Schema = mongoose.Schema
const time= require('./../libs/timeLib')

var res = new Schema({
    beforeStart: {
        type: Boolean,
        default: ''
    },
    afterEnd: {
        type: Boolean,
        default: ''
    }
})


let EventSchema = new Schema({
    receiverId: {
        type: String
    },
    eventId: {
        type: String,
        unique: true
    },
    start: {
        type: Date,
        default: time.now()

    },
    end: {
        type: Date,
        default: time.now()
    },
    title: {
        type: String,
        default: ''
    },
    color: {
        
       
            type: String,
            default: ''
        
    },
    where:{
        type:String,
        default:""
    },
    purpose:{
        type:String,
        default:""
    }
    ,
    lastUpdatedBy:{
        type:String,
        default:""
    }

    ,
    allDay: {

        type: Boolean,
        default: false
    },
    resizable: res,
    draggable: {
        type: Boolean,
        default: false
    },

    editTime: {
        type: Date,
        default: time.now()
    }
})

module.exports = mongoose.model('Event', EventSchema); 