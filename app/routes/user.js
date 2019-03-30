const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // defining routes.

    app.get(`${baseUrl}/view/all`, userController.getAllUser);


    /**
         * @apiGroup users
         * @apiVersion  1.0.0
         * @api {get} /api/v1/users/view/all api for user view all.
         *
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
             
         {
             "error":"false",
             "message":"All Details",
             "status":200,
                "data":[
                        {   createdOn: 2019-03-09T18:24:53.621Z,
                            countryCode: 'India',
                            mobileNumber: 987,
                            email: 'jatin4@gmail.com',
                            lastName: '',
                            firstName: 'random',
                            userId: 'J6dTM3C0o',
                            admin: false,
                            userName: 'random' }]
                    }
         
         @apiErrorExample {json} Error-Response:
         *
         * {
            "error": true,
            "message": "Failed To Find Blog Details",
            "status": 500,
            "data": null
           }
         
         
        */







    app.post(`${baseUrl}/delete/:userId`, userController.deleteUser)


    /**
         * @apiGroup users
         * @apiVersion  1.0.0
         * @api {post} /api/v1/users/delete/:userId api for user view all.
         *
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
             
         {
                "error": "false",
                "message": "Delete User",
                "status": 200,
                "data": {
                    "n": 0,
                    "ok": 1
                }
            }
         
         @apiErrorExample {json} Error-Response:
         *
         * {
            "error": true,
            "message": "No user found",
            "status": 500,
            "data": null
           }
         
         
        */




    app.post(`${baseUrl}/signup`, userController.signUpFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * 
     * 
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} lastName lastName of the user. (body params) (required)
     * @apiParam {string} mobile mobile of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} countryCode countryCode of the user. (body params) (required)
     * @apiParam {string} admin admin of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         { error: false,
            message: 'User created',
            status: 200,
            data:
            { __v: 0,
                _id: 5c9f5a501de1bf1ed44e6770,
                createdOn: 2019-03-30T12:00:16.248Z,
                countryCode: 'India',
                mobileNumber: 0,
                email: 'someone@gmail.com',
                lastName: 'Gupta',
                firstName: 'Jatin',
                userId: 'EzEcRgu62',
                admin: false,
                userName: 'Jatin' } 
                }
    
    */

    // params: firstName,lastName,mobile,email,password,countryCode,admin.

    app.post(`${baseUrl}/login`, userController.loginFunction);


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         { error: false,
            message: 'Login Successful',
            status: 200,
            data:
            { authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InVwaWlDZHFRViIsImlhdCI6MTU1Mzk0NzM2MDY4NSwiZXhwIjoxNTU0MDMzNzYwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJKYXRpbiIsImRhdGEiOnsiY291bnRyeUNvZGUiOiJJbmRpYSIsIm1vYmlsZU51bWJlciI6MCwiZW1haWwiOiJqYXRpbjEwQGdtYWlsLmNvbSIsImxhc3ROYW1lIjoiR3VwdGEiLCJmaXJzdE5hbWUiOiJqYXRpbiIsInVzZXJJZCI6IkZ0NFpINU1WeSIsImFkbWluIjpmYWxzZSwidXNlck5hbWUiOiJqYXRpbiJ9fQ.za4xard4KEOmh1Imqt0Kb7KVcX2RNCgy6rT4Q90i6eg',
                userDetails:
                { countryCode: 'India',
                    mobileNumber: 0,
                    email: 'jatin10@gmail.com',
                    lastName: 'Gupta',
                    firstName: 'jatin',
                    userId: 'Ft4ZH5MVy',
                    admin: false,
                    userName: 'jatin' 
                }
             }
            
        }


    
    */

    // params: email, password.

    app.post(`${baseUrl}/logout`, userController.logout);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout to logout user.
     *
     * @apiParam {string} authToken authToken of the user. (auth headers) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null

        }

    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Blog Details",
	    "status": 500,
	    "data": null
	   }
    */

    // auth token params: authToken.

    app.post(`${baseUrl}/editPassword/:email`, userController.editPassword)

    
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/ueditPassword/:email to editing Password of a user.
     *
     * @apiParam {string} password password of the user. (auth headers) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         { error: 'false',
            message: ' editPassword',
            status: 200,
            data: { n: 1, nModified: 1, ok: 1 
            }
         }

    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No user found",
	    "status": 500,
	    "data": null
	   }
    */
    
    

}
