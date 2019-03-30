define({ "api": [
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for user view all.",
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
          "content": "    \n{\n    \"error\":\"false\",\n    \"message\":\"All Details\",\n    \"status\":200,\n       \"data\":[\n               {   createdOn: 2019-03-09T18:24:53.621Z,\n                   countryCode: 'India',\n                   mobileNumber: 987,\n                   email: 'jatin4@gmail.com',\n                   lastName: '',\n                   firstName: 'random',\n                   userId: 'J6dTM3C0o',\n                   admin: false,\n                   userName: 'random' }]\n           }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed To Find Blog Details\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/ueditPassword/:email",
    "title": "to editing Password of a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (auth headers) (required)</p>"
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
          "content": "{ error: 'false',\n   message: ' editPassword',\n   status: 200,\n   data: { n: 1, nModified: 1, ok: 1 \n   }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No user found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UeditpasswordEmail"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/delete/:userId",
    "title": "api for user view all.",
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
          "content": "    \n{\n       \"error\": \"false\",\n       \"message\": \"Delete User\",\n       \"status\": 200,\n       \"data\": {\n           \"n\": 0,\n           \"ok\": 1\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"No user found\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
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
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
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
          "content": " { error: false,\n    message: 'Login Successful',\n    status: 200,\n    data:\n    { authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InVwaWlDZHFRViIsImlhdCI6MTU1Mzk0NzM2MDY4NSwiZXhwIjoxNTU0MDMzNzYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJKYXRpbiIsImRhdGEiOnsiY291bnRyeUNvZGUiOiJJbmRpYSIsIm1vYmlsZU51bWJlciI6MCwiZW1haWwiOiJqYXRpbjEwQGdtYWlsLmNvbSIsImxhc3ROYW1lIjoiR3VwdGEiLCJmaXJzdE5hbWUiOiJqYXRpbiIsInVzZXJJZCI6IkZ0NFpINU1WeSIsImFkbWluIjpmYWxzZSwidXNlck5hbWUiOiJqYXRpbiJ9fQ.za4xard4KEOmh1Imqt0Kb7KVcX2RNCgy6rT4Q90i6eg',\n        userDetails:\n        { countryCode: 'India',\n            mobileNumber: 0,\n            email: 'jatin10@gmail.com',\n            lastName: 'Gupta',\n            firstName: 'jatin',\n            userId: 'Ft4ZH5MVy',\n            admin: false,\n            userName: 'jatin' \n        }\n     }\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (auth headers) (required)</p>"
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
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Blog Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the user. (body params) (required)</p>"
          },
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
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "admin",
            "description": "<p>admin of the user. (body params) (required)</p>"
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
          "content": "{ error: false,\n   message: 'User created',\n   status: 200,\n   data:\n   { __v: 0,\n       _id: 5c9f5a501de1bf1ed44e6770,\n       createdOn: 2019-03-30T12:00:16.248Z,\n       countryCode: 'India',\n       mobileNumber: 0,\n       email: 'someone@gmail.com',\n       lastName: 'Gupta',\n       firstName: 'Jatin',\n       userId: 'EzEcRgu62',\n       admin: false,\n       userName: 'Jatin' } \n       }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes2/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
