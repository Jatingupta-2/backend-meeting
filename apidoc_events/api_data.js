define({ "api": [
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/view/all:receiverId",
    "title": "api for user view all events for a user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n{\"error\":\"false\",\n\"message\":\"All Events\",\n\"status\":200,\n\"data\":[\n    {\"receiverId\":\"Ft4ZH5MVy\",\n    \"eventId\":\"_dhLCrnij\",\n    \"resizable\":{\"_id\":\"5c9f4578e2e18310fc52e0e0\",\"afterEnd\":false,\"beforeStart\":false},\n    \"editTime\":\"2019-03-30T10:31:20.000Z\",\n    \"draggable\":true,\"allDay\":true,\n    \"lastUpdatedBy\":\"random-admin\",\n    \"purpose\":\"General Discussion\",\n    \"where\":\"Meeting Room 3\",\"color\":\"#1e90ff\",\n    \"title\":\"New event\",\n    \"end\":\"2019-03-30T18:29:00.000Z\",\n    \"start\":\"2019-03-29T18:30:00.000Z\"}]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\"error\":true,\"message\":\"No Event found\",\"status\":500,\"data\":null}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "GetApiV1EventsViewAllReceiverid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/add",
    "title": "api for adding events.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>receiverId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start",
            "description": "<p>start of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end",
            "description": "<p>end of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "color",
            "description": "<p>color of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "allDay",
            "description": "<p>allDay of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resizable",
            "description": "<p>resizable of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "draggable",
            "description": "<p>draggable of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": "<p>where of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>purpose of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastUpdatedBy",
            "description": "<p>lastUpdatedBy of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n { error: false,\nmessage: 'Event created',\nstatus: 200,\ndata:\n { __v: 0,\n   receiverId: 'Q3ky2MhiC',\n   eventId: 'z_iU6jDUH',\n   resizable:\n    {       _id: 5c9f677ee807cc3fc466ed52,\n            afterEnd: false,\n            beforeStart: false },\n    _id: 5c9f677ee807cc3fc466ed51,\n    editTime: 2019-03-30T12:56:30.000Z,\n    draggable: true,\n    allDay: true,\n    lastUpdatedBy: 'random-admin',\n    purpose: 'General Discussion',\n            where: 'Meeting Room 1',\n            color: '#1e90ff',\n            title: 'New event',\n            end: 2019-03-30T18:29:00.000Z,\n            start: 2019-03-29T18:30:00.000Z \n        }\n     }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "PostApiV1EventsAdd"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/delete/:eventId",
    "title": "api for deleting an event.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n{ error: 'false',\n   message: ' deleteEvent',\n   status: 200,\n   data: {\n            \"n\": 0,\n            \"ok\": 1\n           }\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"No events found\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "PostApiV1EventsDeleteEventid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/editmail",
    "title": "api for user view all events for a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p>subject of the email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>text of the email. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n  { error: false,\n    message: 'Mail Sent Successfully',\n    status: 200,\n    data: null \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "PostApiV1EventsEditmail"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/mail",
    "title": "api for user view all events for a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n  { error: false,\n    message: 'Mail Sent Successfully',\n    status: 200,\n    data: null \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "PostApiV1EventsMail"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/events/edit/:eventId",
    "title": "api for editing an event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Event",
            "description": "<p>Event to be edited. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n{ error: false,\n   message: 'Event Edited',\n   status: 200,\n   data:\n   { error: 'false',\n       message: ' editEvent',\n       status: 200,\n       data: { n: 1, nModified: 1, ok: 1 } } }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\"error\":true,\"message\":\"No Event found\",\"status\":500,\"data\":null}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes1/events.js",
    "groupTitle": "users",
    "name": "PutApiV1EventsEditEventid"
  }
] });
