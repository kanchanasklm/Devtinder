-create a repository
-Intialize the repository
-node_modules,package.json,package-l0ck.json
-install exptress
-create a server
-listen to port 7777
-write request handlers for /test,/hello
-install nodemon and updates scripts inside package.json
-what are dependencies
-what is the use of "-g" while npm install
-differences between caret and tilde(^ vs ~)

4.  -Intialize git
    -.gitignore
    -create a remote repo on github
    -push all code to remote origin
    -play with routes and rote extensions ex /hello,/,/hello/2,/xyz
    -Order of the routes matter a lot
    -install postman app and make a workspace/collection>test api call
    -write logic to handle GET,POST,PATCH,DELETE API calls and test them on postman
    -explore routing and use of ?,+,(),+ in the routes
    -use of regex in routes /a/,/.\*fly$/
    -reading the query params in the routes
    -reading the dynamic routes

5
-create Multiple Route handlers
-next()
-res.send(),next function
-app.use("/route",[rH,rH2,rH3,rH4,rH5]);
-what is middleware?Why do we need?
-how expressjs handles requests behind the scenes.
-dif between app.use and app.all
-write a dummy auth middleware for admin
-write a dummy auth middleware for all user routes,except /user/login
-Error handling using app.use('/',(err,req,res,next)={});

-6
-Create a free cluster on MongoDB offeicial website(MongoAtlas)
-Install Mongosse library
-Connect your application to the database "connection-url"/devtinder(devtinder is database)
-call the connectionDB function and connect to database before starting application on 7777
-create a userschema
-create a usernodel
-creating post /signup api that will add data to database.
-push some documents using api calls from post man

-

7
-diff between json and js
-add the express.json middleware to your app
-make your signup api dynamic to receive data from the end user

- User.findone with duplicate email ids,which object returned
  -API-Get user by email
  -API-Feed API-GET/feed-get all the users from the database
  -create api get user by id by using findbyid.
  -create a delete user api
  -diff between patch and put api
  -API-UPDATE A USER
  -Explore the mongoose documentation for model methods
  -what are options in a model.findoneupdate api method,explore more about it
  -create api which update the user with emailId.

8
-Explore schematypes options from the documentation
add required,unique,lowercase,min,minlength,trim
-Add default
-Create a custom validate function for gender
-Improve the DB schema-PUT all appropriate validations on each field in schema
-Add timestamp to the userSchema
-ADD API LEVEL VALIDATIONS ON PATCH REQUEST & SIGNUP API
-ADD API VALIDATIONS FOR EACH FIELD-data sanitization
-install validator
-Explore validator library function and the validator functions for password,email,photourl

-

9--
-Validate data in SignUp API
-Install bcrypt package
-create passwordhash using bcrypt.hash and the save user is encrypted password
-create login api
-compare passwords and throw errors if email or password is valid

--10
-install cookieparser
-jst send dummy cookie to user
-create GET /PROFILE API and check if you get the cookie
-install jsonwebtoken
-In login api ,after email and password validation,create a jwt token and send it to user in cookies
-read the cookies inside your profile api and failed the logged in user.
-write user auth middleware
-add middleware in profile api,&sendconnection request api
-set the expiry of jwt token and cookies to 7 days.
-never expire token is bad thing bcz if a suer opens a your profile from friend laptop it will harm .bcz token is not expires.so expiry token is better.
-create userschema methods to getJWT() and to comparepassword(passwordinputbyuser)

-11
-explore tinder apis
-create a list of all apis in tinder
-group multiple routes under respective routers.
-explore or read documentation for express router
-create routes folder for managing auth,profile,request routers
-create authRouter,profileRouter,RequestRouter
-Import these routers in app.js
-Create POST /logout API
-Create PATCH /profile/edit
-create PATCH /profile/password API =>forgot password API
-Make you validate all data in every POST,PATCH apis

-12
Craete Connection request schema
Send Connection request api
-proper validation of data
-Think about all corner cases
-$or query and $and query in mongoose
-schema.pre("save) function
-Read more about indexes in DB
-Why do we need index in db
-what is the advantages and disadvantages of dreating
-Read the article for about compound indexes.

-
